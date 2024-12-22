<template>
    <div id="skills">
      <div id="animasi" class="min-h-screen pt-24">
        <p class="text-4xl md:text-6xl text-white underline font-bold text-center">Skills</p><br />
        
        <!-- For both language and framework, use the same structure -->
        <div class="md:m-10 justify-evenly md:flex grid grid-cols-3 gap-y-8">
          <div
            v-for="(skill, index) in combinedSkills"
            :key="index"
            class="w-32 h-32 relative"
          >
            <div class="absolute inset-0 bg-[#D9D9D9] rounded-md opacity-15"></div>
            <div class="flex items-center justify-center w-full h-full relative">
              <img :src="`/element/skills/${skill.type}/${skill.img}.png`" alt="" />
            </div>
            <p class="text-center">{{ skill.img }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        language: [
          { img: "CSS" },
          { img: "HTML" },
          { img: "javascript" },
          { img: "SQL" },
          { img: "Dart" },
          { img: "php" },
        ],
        framework: [
          { img: "Flutter" },
          { img: "Laravel" },
          { img: "nodeJS" },
          { img: "VueJS" },
          { img: "YII2" },
        ],
      };
    },
    computed: {
      // Gabungkan data language dan framework dalam satu array
      combinedSkills() {
        const languageSkills = this.language.map(skill => ({ ...skill, type: "language" }));
        const frameworkSkills = this.framework.map(skill => ({ ...skill, type: "framework" }));
        return [...languageSkills, ...frameworkSkills];
      },
    },
  };
  </script>
  