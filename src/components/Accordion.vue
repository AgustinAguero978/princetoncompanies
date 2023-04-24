<template>
    <div
        :class="[
            'absolute flex items-end w-full h-[68%] top-72 p-0.5 text-white',
            'xl:top-64 xl:h-4/6 xl:p-1 xl:mt-2',
            '3xl:top-72 3xl:mt-3',
            '4xl:top-96',
        ]"
    >
        <div
            :style="{
                backgroundImage:
                    active === 1
                        ? `linear-gradient(to right, rgba(17,24,39,0.3) 0%, rgba(17,24,39,0.3) 100%), url('${firstImage}')`
                        : `url('${firstImage}')`,
            }"
            :class="[
                'panel',
                'bg-cover bg-center bg-no-repeat',
                { active: active == 1 },
                'relative basis-1/6 h-full cursor-pointer  m-0.5 overflow-hidden transition-all easy-in duration-700',
                'md:relative md:basis-1/6 md:h-full md:w-full md:cursor-pointer  md:m-0.5 md:overflow-hidden md:transition-all md:easy-in md:duration-700  ',
            ]"
            @click="active = 1"
        >
            <div
                :class="[
                    'absolute top-28 w-full text-center font-custom font-semibold flex flex-col justify-center',
                    '4xl:top-80 3xl:top-60',
                ]"
            >
                <h2
                    :class="[
                        'text-4xl opacity-0',
                        'md:text-6xl md:left-10',
                        '4xl:text-7xl',
                    ]"
                    style="text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5)"
                >
                    {{ accordionTitleFirstPanel }}
                </h2>
            </div>
            <h3
                class="absolute my-20 text-center opacity-0 top-28 left-2 font-custom mt-28"
                :class="[
                    'md:top-44 md:text-xl md:left-16 md:w-10/12 md:text-left',
                    'xl:top-28',
                    '3xl:top-56 3xl:text-2xl 3xl:left-28',
                    '4xl:top-80 4xl:text-4xl',
                ]"
                style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5)"
            >
                {{ accordionDescriptionFirstPanel }}
            </h3>
            <div :class="['absolute w-full text-center bottom-24']">
                <button
                    :class="[
                        'text-xm py-1 px-2 md:py-1 3xl:py-1.5 border-[2.5px] text-white font-custom rounded-lg ',
                        'hover:bg-white hover:text-dressblue hover:border-transparent hover:-translate-y-0.5 transition ease-in duration-200 opacity-0',
                        '3xl:text-xl 4xl:text-3xl',
                    ]"
                >
                    <a :href="accordionRouteFirstPanel">Read More</a>
                </button>
            </div>
        </div>
        <div
            :style="{
                backgroundImage:
                    active === 2
                        ? `linear-gradient(to right, rgba(17,24,39,0.3) 0%, rgba(17,24,39,0.3) 100%), url('${secondImage}')`
                        : `url('${secondImage}')`,
            }"
            :class="[
                'panel',
                'bg-cover bg-center bg-no-repeat',
                { active: active == 2 },
                'relative basis-1/6 h-full cursor-pointer  m-0.5 overflow-hidden transition-all easy-in duration-700',
                'md:relative md:basis-1/6 md:h-full md:cursor-pointer  md:m-0.5 md:overflow-hidden md:transition-all md:easy-in md:duration-700 ',
            ]"
            @click="active = 2"
        >
            <div
                :class="[
                    'absolute top-28 w-full text-center font-custom font-semibold flex flex-col justify-center',
                    '4xl:top-80 3xl:top-60',
                ]"
            >
                <h2
                    :class="[
                        'text-4xl opacity-0',
                        'md:text-6xl md:left-10',
                        '4xl:text-7xl',
                    ]"
                    style="text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5)"
                >
                    {{ accordionTitleSecondPanel }}
                </h2>
            </div>
            <h3
                class="absolute my-20 text-center opacity-0 top-28 left-2 font-custom mt-28"
                :class="[
                    'md:top-44 md:text-xl md:left-16 md:w-10/12 md:text-left',
                    'xl:top-28',
                    '3xl:top-56 3xl:text-2xl 3xl:left-28',
                    '4xl:top-80 4xl:text-4xl',
                ]"
                style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5)"
            >
                {{ accordionDescriptionSecondPanel }}
            </h3>
            <div :class="['absolute w-full text-center bottom-24']">
                <button
                    :class="[
                        'text-xm py-1 px-2 md:py-1 3xl:py-1.5 border-[2.5px] text-white font-custom rounded-lg ',
                        'hover:bg-white hover:text-dressblue hover:border-transparent hover:-translate-y-0.5 transition ease-in duration-200 opacity-0',
                        '3xl:text-xl 4xl:text-3xl',
                    ]"
                >
                    <a :href="accordionRouteSecondPanel"> Read More</a>
                </button>
            </div>
        </div>
        <div
            :style="{
                backgroundImage:
                    active === 3
                        ? `linear-gradient(to right, rgba(17,24,39,0.3) 0%, rgba(17,24,39,0.3) 100%), url('${thirdImage}')`
                        : `url('${thirdImage}')`,
            }"
            :class="[
                'panel',
                'bg-cover bg-center bg-no-repeat',
                { active: active == 3 },
                'relative basis-1/6 h-full cursor-pointer  m-0.5 overflow-hidden transition-all easy-in duration-700',
                'md:relative md:basis-1/6 md:h-full md:cursor-pointer md:m-0.5 md:overflow-hidden md:transition-all md:easy-in md:duration-700 ',
            ]"
            @click="active = 3"
        >
            <div
                :class="[
                    'absolute top-28 w-full text-center font-custom font-semibold flex flex-col justify-center',
                    '4xl:top-80 3xl:top-60',
                ]"
            >
                <h2
                    :class="[
                        'text-4xl opacity-0',
                        'md:text-6xl md:left-10',
                        '4xl:text-7xl',
                    ]"
                    style="text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5)"
                >
                    {{ accordionTitleThirdPanel }}
                </h2>
            </div>
            <h3
                class="absolute my-20 text-center opacity-0 top-28 left-2 font-custom mt-28"
                :class="[
                    'md:top-44 md:text-xl md:left-16 md:w-10/12 md:text-left',
                    'xl:top-28',
                    '3xl:top-56 3xl:text-2xl 3xl:left-28',
                    '4xl:top-80 4xl:text-4xl',
                ]"
                style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5)"
            >
                {{ accordionDescriptionThirdPanel }}
            </h3>
            <div :class="['absolute w-full text-center bottom-24']">
                <button
                    :class="[
                        'text-xm py-1 px-2 md:py-1 3xl:py-1.5 border-[2.5px] text-white font-custom rounded-lg ',
                        'hover:bg-white hover:text-dressblue hover:border-transparent hover:-translate-y-0.5 transition ease-in duration-200 opacity-0',
                        '3xl:text-xl 4xl:text-3xl',
                    ]"
                >
                    <a :href="accordionRouteThirdPanel">Read More</a>
                </button>
            </div>
        </div>
        <div
            :style="{
                backgroundImage:
                    active === 4
                        ? `linear-gradient(to right, rgba(17,24,39,0.3) 0%, rgba(17,24,39,0.3) 100%), url('${fourthImage}')`
                        : `url('${fourthImage}')`,
            }"
            :class="[
                'panel',
                'bg-cover bg-center bg-no-repeat',
                { active: active == 4 },
                'relative basis-1/6 h-full cursor-pointer m-0.5 overflow-hidden transition-all easy-in duration-700',
                'md:relative md:basis-1/6 md:h-full md:cursor-pointer md:m-0.5 md:overflow-hidden md:transition-all md:easy-in md:duration-700 ',
            ]"
            @click="active = 4"
        >
            <div
                :class="[
                    'absolute top-28 w-full text-center font-custom font-semibold flex flex-col justify-center',
                    '4xl:top-80 3xl:top-60',
                ]"
            >
                <h2
                    :class="[
                        'text-4xl opacity-0',
                        'md:text-6xl md:left-10',
                        '4xl:text-7xl',
                    ]"
                    style="text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5)"
                >
                    {{ accordionTitleFourthPanel }}
                </h2>
            </div>
            <h3
                class="absolute my-20 text-center opacity-0 top-28 left-2 font-custom mt-28"
                :class="[
                    'md:top-44 md:text-xl md:left-16 md:w-10/12 md:text-left',
                    'xl:top-28',
                    '3xl:top-56 3xl:text-2xl 3xl:left-28',
                    '4xl:top-80 4xl:text-4xl',
                ]"
                style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5)"
            >
                {{ accordionDescriptionFourthPanel }}
            </h3>
            <div :class="['absolute w-full text-center bottom-24']">
                <button
                    :class="[
                        'text-xm py-1 px-2 md:py-1 3xl:py-1.5 border-[2.5px] text-white font-custom rounded-lg ',
                        'hover:bg-white hover:text-dressblue hover:border-transparent hover:-translate-y-0.5 transition ease-in duration-200 opacity-0',
                        '3xl:text-xl 4xl:text-3xl',
                    ]"
                >
                    <a :href="accordionRouteFourthPanel">Read More</a>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Accordion",
    data() {
        return {
            active: 1,
        };
    },

    props: {
        firstImage: {
            type: String,
            required: true,
        },
        accordionTitleFirstPanel: {
            type: String,
            default: "Title First Panel",
        },
        accordionDescriptionFirstPanel: {
            type: String,
            default: "Description First Panel",
        },
        accordionRouteFirstPanel: {
            type: String,
            required: true,
        },

        secondImage: {
            type: String,
            required: true,
        },
        accordionTitleSecondPanel: {
            type: String,
            default: "Title Second Panel",
        },
        accordionDescriptionSecondPanel: {
            type: String,
            default: "Description Second Panel",
        },
        accordionRouteSecondPanel: {
            type: String,
            required: true,
        },

        thirdImage: {
            type: String,
            required: true,
        },
        accordionTitleThirdPanel: {
            type: String,
            default: "Title Third Panel",
        },
        accordionDescriptionThirdPanel: {
            type: String,
            default: "Description Third Panel",
        },
        accordionRouteThirdPanel: {
            type: String,
            required: true,
        },

        fourthImage: {
            type: String,
            required: true,
        },
        accordionTitleFourthPanel: {
            type: String,
            default: "Title Fourth Panel",
        },
        accordionDescriptionFourthPanel: {
            type: String,
            default: "Description Fourth Panel",
        },
        accordionRouteFourthPanel: {
            type: String,
            required: true,
        },
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
