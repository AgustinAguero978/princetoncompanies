<template>
    <section class="relative mb-8 overflow-hidden">
        <div class="flex flex-wrap-reverse gap-8 justify-center">
            <div
                class="flex gap-6 flex-wrap flex-col item-start lg:justify-center"
            >
                <div
                    class="flex flex-wrap flex-col md:items-start gap-4 items-center" v-motion-fade
                >
                    <h2 class="text-spacegrey text-4xl lg:text-5xl font-bold font-custom">{{ imageWithTextTitle }}</h2>
                    <p class="text-spacegrey max-w-sm text-sm md:text-xl md:max-w-lg font-custom">
                        {{ imageWithTextParagraph }}
                    </p>
                </div>
            </div>
            <img
                v-motion-slide-visible-once-right
                class="xs:w-72"
                :src="imageWithTextImage"  
                alt="House"
            />
        </div>
        <div
            class="absolute -bottom-6 -right-32 aspect-square -z-10 md:border-8 border-dressblue rounded-full md:w-64 lg:w-96 xl:max-w-lg"
        ></div>
        <div
            class="bg-skylinesteel h-24 xl:h-32 mt-12 xl:mt-0 xl:absolute w-screen -bottom-8 -z-10"
        ></div>
    </section>
</template>

<script>
export default{
    props:{
        imageWithTextTitle: {
            type: String,
            default:"ImageWithText Title"
        },

        imageWithTextParagraph: {
            type: String,
            default:"ImageWithText Paragraph"
        },

        imageWithTextImage:{
            type: String,
            default:"src/assets/img/BrokenImageRoute.png"
        },
    }
};
</script>

