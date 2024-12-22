<template>
    <div class="bg-[#ffffff] text-white overflow-hidden">
        <!-- Header Section -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#2C3333] text-white p-5">
            <nav>
                <div class="flex justify-end items-center">
                    <!-- Logo -->


                    <!-- Hamburger Menu Button -->
                    <button @click="toggleMenu" class="block md:hidden focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <!-- Navigation Menu -->
                <div :class="['md:block', isMenuOpen ? 'block' : 'hidden']" class="transition-all duration-300">
                    <ul
                        class="flex flex-col md:flex-row justify-end gap-4 md:gap-10 text-xl md:text-xl mt-5 md:mt-0 mr-10">
                        <li><button class="hover:text-teal-500" @click="scrollToSection('about')">About Me</button></li>
                        <li><button class="hover:text-teal-500" @click="scrollToSection('skills')">Skills</button></li>
                        <li><button class="hover:text-teal-500"
                                @click="scrollToSection('certification')">Certification</button>
                        </li>
                        <li><button class="hover:text-teal-500"
                                @click="scrollToSection('experiences')">Experiences</button>
                        </li>
                        <li><button class="hover:text-teal-500" @click="scrollToSection('projects')">Projects</button>
                        </li>
                        <li><button class="hover:text-teal-500" @click="scrollToSection('about')">Kontak</button></li>
                    </ul>
                </div>
            </nav>
        </header>



        <div class="text-white flex flex-col md:flex-row items-center justify-center min-h-screen">
            <div class="text-center md:text-right md:ml-64 md:mr-10">
                <p class="md:text-6xl text-3xl whitespace-nowrap font-bold ">Hi! I'm <span class="text-teal-500">Wira
                        Kusuma</span></p><br>
                <p class="font-semibold">Driven Software Developer Specializing in Cloud and Backend Solutions, with a
                    Passion for Building Impactful, User-Centric Applications</p>

            </div>
            <div class=" md:text-left">
                <div class="mt-2 md:mr-48 whitespace-nowrap">
                    <div class="text-3xl md:text-5xl font-bold text-white slideDown">Software Developer</div>
                    <div class="text-3xl md:text-5xl font-bold text-[#a9b1b1]  animate-fade-slide-loop delay-200">
                        Software Developer</div>
                    <div class="text-3xl md:text-5xl font-bold text-[#8f9898]  animate-fade-slide-loop delay-300">
                        Software Developer</div>
                    <div class="text-3xl md:text-5xl font-bold text-[#6a7474]  animate-fade-slide-loop delay-400">
                        Software Developer</div>
                </div>
            </div>

        </div>
        <aboutMe/>
        <Skills/>
        <certification/>
        <br>
        <br>
        <Timeline />
        <br><br>
        <br><br>
        <templateProject />

       
        <div class="content-center mx-4 sm:mx-10 md:mx-20 lg:mx-36 my-10">
            <p class="text-4xl md:text-6xl text-white underline font-bold text-center">Contact <span
                    class="text-teal-500 underline">Me</span></p><br><br>
            <p class="md:text-xl text-center">You can contact me here ^__^ </p>
            <div class="py-8">
                <ul class="flex flex-wrap justify-center gap-6 md:gap-10 text-lg md:text-3xl">
                    <li class="bg-[#0E8388]  rounded-[30px] content-center min-w-48 min-h-32"><a href="#"><img class="object-contain"
                                src="/element/linkedIn.png" alt=""></a></li>
                    <li class="bg-[#0E8388] rounded-[30px] content-center min-w-48 min-h-32"><a href="#"><img
                                src="/element/github.png" alt=""></a></li>
                    <li class="bg-[#0E8388] rounded-[30px] content-center min-w-48 min-h-32"><a href="#"><img src="/element/github.png" alt=""></a></li>
                </ul>
            </div>
        </div>



    </div>
</template>

<script>
import Timeline from './timeline.vue'; // Adjust based on the current file's location
import aboutMe from './aboutMe.vue';
import Skills from './skills.vue';
import Certification from './certification.vue';
import templateProject from './projects/templateProject.vue';

export default {
    mounted() {
        // Set up IntersectionObserver di mounted lifecycle
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Menambahkan kelas animasi saat elemen terlihat
                    this.$refs.scrollElement.classList.add('scroll-appear');
                    observer.unobserve(entry.target); // Stop observing setelah animasi pertama
                }
            },
            { threshold: 0.2 } // Elemen harus 20% terlihat
        );

        // Mulai observasi elemen dengan ref
        observer.observe(this.$refs.scrollElement);
    },
    components: {
        Timeline, aboutMe, Skills, Certification, templateProject
    },
    data() {
        return {
            isMenuOpen: false,
            isActive: 'website',
            showPopup: false,
            projects: [
                {
                    img: "vmb.png",
                    title: "Landing Page VMB Main",
                    description: " Developing a website with a main page displaying job and internship listings using the Laravel framework, as well as creating an admin page to manage job and internship listing data input."
                },
                {
                    img: "cru.png",
                    title: "Airlangga Hospital",
                    description: "Designed the main web interface for the Central Research Unit (CRU) at Airlangga University Hospital using the Laravel and Bootstrap frameworks. Additionally, I developed a learning dashboard to monitor employee training and development progress.."
                },
                {
                    img: "pkl.png",
                    title: "Dashboard SMKN 1 Jetis Mojokerto ",
                    description: " Developed a curriculum submission web page forfaculty members at Universitas Airlangga usingthe Yii2 framework and Oracle SQL for the database."
                },

            ],
            mobile: [
                {
                    img: "skripsi.png",
                    title: "Custom Children Education Game",
                    description: " Developing a website with a main page displaying job and internship listings using the Laravel framework, as well as creating an admin page to manage job and internship listing data input."
                },
                {
                    img: "report.png",
                    title: "News App",
                    description: "Designed the main web interface for the Central Research Unit (CRU) at Airlangga University Hospital using the Laravel and Bootstrap frameworks. Additionally, I developed a learning dashboard to monitor employee training and development progress.."
                },


            ],
        };
    },
    methods: {
        toggleActive(button) {
            this.isActive = button;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        scrollToSection(id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        },
        openPopup() {

            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;

        },
    }
}
</script>

<style scoped>
@keyframes appear {
    from {
        opacity: 0;
        clip-path: inset(100% 100% 0 0);
    }

    to {
        opacity: 1;
        clip-path: inset(0 0 0 0);
    }
}

#animasi {
    animation: appear 2s ease-in-out forwards;
}

html {
    scroll-behavior: smooth;
}

.fixed {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
