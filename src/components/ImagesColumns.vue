<template>
    <div>
        <div
            class="grid grid-cols-1 gap-6 mt-10 p-6 items-center lg:grid-cols-2 lg:px-10"
        >
            <div class="lg:row-span-2 m-auto lg:h-full" v-motion-fade>
                <img class="h-full lg:hover:scale-105 transition duration-700" src="src\assets\img\houseDesign\Inside-1.jpeg" alt="" />
            </div>

            <div class="lg:h-full " v-motion-fade>
                <img class="h-full lg:hover:scale-105 transition duration-700" src="src\assets\img\houseDesign\Inside-2.jpeg" alt="" />
            </div>

            <div
                class="flex flex-wrap flex-col md:items-start gap-4 items-center mt-4 lg:col-start-2" v-motion-slide-visible-once-right
            >
                <h3 class="text-4xl font-bold text-center">
                    We are not the outsource, we are the source.
                </h3>
                <p class="max-w-lg text-sm md:text-base mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores eligendi aut nulla. Hic, qui? Architecto incidunt
                    quod earum dicta accusamus, voluptatibus soluta eius,
                    aliquid laudantium temporibus est, quibusdam perspiciatis
                    nostrum.
                </p>
            </div>
        </div>
    </div>
</template>
