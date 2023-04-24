<template>
    <section
        :class="[
            'page',
            'relative h-screen w-screen',
        ]"
    >
        <Navbar />
        <div
            :class="[
                'absolute w-screen top-32',
            ]"
        >
            <h1
                :class="[
                    'text-center text-4xl pt-9 text-dressblue cursor-default font-custom font-semibold',
                    'md:pt-12',
                    '3xl:text-4xl 3xl:p-3 3xl:mt-14',
                    '4xl:text-5xl 4xl:mt-20 4xl:p-10',
                ]"
            >
                PRINCETON DEVELOPMENT
            </h1>
        </div>
        <Accordion
            :accordion-title-first-panel="accordion[0].title"
            :accordion-description-first-panel="accordion[0].description"
            :accordion-route-first-panel="accordion[0].route"
            :accordion-title-second-panel="accordion[1].title"
            :accordion-description-second-panel="accordion[1].description"
            :accordion-route-second-panel="accordion[1].route"
            :accordion-title-third-panel="accordion[2].title"
            :accordion-description-third-panel="accordion[2].description"
            :accordion-route-third-panel="accordion[2].route"
            :accordion-title-fourth-panel="accordion[3].title"
            :accordion-description-fourth-panel="accordion[3].description"
            :accordion-route-fourth-panel="accordion[3].route"
            :firstImage="firstImage"
            :secondImage="secondImage"
            :thirdImage="thirdImage"
            :fourthImage="fourthImage"
        />
    </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Accordion from "@/components/Accordion.vue";
export default {
    components: { Navbar, Accordion },

    data() {
        return {
            accordion: [
                {
                    title: "Explore",
                    description:
                    "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
                    route: "/development/firstProject",
                },

                {
                    title: "Wild Forest",
                    description:
                    "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
                    route: "/development/secondProject",
                },

                {
                    title: "Night",
                    description:
                    "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
                    route: "/development/thirdProject",
                },

                {
                    title: "Summer",
                    description:
                    "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
                    route: "/development/fourthProject",
                },
            ],
            firstImage:
                "/src/assets/img/Companies/Design/projectImages/Project-1.jpg",
            secondImage:
                "/src/assets/img/Companies/Design/projectImages/Project-2.jpg",
            thirdImage:
                "/src/assets/img/Companies/Design/projectImages/Project-3.jpg",
            fourthImage:
                "/src/assets/img/Companies/Design/projectImages/Project-4.jpg",
        };
    },
};
</script>
