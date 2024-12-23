<template>
  <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-black w-full max-w-6xl h-full max-h-[90vh] rounded-lg shadow-lg relative overflow-hidden">
      <!-- Close Button -->
      <button @click="closePopup"
        class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors z-10">
        ✖️
      </button>

      <!-- Popup Content Container -->
      <div class="flex flex-col md:flex-row px-4 pt-4 pb-4 h-full">
        <!-- Left Section: Full Scrollable Image -->
        <div class="w-full md:w-1/2 flex flex-col space-y-4 md:pr-4">
          <div class="w-full h-[50vh] md:h-[70vh] bg-black rounded-lg overflow-hidden">
            <div
              class="w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-700 grid place-items-center">
              <img :src="selectedPortofolioType === 'web'
                ? `/element/project/web/${selectedName}/${groupedProjects[selectedPortofolioType][selectedName][page].img}`
                : `/element/project/mobile/${selectedName}/${groupedProjects[selectedPortofolioType][selectedName][page].img}`"
                alt="Project Image" :class="selectedPortofolioType === 'web'
                  ? 'w-full h-auto object-cover cursor-move'
                  : 'w-full h-auto object-contain cursor-move'" />

            </div>
          </div>

          <!-- Navigation -->
          <div class="flex items-center justify-between space-x-4">
            <button @click="previousPage()" :disabled="page === 0" class="
                  flex items-center justify-center px-4 py-2 rounded
                  transition-colors duration-200
                  disabled:bg-gray-300 disabled:cursor-not-allowed
                  bg-teal-500 text-white hover:bg-teal-600
                ">
              &lt;&lt;
            </button>

            <p class="text-sm md:text-base text-center text-white flex-1 truncate">
              {{ groupedProjects[selectedPortofolioType][selectedName][page]["title"] }}
            </p>

            <button @click="nextPage()"
              :disabled="page + 1 >= groupedProjects[selectedPortofolioType][selectedName].length" class="
                  flex items-center justify-center px-4 py-2 rounded
                  transition-colors duration-200
                  disabled:bg-gray-300 disabled:cursor-not-allowed
                  bg-teal-500 text-white hover:bg-teal-600
                ">
              &gt;&gt;
            </button>
          </div>
        </div>

        <!-- Right Section: Description -->
        <div class="w-full md:w-1/2 mt-4 md:mt-0 md:pl-4 flex flex-col">
          <h2 class="text-xl md:text-3xl text-center text-white mb-4">
            {{ title }}
          </h2>

          <div class="flex-1 overflow-y-auto text-sm md:text-base text-white text-justify pr-2 max-h-48">
  <p v-html="getFormattedDescription(selectedName)"></p>
</div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    showPopup: Boolean,
    title: String,
    selectedName: String,
    selectedPortofolioType: String

  },
  methods: {
    closePopup() {
      this.$emit('close-popup');
    },
    getFormattedDescription(key) {
    return this.nl2br(this.description[key]);
  },
    closePopup() {
      this.$emit('close-popup');
    },
    nextPage() {
      this.page += 1
    },
    previousPage() {
      this.page -= 1
    }
  },
  data() {
    return {
      page: 0,
      description: {
      vmb: `
        Sebuah projek membangun web landing page untuk sebuah perusahaan trucking VMB. Web ini menunjukkan informasi dasar mengenai perusahaan tersebut, pencapaiannya, dan lain-lain. Selain itu, juga dibangun dashboard untuk admin yang dapat digunakan untuk menginput pesanan dan pengantaran kepada klien.
      `,
      cru: `
        Sebuah projek membangun web landing page dan informasi mengenai divisi CRU (Central Research Unit) di Rumah Sakit Universitas Airlangga. Selain itu, terdapat halaman dashboard untuk pegawai agar mereka dapat melakukan pelatihan melalui modul-modul pembelajaran yang disediakan di website, serta melakukan evaluasi pembelajaran melalui quiz.
      `,
      smk: `
        SMKN 1 Jetis Mojokerto membutuhkan sebuah website BKK yang akan disambungkan ke domain utama. Website ini memiliki dua fokus utama, yaitu menampilkan informasi magang dan lowongan kerja. 
        Terdapat dua subdomain untuk website ini: 

        - Subdomain pertama untuk user, menampilkan informasi magang dan lowongan kerja.
        - Subdomain kedua untuk admin, yang memungkinkan admin melakukan Create, Read, Update, dan Delete (CRUD) terhadap informasi magang, lowongan kerja, dan admin lainnya. Untuk akses CRUD, diperlukan login admin terlebih dahulu.
      `,
      game: `
        Aplikasi ini adalah sebuah game edukasi interaktif yang dirancang khusus untuk anak-anak dengan Down syndrome, bertujuan membantu meningkatkan kemampuan kognitif mereka melalui permainan yang menyenangkan dan mendidik.Terdiri dari tiga skema permainan, aplikasi ini melatih berbagai aspek penting seperti memori, atensi visual, koordinasi, dan pemahaman instruksi.

        - Skema 1: Anak belajar mengenali objek melalui tiga gambar serupa tetapi berbeda, di mana setiap gambar menghasilkan suara saat ditekan, membantu mereka menghubungkan visual dengan audio.
        - Skema 2: Menghadirkan tantangan berupa grid gambar, di mana anak diminta memilih tiga gambar sesuai instruksi, melatih diskriminasi visual dan atensi selektif.
        - Skema 3: Menawarkan permainan puzzle, dengan gambar semi transparan yang dibagi menjadi grid 2x2, di mana anak memasangkan potongan gambar pada tempat yang sesuai, meningkatkan persepsi visual-spasial dan keterampilan pemecahan masalah. 
          
          Selain itu, aplikasi ini dilengkapi dengan fitur manajemen permainan untuk guru, yang memungkinkan mereka menambahkan anak baru ke dalam sistem, melihat kemajuan anak, dan mengatur level permainan berdasarkan kebutuhan masing-masing anak. Guru dapat memilih dan mengatur gambar yang digunakan pada setiap skema permainan, serta menyesuaikan tingkat kesulitan gambar menjadi kategori mudah, sedang, atau sulit. Dengan kontrol penuh ini, guru dapat menciptakan pengalaman bermain yang sesuai dan efektif bagi perkembangan kognitif setiap anak.
      `

      ,news : ''
    },
    nl2br: (text) => text.replace(/\n/g, "<br>"),
      groupedProjects: {
        web: {
          vmb: [
            { title: "landing page", img: "vmb.png", },
            { title: "about page", img: "about.png", },
            { title: "create order page", img: "buatPesanan.png", },
            { title: "order list page", img: "daftarPesanan.png", },
            { title: "create delivery page", img: "buatPengiriman.png", },
            { title: "delivery list page", img: "daftarPengiriman.png", },
            { title: "account list page", img: "listAkun.png", },
          ],
          cru: [
            { title: "landing page", img: "cru.png", },
            { title: "about page", img: "about.png", },
            { title: "service and resources page", img: "service.png", },
            { title: "education page", img: "education.png", },
            { title: "login page", img: "login.png", },
            { title: "dashboard page", img: "dashboard.png", },
            { title: "module page", img: "module.png", },
            { title: "learning page", img: "learning.png", },
            { title: "quiz page", img: "quiz.png", },
          ],
          smk: [
            { title: "landing page", img: "pkl.png", },
            { title: "intern page", img: "magang.png", },
            { title: "job page", img: "lowongan.png", },
            { title: "detail page", img: "front.png", },
            { title: "Admin intern list page", img: "listMagang.png", },
            { title: "Admin job list page page", img: "listLowongan.png", },
            { title: "create job/intern page", img: "data.png", },
            { title: "account list", img: "listAkun.png", },

          ],
        },
        mobile: {
          game: [
            { title: "login ", img: "login.png" },
            { title: "teacher's dashboard", img: "dashboardGuru.jpg", },
            { title: "add new child ", img: "addAnak.jpg" },
            { title: "create level", img: "createGame.jpg", },
            { title: "child profile ", img: "profilAnak.jpg" },
            { title: "child statistic", img: "statistikAnak.jpg", },
            { title: "select level", img: "play.jpg" },
            { title: "level 1", img: "lvl1.jpg", },
            { title: "level 2", img: "lvl2.jpg" },
            { title: "level 3", img: "lvl3.jpg", },
            { title: "quiz mode", img: "quizMode.jpg" },
            { title: "level 1 quiz", img: "lvl1Quiz.jpg", },
            { title: "level 2 quiz", img: "lvl2Quiz.jpg" },
            { title: "level 3 quiz", img: "lvl3Quiz.jpg", },
          ],
          news: [
            { title: "login", img: "login.png" },
            { title: "sign up", img: "signUp.png", },
            { title: "profile", img: "profile.png" },
            { title: "report", img: "report.png", },
            { title: "detail", img: "detail.png" },
            { title: "search", img: "search.png", },
          ]
        }

      }
    };
  },
  watch: {
    page(newPage) {
      console.log(); // Access dynamically based on selectedName
    }
  }
};
</script>
