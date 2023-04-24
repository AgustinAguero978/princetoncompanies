<template>
    <section
        :class="[
            'bg-gradient-to-tl from-slate-400 to-neutral-800 h-[70vh] w-full relative top-32 mb-32',
        ]"
    >
        <img
            :class="['absolute w-full h-full object-cover mix-blend-overlay']"
            :src="bannerBackground"
            alt=""
        />
        <div
            v-motion-slide-left
            class="absolute top-0 left-0 w-full h-full flex items-left py-36 px-8 cursor-default md:p-16 lg:p-12 xl:p-16 3xl:p-24 4xl:p-32"
        >
            <div class="text-white text-left">
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
                    {{ bannerTitle }}
                </h1>

                <h2
                    :class="[
                        'font-custom text-2xl my-2',
                        'md:text-3xl md:my-4',
                        'lg:text-2xl lg:my-4',
                        'xl:text-3xl xl:my-4',
                        '3xl:text-3xl 3xl:my-5',
                        '4xl:text-4xl 4xl:my-10',
                    ]"
                    style="text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5)"
                >
                    {{ bannerSubtitle }}
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"Banner",
    props: {
        bannerTitle: {
            type: String,
            default: "Banner Title",
        },

        bannerSubtitle: {
            type: String,
            default: "Banner Subtitle",
        },

        bannerBackground: {
            type: String,
            default: "src/assets/img/BrokenImageRoute.png",
        },
    },
};
</script>
