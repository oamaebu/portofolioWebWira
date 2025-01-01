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

          <div class="flex-1 overflow-y-auto text-sm md:text-base text-white text-justify pr-2 md:max-h-full max-h-48">
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
      this.page = 0
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
        vmb: "A project to develop a landing page website for a trucking company, VMB. The website provides essential information about the company, its achievements, and other relevant details. Additionally, an admin dashboard was created to manage orders and deliveries for clients, enabling seamless tracking and efficient operations. This project combines user-friendly design and functionality to support both customer engagement and internal processes."
        ,
        cru: "A project focused on creating a comprehensive landing page and informational website for the Central Research Unit (CRU) at Universitas Airlangga Hospital. The website serves as a hub for providing detailed information about the CRU division, its roles, and ongoing research initiatives. Additionally, it features a dedicated dashboard for hospital staff, allowing them to access various training modules designed to enhance their skills and knowledge. The platform also includes tools for staff to evaluate their learning progress through quizzes, ensuring continuous development and effective performance monitoring. This project aims to foster a culture of growth and knowledge sharing within the organization, supporting both professional development and the hospital's research goals."
        ,
        smk: `SMKN 1 Jetis Mojokerto requires a BKK (Bursa Kerja Khusus) website that will be integrated with the main domain. The website has two primary focuses: displaying information about internships and job openings. There are two subdomains for this website.
          - The first subdomain is dedicated to users, showcasing internship and job vacancy information.
          - The second subdomain is for admin purposes, allowing administrators to perform Create, Read, Update, and Delete (CRUD) operations on internship and job vacancy information, as well as manage other admin accounts. Access to these CRUD functions requires admin login for security purposes.`,
        game: `This application is an interactive educational game specifically designed for children with Down syndrome, aimed at helping improve their cognitive abilities through fun and educational play. The application consists of three game schemes, each focusing on different important aspects such as memory, visual attention, coordination, and following instructions.

        - Scheme 1: Children learn to recognize objects by comparing three similar but different images, where each image produces a sound when pressed, helping them link visual cues with audio.
        - Scheme 2: This challenge presents a grid of images, where children are asked to select three images according to instructions, training visual discrimination and selective attention.
        - Scheme 3: This scheme offers a puzzle game with semi-transparent images divided into a 2x2 grid, where children match puzzle pieces in the correct spots, enhancing visual-spatial perception and problem-solving skills. 

        In addition, the application includes a game management feature for teachers, allowing them to add new children to the system, track their progress, and adjust game levels based on each child’s needs. Teachers can select and configure the images used in each game scheme and adjust the difficulty level of the images to easy, medium, or hard categories. With this full control, teachers can create a customized and effective learning experience for each child’s cognitive development.`

        , news: 'A straightforward news application developed using Flutter and Firebase, designed to provide users with an intuitive platform for accessing the latest news. The app allows users to view a comprehensive list of news articles, read detailed stories, and search for specific topics or articles using a search function. Additionally, the app includes a login feature, offering users personalized access to news content, ensuring a tailored experience. With a user-friendly interface and seamless integration with Firebase, this application aims to deliver an efficient and engaging way for users to stay updated with current events.'
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
