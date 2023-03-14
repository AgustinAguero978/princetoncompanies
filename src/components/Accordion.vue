<template>
    <div
        :class="[
            'absolute flex items-end w-full h-4/6 top-60 p-0.5',
            'md:h-4/6 md:top-72 md:p-4',
            'lg:top-52 lg:h-96 lg:p-1 lg:mt-2',
            'xl:top-64 xl:h-4/6 xl:p-1',
            '3xl:top-72 3xl:h-4/6 3xl:p-1 3xl:mt-3',
            '4xl:top-96 4xl:h-4/6 4xl:p-1',
        ]"
    >
        <div
            class="bg-[url('src/assets/img/accordionImage/Image-1.jpg')] bg-cover bg-center bg-no-repeat"
            :class="[
                'panel',
                { active: active == 1 },
                'text-white ',
                'relative basis-1/6 h-full cursor-pointer rounded-2xl m-0.5 overflow-hidden transition-all easy-in duration-700',
                'md:relative md:basis-1/6 md:h-full md:cursor-pointer md:rounded-2xl md:m-0.5 md:overflow-hidden md:transition-all md:easy-in md:duration-700 ',
            ]"
            @click="active = 1"
        >
            <div
                :class="[
                    'absolute top-20 w-full text-center',
                    'lg:text-left lg:left-10 lg:top-12',
                    'xl:text-left xl:left-16 xl:top-20',
                    '3xl:text-left 3xl:left-10 3xl:top-24',
                    '4xl:text-left 4xl:left-14 4xl:top-48',
                ]"
            >
                <h2
                    :class="[
                        'text-4xl opacity-0',
                        'md:top-32 md:text-6xl md:left-10',
                        'lg:text-5xl',
                        'xl:text-6xl',
                        '3xl:text-7xl ',
                        '4xl:text-8xl',
                    ]"
                >
                    Explore
                </h2>
            </div>
            <h3
                :class="[
                    'absolute my-20 text-left opacity-0 top-20 text-base left-3',
                    'md:top-44 md:text-1xl md:left-10 md:w-10/12 ',
                    'lg:top-20 lg:text-lg lg:left-10 lg:w-10/12',
                    'xl:top-28 xl:text-xl xl:left-16 xl:w-10/12',
                    '3xl:top-44 3xl:text-1xl 3xl:left-10',
                    '4xl:top-72 4xl:text-3xl 4xl:left-14',
                ]"
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /><br />
                Deserunt aperiam nihil, recusandae atque culpa commodi placeat
                unde repellat
            </h3>
            <div :class="['absolute w-full text-center bottom-10']">
                <button
                    :class="[
                        'text-xm  py-1 px-2 bg-transparent text-white font-semibold border border-white rounded hover:bg-gray-800 hover:text-white hover:border-transparent transition ease-in duration-800 transform hover:-translate-y-1 active:translate-y-0 opacity-0',
                        '',
                    ]"
                >
                    Read More
                </button>
            </div>
        </div>
        <div
            class="bg-[url('src/assets/img/accordionImage/Image-2.jpg')] bg-cover bg-center bg-no-repeat"
            :class="[
                'panel',
                'text-white',
                { active: active == 2 },
                'relative basis-1/6 h-full cursor-pointer rounded-2xl m-0.5 overflow-hidden transition-all easy-in duration-700',
                'md:relative md:basis-1/6 md:h-full md:cursor-pointer md:rounded-2xl md:m-0.5 md:overflow-hidden md:transition-all md:easy-in md:duration-700 ',
            ]"
            @click="active = 2"
        >
            <div
                :class="[
                    'absolute top-20 w-full text-center',
                    'lg:text-left lg:left-10 lg:top-12',
                    'xl:text-left xl:left-16 xl:top-20',
                    '3xl:text-left 3xl:left-10 3xl:top-24',
                    '4xl:text-left 4xl:left-14 4xl:top-48',
                ]"
            >
                <h2
                    :class="[
                        'text-4xl opacity-0',
                        'md:top-32 md:text-6xl md:left-10',
                        'lg:text-5xl',
                        'xl:text-6xl',
                        '3xl:text-7xl ',
                        '4xl:text-8xl',
                    ]"
                >
                    Wild Forest
                </h2>
            </div>
            <h3
                :class="[
                    'absolute my-20 text-left opacity-0 top-20 text-base left-3',
                    'md:top-44 md:text-1xl md:left-10 md:w-10/12 ',
                    'lg:top-20 lg:text-lg lg:left-10 lg:w-10/12',
                    'xl:top-28 xl:text-xl xl:left-16',
                    '3xl:top-44 3xl:text-1xl 3xl:left-10',
                    '4xl:top-72 4xl:text-3xl 4xl:left-14',
                ]"
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /><br />
                Deserunt aperiam nihil, recusandae atque culpa commodi placeat
                unde repellat
            </h3>
            <div :class="['absolute w-full text-center bottom-10']">
                <button
                    :class="[
                        'text-xm  py-1 px-2 bg-transparent text-white font-semibold border border-white rounded hover:bg-gray-800 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 opacity-0',
                        '',
                    ]"
                    
                >
                <a href="/project"> Read More</a>
                </button>
            </div>
        </div>
        <div
            class="bg-[url('src/assets/img/accordionImage/Image-3.jpg')] bg-cover bg-center bg-no-repeat"
            :class="[
                'panel',
                'text-white',
                { active: active == 3 },
                'relative basis-1/6 h-full cursor-pointer rounded-2xl m-0.5 overflow-hidden transition-all easy-in duration-700',
                'md:relative md:basis-1/6 md:h-full md:cursor-pointer md:rounded-2xl md:m-0.5 md:overflow-hidden md:transition-all md:easy-in md:duration-700 ',
            ]"
            @click="active = 3"
        >
            <div
                :class="[
                    'absolute top-20 w-full text-center',
                    'lg:text-left lg:left-10 lg:top-12',
                    'xl:text-left xl:left-16 xl:top-20',
                    '3xl:text-left 3xl:left-10 3xl:top-24',
                    '4xl:text-left 4xl:left-14 4xl:top-48',
                ]"
            >
                <h2
                    :class="[
                        'text-4xl opacity-0',
                        'md:top-32 md:text-6xl md:left-10',
                        'lg:text-5xl',
                        'xl:text-6xl',
                        '3xl:text-7xl ',
                        '4xl:text-8xl',
                    ]"
                >
                    Night
                </h2>
            </div>
            <h3
                :class="[
                    'absolute my-20 text-left opacity-0 top-20 text-base left-3',
                    'md:top-44 md:text-1xl md:left-10 md:w-10/12 ',
                    'lg:top-20 lg:text-lg lg:left-10 lg:w-10/12',
                    'xl:top-28 xl:text-xl xl:left-16',
                    '3xl:top-44 3xl:text-1xl 3xl:left-10',
                    '4xl:top-72 4xl:text-3xl 4xl:left-14',
                ]"
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /><br />
                Deserunt aperiam nihil, recusandae atque culpa commodi placeat
                unde repellat
            </h3>
            <div :class="['absolute w-full text-center bottom-10']">
                <button
                    :class="[
                        'text-xm  py-1 px-2 bg-transparent text-white font-semibold border border-white rounded hover:bg-gray-800 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 opacity-0',
                        '',
                    ]"
                >
                    Read More
                </button>
            </div>
        </div>
        <div
            class="bg-[url('src/assets/img/accordionImage/Image-4.jpg')] bg-cover bg-center bg-no-repeat"
            :class="[
                'panel',
                'text-white',
                { active: active == 4 },
                'relative basis-1/6 h-full cursor-pointer rounded-2xl m-0.5 overflow-hidden transition-all easy-in duration-700',
                'md:relative md:basis-1/6 md:h-full md:cursor-pointer md:rounded-2xl md:m-0.5 md:overflow-hidden md:transition-all md:easy-in md:duration-700 ',
            ]"
            @click="active = 4"
        >
            <div
                :class="[
                    'absolute top-20 w-full text-center',
                    'lg:text-left lg:left-10 lg:top-12',
                    'xl:text-left xl:left-16 xl:top-20',
                    '3xl:text-left 3xl:left-10 3xl:top-24',
                    '4xl:text-left 4xl:left-14 4xl:top-48',
                ]"
            >
                <h2
                    :class="[
                        'text-4xl opacity-0',
                        'md:top-32 md:text-6xl md:left-10',
                        'lg:text-5xl',
                        'xl:text-6xl',
                        '3xl:text-7xl ',
                        '4xl:text-8xl',
                    ]"
                >
                    Summer
                </h2>
            </div>
            <h3
                :class="[
                    'absolute my-20 text-left opacity-0 top-20 text-base left-3',
                    'md:top-44 md:text-1xl md:left-10 md:w-10/12 ',
                    'lg:top-20 lg:text-lg lg:left-10 lg:w-10/12',
                    'xl:top-28 xl:text-xl xl:left-16',
                    '3xl:top-44 3xl:text-1xl 3xl:left-10',
                    '4xl:top-72 4xl:text-3xl 4xl:left-14',
                ]"
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /><br />
                Deserunt aperiam nihil, recusandae atque culpa commodi placeat
                unde repellat
            </h3>
            <div :class="['absolute w-full text-center bottom-10']">
                <button
                    :class="[
                        'text-xm  py-1 px-2 bg-transparent text-white font-semibold border border-white rounded hover:bg-gray-800 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 opacity-0',
                        '',
                    ]"
                >
                    Read More
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 1,
        };
    },
};
</script>

<style>
.panel.active {
    flex-basis: 100%;
}
.panel.active h2 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.8s;
}
.panel.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 1s;
}

.panel.active button {
    opacity: 1;
    transition: opacity 0.5s ease-in 1.5s;
}

@media (min-width: 640px) {
    .panel.active {
        flex-basis: 60%;
    }
}
</style>
