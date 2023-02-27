<template>
    <div
        :class="[
            'relative h-screen w-screen',
            'md:relative md:h-screen md:w-screen',
        ]"
    >
        <slot :currentSlide="currentSlide" />
        <!-- Pagination -->
        <div
            :class="[
                'texto',
                'md:absolute md:flex md:top-1/2 md:left-11',
                'absolute flex bottom-1/3 left-5',
            ]"
        >
            <div v-for="(slide, index) in getSlideCount" :key="index">
                <h1
                    :class="[
                        index + 1 === currentSlide ? 'visible' : 'hidden',
                        'text-2xl text-white font-bold cursor-pointer',
                        'md:hover:text-[3.08rem] md:duration-1000 md:transition-all md:text-5xl md:drop-shadow-lg',
                    ]"
                >
                    {{ texto[index].title }}
                </h1>
                <h3
                    :class="[
                        'subtitle',
                        index + 1 === currentSlide ? 'visible' : 'hidden',
                        'text-xl ml-1 font-semibold text-amber-100  mt-1.5',
                        'md:text-2xl md:mt-4',
                    ]"
                >
                    {{ texto[index].description }}
                </h3>
            </div>
        </div>
        <div
            :class="[
                'absolute flex w-full justify-center items-center bottom-10 gap-8 cursor-pointer',
                'md:absolute md:flex md:w-full md:justify-center md:items-center md:bottom-14 md:gap-32 md:cursor-pointer',
            ]"
            v-if="pagintationEnabled"
        >
            <img
                :src="logos[index]"
                @click="goToSlide(index)"
                v-for="(slide, index) in getSlideCount"
                :key="index"
                :class="[
                    'h-16 w-14',
                    'md:hover:scale-125 md:transition-all md:duration-500 md:h-20 md:w-16',
                    { active: index + 1 === currentSlide }
                ]"
            />

            <!-- <span
                @click="goToSlide(index)"
                v-for="(slide, index) in getSlideCount"
                :key="index"
                :class="{ active: index + 1 === currentSlide }"
            >
            </span> -->
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
    props: ["startAutoPlay", "timeout", "navigation", "pagination"],
    setup(props) {
        const currentSlide = ref(1);
        const getSlideCount = ref(null);
        const autoPlayEnabled = ref(
            props.startAutoPlay === undefined ? true : props.startAutoPlay
        );
        const timeoutDuration = ref(
            props.timeout === undefined ? 5000 : props.timeout
        );
        const pagintationEnabled = ref(
            props.pagination === undefined ? true : props.pagination
        );
        const navEnabled = ref(
            props.navigation === undefined ? true : props.navigation
        );
        // next slide
        const nextSlide = () => {
            if (currentSlide.value === getSlideCount.value) {
                currentSlide.value = 1;
                return;
            }
            currentSlide.value += 1;
        };
        // prev slide
        const prevSlide = () => {
            if (currentSlide.value === 1) {
                currentSlide.value = 1;
                return;
            }
            currentSlide.value -= 1;
        };
        const goToSlide = (index) => {
            currentSlide.value = index + 1;
        };
        // autoplay
        const autoPlay = () => {
            setInterval(() => {
                nextSlide();
            }, timeoutDuration.value);
        };
        if (autoPlayEnabled.value) {
            autoPlay();
        }
        onMounted(() => {
            getSlideCount.value = document.querySelectorAll(".slide").length;
        });

        const logos = [
            "src/assets/img/Companies/design.png",
            "src/assets/img/Companies/build.png",
            "src/assets/img/Companies/development.png",
            "src/assets/img/Companies/visualization.png",
        ];

        const texto = [
            {
                title: "Princeton Designers",
                description: "Rethinking the traditional approach",
            },
            {
                title: "Princeton Builders",
                description: "Coordination and management",
            },
            {
                title: "Princeton Development",
                description: "Assisting clients and investors",
            },
            {
                title: "Princeton Visualization",
                description: "Designing the future",
            },
        ];
        return {
            currentSlide,
            nextSlide,
            prevSlide,
            getSlideCount,
            goToSlide,
            pagintationEnabled,
            navEnabled,
            logos,
            texto,
        };
    },
};
</script>

<style>
h1 {
    animation-duration: 1.5s;
    animation-name: slideInTitle;
}

h3 {
    animation-duration: 4s;
    animation-name: revelation;
}

@keyframes slideInTitle {
    from {
        transform: translateX(-250px);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes revelation {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.active{
    transform: scale(1.2);
    transition-duration: 2s;
}
</style>
