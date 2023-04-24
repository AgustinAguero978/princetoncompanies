<template>
    <section>
        <div>
            <h1
                class="font-custom font-bold text-center text-4xl md:text-6xl mt-6 text-dressblue"
            >
                {{ testimonialTitle }}
            </h1>
        </div>
        <div
            class="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10 p-6 lg:px-36"
            v-motion-slide-visible-once-left
        >
            <div
                class="relative bg-indigo-900 text-white p-8 rounded-lg lg:col-span-2"
            >
                <img
                    :src="testimonialBackgroundImage"
                    alt=""
                    class="absolute top-0 right-6 z-0 opacity-50"
                />
                <div class="relative z-10 flex justify-start space-x-4">
                    <img
                        :src="testimonialFirstImage"
                        alt=""
                        class="h-8 w-8 rounded-full border-2 border-purple-400"
                    />
                    <div>
                        <h2 class="font-bold text-sm">
                            {{ testimonialFirstName }}
                        </h2>
                        <h3 class="text-xs opacity-50">
                            {{ testimonialFirstRole }}
                        </h3>
                    </div>
                </div>
                <div>
                    <p
                        class="relative z-10 mt-4 font-bold text-xl leading-tight"
                    >
                        {{ testimonialFirstTitle }}
                    </p>
                    <p class="mt-4 text-sm opacity-70">
                        {{ testimonialFirstComment }}
                    </p>
                </div>
            </div>
            <div class="relative bg-gray-600 text-white p-8 rounded-lg">
                <div class="relative z-10 flex justify-start space-x-4">
                    <img
                        :src="testimonialSecondImage"
                        alt=""
                        class="h-8 w-8 rounded-full"
                    />
                    <div>
                        <h2 class="font-bold text-sm">
                            {{ testimonialSecondName }}
                        </h2>
                        <h3 class="text-xs opacity-50">
                            {{ testimonialSecondRole }}
                        </h3>
                    </div>
                </div>
                <div>
                    <p
                        class="relative z-10 mt-4 font-bold text-xl leading-tight"
                    >
                        {{ testimonialSecondTitle }}
                    </p>
                    <p class="mt-4 text-sm opacity-70">
                        {{ testimonialSecondComment }}
                    </p>
                </div>
            </div>
            <div
                class="relative bg-white text-gray-800 p-8 rounded-lg lg:row-start-2"
            >
                <div class="relative z-10 flex justify-start space-x-4">
                    <img
                        :src="testimonialThirdImage"
                        class="h-8 w-8 rounded-full"
                    />
                    <div>
                        <h2 class="font-bold text-sm">
                            {{ testimonialThirdName }}
                        </h2>
                        <h3 class="text-xs opacity-50">
                            {{ testimonialThirdRole }}
                        </h3>
                    </div>
                </div>
                <div>
                    <p
                        class="relative z-10 mt-4 font-bold text-xl leading-tight"
                    >
                        {{ testimonialThirdTitle }}
                    </p>
                    <p class="mt-4 text-sm opacity-70">
                        {{ testimonialThirdComment }}
                    </p>
                </div>
            </div>
            <div
                class="relative bg-gray-900 text-white p-8 rounded-lg lg:col-span-2"
            >
                <div class="relative z-10 flex justify-start space-x-4">
                    <img
                        :src="testimonialFourthImage"
                        alt=""
                        class="h-8 w-8 rounded-full"
                    />
                    <div>
                        <h2 class="font-bold text-sm">
                            {{ testimonialFourthName }}
                        </h2>
                        <h3 class="text-xs opacity-50">
                            {{ testimonialFourthRole }}
                        </h3>
                    </div>
                </div>
                <div>
                    <p
                        class="relative z-10 mt-4 font-bold text-xl leading-tight"
                    >
                        {{ testimonialFourthTitle }}
                    </p>
                    <p class="mt-4 text-sm opacity-70">
                        {{ testimonialFourthComment }}
                    </p>
                </div>
            </div>
            <div
                class="relative bg-white text-gray-800 p-8 rounded-lg lg:row-span-2 lg:row-start-1 lg:col-start-4"
            >
                <div class="relative z-10 flex justify-start space-x-4">
                    <img
                        :src="testimonialFifthImage"
                        alt=""
                        class="h-8 w-8 rounded-full"
                    />
                    <div>
                        <h2 class="font-bold text-sm">
                            {{ testimonialFifthName }}
                        </h2>
                        <h3 class="text-xs opacity-50">
                            {{ testimonialFifthRole }}
                        </h3>
                    </div>
                </div>
                <div>
                    <p
                        class="relative z-10 mt-4 font-bold text-xl leading-tight"
                    >
                        {{ testimonialFifthTitle }}
                    </p>
                    <p class="mt-4 text-sm opacity-70">
                        {{ testimonialFifthComment }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        testimonialTitle: {
            type: String,
            default: "Title",
        },

        /* First Testimony */
        testimonialBackgroundImage: {
            type: String,
            default: "src/assets/img/BrokenImageRoute.png",
        },
        testimonialFirstImage: {
            type: String,
            default: "src/assets/img/BrokenImageRoute.png",
        },
        testimonialFirstName: {
            type: String,
            default: "Testimonial FirstName",
        },
        testimonialFirstRole: {
            type: String,
            default: "Testimonial FirstRole",
        },
        testimonialFirstTitle: {
            type: String,
            default: "Testimonial FirstTitle",
        },
        testimonialFirstComment: {
            type: String,
            default: "Testimonial FirstComment",
        },

        /* Second Testimony */
        testimonialSecondImage: {
            type: String,
            default: "src/assets/img/BrokenImageRoute.png",
        },
        testimonialSecondName: {
            type: String,
            default: "Testimonial SecondName",
        },
        testimonialSecondRole: {
            type: String,
            default: "Testimonial SecondRole",
        },
        testimonialSecondTitle: {
            type: String,
            default: "Testimonial SecondTitle",
        },
        testimonialSecondComment: {
            type: String,
            default: "Testimonial SecondComment",
        },

        /* Third Testimony */
        testimonialThirdImage: {
            type: String,
            default: "src/assets/img/BrokenImageRoute.png",
        },
        testimonialThirdName: {
            type: String,
            default: "Testimonial ThirdName",
        },
        testimonialThirdRole: {
            type: String,
            default: "Testimonial ThirdRole",
        },
        testimonialThirdTitle: {
            type: String,
            default: "Testimonial ThirdTitle",
        },
        testimonialThirdComment: {
            type: String,
            default: "Testimonial ThirdComment",
        },

        /* Fourth Testimony */
        testimonialFourthImage: {
            type: String,
            default: "src/assets/img/BrokenImageRoute.png",
        },
        testimonialFourthName: {
            type: String,
            default: "Testimonial FourthName",
        },
        testimonialFourthRole: {
            type: String,
            default: "Testimonial FourthRole",
        },
        testimonialFourthTitle: {
            type: String,
            default: "Testimonial FourthTitle",
        },
        testimonialFourthComment: {
            type: String,
            default: "TestimonialFourth Comment",
        },

        /* Fifth Testimony */
        testimonialFifthImage: {
            type: String,
            default: "src/assets/img/BrokenImageRoute.png",
        },
        testimonialFifthName: {
            type: String,
            default: "Testimonial FifthName",
        },
        testimonialFifthRole: {
            type: String,
            default: "Testimonial FifthRole",
        },
        testimonialFifthTitle: {
            type: String,
            default: "Testimonial FifthTitle",
        },
        testimonialFifthComment: {
            type: String,
            default: "Testimonial FifthComment",
        },
    },
};
</script>
