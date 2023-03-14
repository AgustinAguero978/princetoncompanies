<template>
    <section class="overflow-x-hidden">
        <section class="w-screen h-screen">
            <Navbar />
            <Banner />
        </section>
        <ImagesColumns />
        <div class="w-full h-40"></div>
        <ImageWithText />
        <div class="w-full h-40"></div>
        <section>
                <TextSection />
        </section>
        <div class="w-full h-40"></div>
        <Testimonials />
        <section>
            <div class="w-full h-40"></div>
        </section>
        <ProjectCards />
        <section>
            <div class="w-full h-40"></div>
        </section>
        <Footer />
    </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import ImagesColumns from "@/components/ImagesColumns.vue";
import ImageWithText from "@/components/ImageWithText.vue";
import Testimonials from "@/components/Testimonials.vue";
import ProjectCards from "@/components/ProjectCards.vue";
import TextSection from "@/components/TextSection.vue";

import Footer from "@/components/Footer.vue";
export default {
    components: {
        Navbar,
        Banner,
        ImageWithText,
        Testimonials,
        Footer,
        ProjectCards,
        ImagesColumns,
        TextSection,
    },
};
</script>

<style></style>
