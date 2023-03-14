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
                'md:absolute md:flex md:top-1/2 md:left-11 md:items-center',
                'absolute flex bottom-1/3 left-5',
            ]"
        >
            <div v-for="(slide, index) in getSlideCount" :key="index">
                <h1
                    :class="[
                        index + 1 === currentSlide ? 'visible' : 'hidden',
                        'text-2xl text-white font-bold cursor-default',
                        'md:text-5xl md:drop-shadow-lg md:text-left',
                    ]"
                >
                    {{ texto[index].title }}
                </h1>
                <h3
                    :class="[
                        index + 1 === currentSlide ? 'visible' : 'hidden',
                        'text-xl ml-1 font-semibold text-amber-100  mt-1.5 cursor-default',
                        'md:text-2xl md:mt-4',
                    ]"
                >
                    {{ texto[index].description }}
                </h3>
                <button
                :class="[
                        index + 1 === currentSlide ? 'visible' : 'hidden',
                        'text-xm  mt-7 py-1 px-2 bg-transparent text-white font-semibold border border-white rounded hover:bg-gray-800 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0',
                        'md:text-center md:py-1.5 md:px-3 md:bg-transparent md:text-white md:font-semibold md:border md:border-white md:rounded md:hover:bg-gray-800 md:hover:text-white md:hover:border-transparent md:transition md:ease-in md:duration-500 md:transform md:hover:-translate-y-1 md:active:translate-y-0',
                    ]"
                >
                <a href="/design">Read More</a> 
                </button>
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
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
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
                title: "Princeton Design",
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

button {
    text-align: center;
    animation-duration: 5s;
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
