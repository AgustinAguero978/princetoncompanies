<template>
    <section
        :class="[
            'bg-gradient-to-tl from-slate-400 to-neutral-800 h-[70vh] w-full relative top-32 mb-32',
        ]"
    >
        <img
            :class="['absolute w-full h-full object-cover mix-blend-overlay']"
            src="\src\assets\img\AboutUs\BannerImage.jpeg"
            alt=""
        />
        <div
            v-motion-slide-left
            class="absolute top-0 left-0 w-full h-full flex items-center justify-center py-36 px-8 cursor-default md:p-16 lg:p-12 xl:p-16 3xl:p-24 4xl:p-32"
        >
            <div class="text-white text-center">
                <h1
                    :class="[
                        'font-custom font-semibold text-4xl',
                        'md:text-5xl',
                        'lg:text-4xl',
                        'xl:text-5xl',
                        '3xl:text-6xl',
                        '4xl:text-7xl',
                    ]"
                    style="text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5)"
                >
                    ABOUT US
                </h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"Banner",
    props: {
        bannerBackground: {
            type: String,
            default: "src/assets/img/BrokenImageRoute.png",
        },
    },
};
</script>
