<template>
    <div class="w-32 h-32 relative">
      <div class="absolute inset-0 bg-[#D9D9D9] rounded-md opacity-15"></div>
      <div class="flex items-center justify-center w-full h-full relative">
        <img :src="`/element/skills/${type}/${img}.png`" alt="" />
      </div>
      <p class="text-center">{{ img }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  