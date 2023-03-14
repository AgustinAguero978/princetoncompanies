<template>
    <section
        :class="[
            'page',
            'relative h-screen w-screen',
            'md:relative md:h-screen md:w-screen',
        ]"
    >
        <Navbar />
        <Carousel
            :navigation="true"
            :pagination="true"
            :startAutoPlay="false"
            :timeout="5000"
            v-slot="{ currentSlide }"
        >
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
                <div
                    :class="[
                        'absolute top-0 left-0 w-full max-h-full h-full',
                        'md:absolute md:top-0 md:left-0 wd:w-full md:h-full md:max-h-full',
                    ]"
                    v-show="currentSlide === index + 1"
                >
                    <img
                        :class="[
                            'min-w-full h-full object-cover',
                            'md:min-w-full md:h-full md:object-cover',
                        ]"
                        :src="`src/assets/img/sliderCarouselImage/${slide}.jpg`"
                        alt=""
                    />
                </div>
            </Slide>
        </Carousel>
    </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";


export default {
    name: "home",
    components: { Navbar, Carousel, Slide },
    setup() {
        const carouselSlides = ["slide-1", "slide-2", "slide-3", "slide-4"];
        return { carouselSlides };
    },
};
</script>