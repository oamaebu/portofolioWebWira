<template>
    <div id="skills">
    <div id="animasi" class="min-h-screen pt-24">
                <p class="text-4xl md:text-6xl text-white underline font-bold text-center">Skills</p><br>
                <div class="md:m-10 justify-evenly md:flex grid grid-cols-3 gap-y-8">
                    <div class="w-32 h-32 relative" v-for="(language, index) in language" :key="index">
                        <div class="absolute inset-0 bg-[#D9D9D9] rounded-md opacity-15"></div>
                        <div class="flex items-center justify-center w-full h-full relative">
                            <!-- Gunakan :src untuk binding dinamis -->
                            <img :src="'/lement/skills/language/javascript.png'" alt="">
                        </div>
                        <p class="text-center">{{ language.img }}</p>
                    </div>
                </div>
                <br>
                <div class=" justify-evenly md:flex grid grid-cols-3 gap-y-8">
                    <div class="w-32 h-32 relative" v-for="(framework, index) in framework" :key="index">
                        <div class="absolute inset-0 bg-[#D9D9D9] rounded-md opacity-15"></div>
                        <div class="flex items-center justify-center w-full h-full relative">
                            <!-- Gunakan :src untuk binding dinamis -->
                            <img :src="`/element/skills/framework/${framework.img}.png`" alt="">
                        </div>
                        <p class="text-center">{{ framework.img }}</p>
                    </div>

                </div>
            </div>
        </div>
</template>

<script>
export default{
    data() {
        return {
        language: [
                {
                    img: "CSS",

                },
                {
                    img: "HTML",

                },
                {
                    img: "javascript",

                },
                {
                    img: "SQL",

                },
                {
                    img: "Dart",

                },
                {
                    img: "php",

                },

            ],
            framework: [
                {
                    img: "Flutter"
                },
                {
                    img: "Laravel"
                },
                {
                    img: "nodeJS"
                },
                {
                    img: "VueJS"
                },
                {
                    img: "YII2"
                },
            ],
        };
    }
}
</script>