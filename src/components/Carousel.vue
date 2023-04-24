<template>
    <div
        :class="[
            'relative h-screen w-screen',
        ]"
    >
        <div class="absolute inset-0 bg-gray-900 bg-opacity-30 z-10"></div>
        <slot :currentSlide="currentSlide" />
        <!-- Pagination -->
        <div
            :class="[
                'absolute flex bottom-1/3 left-5 items-center z-20 top-1/2',
                'md:top-1/2 md:left-11',
            ]"
        >
            <div v-for="(slide, index) in getSlideCount" :key="index">
                <h1
                    :class="[
                        index + 1 === currentSlide ? 'visible' : 'hidden',
                        'text-2xl text-white text-left font-custom font-bold cursor-default select-none',
                        'md:text-5xl',
                        '4xl:text-7xl',
                    ]"
                    style="text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5)"
                >
                    {{ texto[index].title }}
                </h1>
                <h3
                    :class="[
                        index + 1 === currentSlide ? 'visible' : 'hidden',
                        'text-xl ml-1 font-custom text-slate-50  mt-1.5 cursor-default select-none',
                        'md:text-3xl md:my-4',
                        '4xl:text-5xl',
                    ]"
                    style="text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5)"
                >
                    {{ texto[index].description }}
                </h3>
                <button
                    :class="[
                        index + 1 === currentSlide ? 'visible' : 'hidden',
                        'hover:bg-white hover:text-dressblue hover:border-transparent hover:-translate-y-1',
                        'text-white text-xm mt-4 py-1 px-1.5 text-center font-custom border-[2.5px] rounded-lg  transition ease-in duration-200 transform active:translate-y-0',
                        'md:py-0.7 md:px-1 md:text-xl',
                        '4xl:text-3xl 4xl:py-1.5 4xl:px-2',
                    ]"
                >
                    <a
                        :href="
                            currentSlide === 1
                                ? '/visualization'
                                : currentSlide === 2
                                ? '/design'
                                : currentSlide === 3
                                ? '/builder'
                                : '/development'
                        "
                        >View More</a
                    >
                </button>
            </div>
        </div>
        <div
            v-if="paginationEnabled"
            :class="[
                'absolute font-custom font-semibold text-xm text-white flex justify-center text-center items-center gap-1 bottom-10 cursor-pointer select-none w-full z-20',
                'md:text-2xl md:bottom-5 md:gap-10',
                '4xl:text-4xl',
            ]"
        >
            <span
                id="company"
                @click="goToSlide(index)"
                v-for="(company, index) in companies"
                :key="index"
                class="p-1 4xl:p-2"
                :class="{
                    active: company === currentCompany,
                    'company-active': index + 1 === currentSlide,
                    
                }"
            >
                {{ company }}
            </span>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
export default {
    props: ["startAutoPlay", "timeout", "navigation", "pagination"],
    setup(props) {
        const currentSlide = ref(2);
        const getSlideCount = ref(null);
        const autoPlayEnabled = ref(
            props.startAutoPlay === undefined ? true : props.startAutoPlay
        );
        const timeoutDuration = ref(
            props.timeout === undefined ? 5000 : props.timeout
        );
        const paginationEnabled = ref(
            // corrected spelling
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

        const companies = ["VISUALIZATION", "DESIGN", "BUILD", "DEVELOPMENT"];

        const texto = [
            {
                title: "PRINCETON VISUALIZATION",
                description: "Designing the future",
            },
            {
                title: "PRINCETON DESIGN",
                description: "Rethinking the traditional approach",
            },
            {
                title: "PRINCETON BUILDERS",
                description: "Coordination and management",
            },
            {
                title: "PRINCETON DEVELOPMENT",
                description: "Assisting clients and investors",
            },
        ];
        return {
            currentSlide,
            nextSlide,
            prevSlide,
            getSlideCount,
            goToSlide,
            paginationEnabled, // corrected spelling
            navEnabled,
            companies,
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
    animation-duration: 2.5s;
    animation-name: revelation;
}

button {
    text-align: center;
    animation-duration: 1.5s;
    animation-name: revelation;
}

@keyframes slideInTitle {
    from {
        transform: translateX(-111%);
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

#company::after {
    content: "";
    height: 2px;
    width: 0%;
    background-color: white;
    display: block;
    transition: 0.5s ease-in-out;
}

#company:hover::after {
    content: "";
    height: 2px;
    width: 100%;
    background-color: white;
    display: block;
}

/* .company-active {
    background-color: rgba(126, 125, 125, 0.5);
    background-color: transparent;
    backdrop-filter: blur(250px);
    border-radius: 4px;
} */

.company-active {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
}

</style>
