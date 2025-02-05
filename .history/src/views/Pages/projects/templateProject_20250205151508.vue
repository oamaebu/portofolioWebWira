<template>
    <div class="sm:mx-20 min-h-screen pb-36" id="projects">
        <p class="text-4xl md:text-6xl text-white underline font-bold text-center pt-20">My <span
                class=" text-teal-500 underline font-bold"> Projects </span></p><br><br>
        <div class="flex items-center justify-center">
            <div class="flex w-full bg-gray-700 rounded-md">
                <button
                    :class="['flex-1 py-2 rounded-md transition-colors duration-200', isActive === 'website' ? 'bg-gray-500 text-white' : 'text-gray-400']"
                    @click="toggleActive('website')">
                    Website
                </button>

                <button
                    :class="['flex-1 py-2 rounded-md transition-colors duration-200', isActive === 'mobile' ? 'bg-gray-500 text-white' : 'text-gray-400']"
                    @click="toggleActive('mobile')">
                    Mobile
                </button>
            </div>
        </div>
        <div class="content-center mx-4 sm:mx-10 md:mx-20 lg:mx-36 my-10">
            <!-- Konten untuk Website -->
            <button v-if="isActive === 'website'" v-for="(project, index) in projects" :key="index"
                class="flex flex-col md:flex-row items-center md:items-start mt-4 hover:bg-gray-700"
                @click="openPopup(project.name, 'web', project.title)">
                <div class="w-2/5 bg-red-700 h-60 mr-10">
                    <img :src="`/element/project/web/${[project.name]}/${project.img}`" alt=""
                        class="w-full h-full object-cover object-top">
                </div>

                <div class="md:w-3/5 pt-5">
                    <p class="text-3xl sm:text-4xl md:text-xl text-left">{{ project.title }}</p>
                    <p class="text-justify text-gray-300 text-base sm:text-lg md:text-sm mt-4">
                        {{ project.description }}
                    </p>
                    
                    <p class="text-justify text-gray-300 text-base sm:text-lg md:text-sm mt-4">
                        {{ project.status }}
                    </p>
                </div>

            </button>

            <Popup :showPopup="showPopup" @close-popup="closePopup" :selectedName="selectedName" :title="title"
                :selectedPortofolioType="selectedPortofolioType" />



            <!-- Konten untuk Mobile -->
            <button v-if="isActive === 'mobile'" v-for="(mobile, index) in mobile" :key="index"
                class="flex flex-col md:flex-row items-center md:items-start mt-4 hover:bg-zinc-600"
                @click="openPopup(mobile.name, 'mobile', mobile.title)">
                <div class="w-2/5 h-60 mr-10 flex items-center justify-center">
                    <img :src="`/element/project/mobile/${[mobile.name]}/${mobile.img}`" alt=""
                        class="h-full object-cover object-top">
                </div>


                <div class="md:w-3/5 sm:pt-5">
                    <p class="text-3xl sm:text-4xl md:text-xl text-left">{{ mobile.title }}</p>
                    <p class="text-justify text-gray-300 text-base sm:text-lg md:text-sm mt-4">
                        {{ mobile.description }}
                    </p>
                </div>

            </button>
        </div>

    </div>
</template>

<script>
import Popup from './popup.vue';

export default {
    components: { Popup },
    data() {
        return {
            selectedName: '',
            selectedPortofolioType: '',
            title: '',
            isActive: 'website',
            showPopup: false,
            projects: [
                {
                    name: "vmb",
                    img: "vmb.png",
                    title: "Landing Page VMB Main",
                    description: "Developed a landing page website for a trucking company, VMB, showcasing company information and achievements. Additionally, created an admin dashboard to manage orders and deliveries, enabling seamless tracking and efficient operations, combining user-friendly design with robust functionality."
                },

                {
                    name: "cru",
                    img: "cru.png",
                    title: "Airlangga Hospital",
                    description: "Designed the main web interface for the Central Research Unit (CRU) at Airlangga University Hospital using the Laravel and Bootstrap frameworks. Additionally, I developed a learning dashboard to monitor employee training and development progress.."
                },
                {
                    name: "smk",
                    img: "pkl.png",
                    title: "Dashboard SMKN 1 Jetis Mojokerto",
                    description: "Developed a BKK website for SMKN 1 Jetis Mojokerto, including user and admin subdomains. The user subdomain showcases internship and job vacancy information, while the admin subdomain enables secure CRUD operations and admin account management."
                },
                {
                    name: "inav",
                    img: "landing.png",
                    title: "Inav Counselling Service Landing Page",
                    description: "Developed a BKK website for SMKN 1 Jetis Mojokerto, including user and admin subdomains. The user subdomain showcases internship and job vacancy information, while the admin subdomain enables secure CRUD operations and admin account management.",
                      status:"In Progress"
                }
                
                ,

            ],
            mobile: [
                {
                    name: "game",
                    img: "skripsi.png",
                    title: "Custom Children Education Game",
                    description: "Developed an interactive educational game for children with Down syndrome to enhance cognitive abilities through fun and educational play. The game includes three schemes focusing on object recognition, visual discrimination, and puzzle-solving. Features also include teacher tools for progress tracking, level customization, and tailored game management."
                }
                ,
                {
                    name: "news",
                    img: "report.png",
                    title: "News App",
                    description: "Developed a Flutter and Firebase-based news application offering users an intuitive platform to access the latest news. Features include viewing news articles, searching for topics, reading detailed stories, and a login system for personalized experiences. ",
                  
                }



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
        openPopup(name, portofolioType, title) {
            this.selectedName = name;
            this.selectedPortofolioType = portofolioType;
            this.showPopup = true;
            this.title = title;
        }
        ,
        closePopup() {
            this.showPopup = false;
        },
    }
}
</script>