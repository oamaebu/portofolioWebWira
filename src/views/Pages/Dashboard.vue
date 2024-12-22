<template>
    <div>
        <!-- Header Section -->
        <header class="bg-green-600 text-white text-center py-10">
            <h1 class="text-4xl font-bold mb-4">Kulit Mulus, Anti-Iritasi, dan Segar!</h1>
            <p class="text-lg">Dengan kekuatan Centella Asiatica, perawatan kulit alami yang bikin wajah glowing dan bebas iritasi.</p>
            <button @click="goToProduct" class="mt-6 bg-white text-green-600 px-6 py-3 font-semibold rounded hover:bg-gray-100">Coba Sekarang</button>
        </header>

        <!-- Product Section -->
        <section id="product" class="max-w-5xl mx-auto py-16 px-4">
            <h2 class="text-3xl font-bold text-center mb-8">Kenapa Pilih Centella?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded shadow-lg text-center" v-for="(benefit, index) in benefits" :key="index">
                    <h3 class="text-xl font-semibold mb-2">{{ benefit.title }}</h3>
                    <p>{{ benefit.description }}</p>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="bg-gray-200 py-16">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-6">Apa Kata Mereka?</h2>
                <blockquote class="text-lg italic mb-4">"Skincare centella beneran ngebantu kulit gue yang sensitif! Bekas jerawat juga makin pudar."</blockquote>
                <p class="text-gray-700">- Anya, pengguna setia</p>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="bg-green-600 text-white text-center py-16">
            <h2 class="text-3xl font-bold mb-4">Siap Mulai Perawatan?</h2>
            <p class="text-lg mb-8">Coba sekarang dan rasakan manfaat centella yang bikin kulit lebih mulus dan tenang!</p>
            <button @click="goToProduct" class="bg-white text-green-600 px-6 py-3 font-semibold rounded hover:bg-gray-100">Beli Sekarang</button>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white text-center py-8">
            <p>&copy; 2024 Centella Skincare. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            benefits: [
                { title: "Menghilangkan Jerawat", description: "Centella bantu kurangi peradangan jerawat dan bikin kulit lebih tenang, jadi cocok buat semua jenis kulit!" },
                { title: "Mengatasi Bekas Jerawat", description: "Kolagen alami dari centella bantu pudarkan bekas jerawat dan regenerasi kulit lebih cepet." },
                { title: "Menenangkan Kulit Sensitif", description: "Sifat anti-inflamasi centella ngurangin iritasi, bikin kulit lebih nyaman dan bebas kemerahan." }
            ]
        };
    },
    methods: {
        goToProduct() {
            // logika buat redirect ke produk page
            this.$inertia.visit('/product'); // contoh redirect ke halaman produk
        }
    }
};
</script>

<style scoped>
/* Tambahkan styling custom di sini */
</style>
