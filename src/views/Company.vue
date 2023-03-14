<template>
    <section
        :class="[
            'page',
            'relative h-screen w-screen',
            'md:relative md:h-screen md:w-screen',
        ]"
    >
        <Navbar />
        <div
            :class="[
                'absolute w-screen top-32',
                'md:absolute md:w-screen md:top-32',
            ]"
        >
            <h1
                :class="[
                    'text-center text-3xl p-8 text-slate-800 cursor-default',
                    'md:text-center md:text-5xl md:p-12',
                    'lg:text-5xl lg:p-4',
                    'xl:text-6xl md:p-8',
                    '3xl:text-7xl 3xl:p-10',
                    '4xl:text-8xl 4xl:p-20 ',
                ]"
            >
                The Princeton Design
            </h1>
        </div>
            <Accordion />
    </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Accordion from "@/components/Accordion.vue";
export default {
    components: { Navbar, Accordion },
};
</script>
