<template>
  <div class="min-h-full">
    <p class="text-4xl md:text-6xl text-white underline font-bold text-center  pt-20" id="experiences">
      Experiences</p><br><br>
  <div class="px-4 md:pl-28 md:pr-40 ">
    <div class=" mx-auto p-4 ">
      <!-- <h2 class="text-3xl font-bold mb-8 pb-2 border-b-2">Experiences</h2> -->
      <div class="relative">
        <div v-for="(exp, index) in experiences" :key="index" class="relative pr-8 pb-12">
          <!-- Right-aligned vertical line -->
          <div class="absolute right-0 top-0 h-full w-0.5 bg-gray-200"></div>
  
          <!-- Timeline dot -->
          <div class="absolute right-[-6px] top-2 h-3 w-3 rounded-full bg-teal-500 border-2 border-white"></div>
  
          <!-- Content container -->
          <div class="pr-8">
            <!-- Date indicator -->
            <div class="flex justify-left mb-2">
              <div class="text-sm text-gray-500">{{ exp.date }}</div>
            </div>
  
            <!-- Title -->
            <div class="text-left">
              <h3 class="text-lg font-medium text-teal-500">{{ exp.title }}</h3>
            </div>
  
            <!-- Description -->
            <div class="mt-2 text-left text-gray-300">
              <p>{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        experiences: [
          {
            date: "March 2024 - June 2024",
            title: "PKL SMKN 1 Jetis Mojokerto",
            description: "Developed a website using the Laravel framework with a main page showcasing job and internship listings for students. Designed and implemented an admin page to efficiently manage job and internship data, ensuring students have easy access to explore opportunities."
          },
          {
            date: "January 2024 - April 2024",
            title: "Airlangga Hospital",
            description: "Designed the main web interface for the Central Research Unit (CRU) at Airlangga University Hospital using the Laravel and Bootstrap frameworks. And additionally design a learning dashboard to monitor employee training and development progress.."
          },
          {
            date: "January 2024 - September 2024",
            title: "DSID Airlangga University ",
            description: " Developed a curriculum submission web page forfaculty members at Universitas Airlangga usingthe Yii2 framework and Oracle SQL for the database. And ensuring a responsive and integrated platform to support efficient curriculum submission."

          },
          
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles if necessary */
  </style>
  