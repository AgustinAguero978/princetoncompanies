<template>
    <section class="mt-0 lg:mt-10">
        <div class="text-center">
            <h1
                class="md:pl-10 text-3xl md:text-6xl text-dressblue font-custom font-bold mt-10 mb-20"
            >
                Our other design projects you don't want to miss!
            </h1>
        </div>
        <div
            class="flex items-center justify-center mx-auto"
            v-motion:slide-visible-once-right
        >
            <!--GRID-->
            <div
                class="grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 4xl:w-[1920px] 3xl:w-[1600px]"
            >
                <!--CARD-->
                <div
                    class="bg-white rounded-xl shadow-lg"
                    v-for="(project, index) in projects"
                    :key="index"
                >
                    <div class="p-5 flex flex-col h-full">
                        <div class="rounded-xl overflow-hidden">
                            <img :src="project.imageUrl" />
                        </div>
                        <h5
                            class="text-spacegrey text-4xl md:text-4xl font-custom font-bold mt-5 text-center"
                        >
                            {{ project.title }}
                        </h5>
                        <p class="text-spacegrey text-xl mt-4 font-custom text-justify px-12">
                            {{ project.description }}
                        </p>
                        <div
                            class=" justify-center w-full mt-auto flex items-center"
                        >
                            <router-link
                                :to="project.route"
                                class="inline-block 2xl:w-1/4 3xl:mt-6 text-center text-2xl bg-dressblue text-white py-2 rounded-lg font-custom font-semibold mt-4 hover:bg-azuretide focus:scale-95 transition-all duration-200 ease-out w-full"
                            >
                                Read More
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "ProjectCards",
    props: {
        projects: {
            type: Array,
            required: true,
        },
    },
};
</script>
