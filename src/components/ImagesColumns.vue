<template>
    <div>
        <div
            class="grid grid-cols-1 gap-6 mt-10 p-6 items-center lg:grid-cols-2 lg:px-10 font-custom"
        >
            <div class="lg:row-span-2 m-auto lg:h-full" v-motion-fade>
                <img 
                :class="['h-full lg:hover:scale-105 transition duration-700']"
                :src="imagesColumnsImageVertical" 
                alt="" />
            </div>
            <div class="lg:h-full " v-motion-fade>
                <img 
                :class="['h-full lg:hover:scale-105 transition duration-700']" 
                :src="imagesColumnsImageHorizontal"  
                alt="" />
            </div>
            <div
                class="flex flex-wrap flex-col md:items-start gap-4 items-center mt-4 lg:col-start-2" v-motion-slide-visible-once-right
            >
                <h3 class="font-bold text-center text-spacegrey md:text-2xl 4xl:text-5xl 3xl:text-4xl ">
                    {{ imagesColumnsTitle }}
                </h3>
                <p class="text-spacegrey text-sm md:text-lg 4xl:text-xl 4xl:max-w-2xl 3xl:text-lg 3xl:max-w-xl mt-3">
                    {{ imagesColumnsParagraph }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        imagesColumnsImageVertical:{
            type: String,
            default:"src/assets/img/BrokenImageRoute.png"
        },

        imagesColumnsImageHorizontal:{
            type: String,
            default:"src/assets/img/BrokenImageRoute.png"
        },

        imagesColumnsTitle: {
            type: String,
            default:  "ImagesColumns Title"
        },

        imagesColumnsParagraph: {
            type: String,
            default: "imagesColumns Paragraph"
        },
    }
};
</script>