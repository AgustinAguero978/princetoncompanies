<template>
    <section class="relative mb-8 overflow-hidden">
        <div class="flex flex-wrap-reverse gap-8 justify-center">
            <div
                class="flex gap-6 flex-wrap flex-col item-start lg:justify-center"
            >
                <div
                    class="flex flex-wrap flex-col md:items-start gap-4 items-center" v-motion-fade
                >
                    <h2 class="text-4xl font-bold">Relax, you're home !</h2>
                    <p class="max-w-sm text-sm md:text-base">
                        All our supported hardware includes traditional inputs
                        so you can integrate our products into your house in a
                        way that's best for everyone
                    </p>
                </div>
            </div>
            <img
                v-motion-slide-visible-once-right
                class="xs:w-72"
                src="src/assets/img/houseDesign/House-Design-1.png"
                alt="House"
            />
        </div>
        <div
            class="absolute -bottom-6 -right-32 aspect-square -z-10 md:border-8 border-amber-400 rounded-full md:w-64 lg:w-96 xl:max-w-lg"
        ></div>
        <div
            class="bg-teal-900 h-24 xl:h-32 mt-12 xl:mt-0 xl:absolute w-screen -bottom-8 -z-10"
        ></div>
    </section>
</template>
