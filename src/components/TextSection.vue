<template>
    <section>
        <div class="grid grid-cols-1 gap-6 my-10 p-6 2xl:grid-cols-2">
            <div class="2xl:col-span-3">
                <h2
                    class="font-custom font-bold text-center text-4xl lg:text-6xl text-dressblue pb-10 lg:p-10 lg:pb-40"
                    v-motion-slide-visible-once-right
                >
                    {{ textSectionTitle }}
                </h2>
            </div>
            <div
                class="text-justify 2xl:px-20"
                v-motion-slide-visible-once-left
            >
                <h3 class="font-custom font-bold text-4xl pb-6 text-slate-600 text-center">
                    {{ textSectionFirstSubtitle }}
                </h3>
                <p class="font-custom text-spacegrey lg:text-xl">
                    {{ textSectionFirstParagraph }}
                </p>
                <br />
                <p class="font-custom text-spacegrey lg:text-xl">
                    {{ textSectionSecondParagraph }}
                    <br /><br />
                    {{ textSectionThirdParagraph }}
                </p>
            </div>
            <div
                class="text-justify 2xl:px-20"
                v-motion-slide-visible-once-right
            >
                <h3 class="font-custom font-bold text-4xl pb-6 text-slate-600 text-center">
                    {{ textSectionSecondSubtitle }}
                </h3>
                <p class="font-custom text-spacegrey lg:text-xl">
                    {{ textSectionFourthParagraph }}
                </p>
                <br />
                <h3 class="font-custom font-bold text-4xl pb-6 text-slate-600 text-center">
                    {{ textSectionThirdSubtitle }}
                </h3>
                <p class="font-custom text-spacegrey lg:text-xl">
                    {{ textSectionFifthParagraph }}
                </p>
            </div>
            <div
                class="font-custom text-xl text-spacegrey 2xl:col-start-3 2xl:row-start-2 2xl:px-20 2xl:m-auto pt-10 2xl:pt-0 2xl:border-l-2  2xl:pl-5"
            >
                <ul>
                    <li><span class="font-semibold">Client:</span> {{ textSectionClient }}</li>
                    <li>
                        <span class="font-semibold">Country:</span> {{ textSectionCountry }}
                    </li>
                    <li>
                        <span class="font-semibold">Location:</span> {{ textSectionLocation }}
                    </li>
                    <li>
                        <h4 class="font-semibold text-xl py-3">Project Facts</h4>
                    </li>
                    <li><span class="font-semibold">Status:</span> {{ textSectionProjectStatus }}</li>
                    <li>
                        <span class="font-semibold">Completion Year:</span>
                        {{ textSectionCompletionYear }}
                    </li>
                    <li>
                        <ul>
                            <li>
                                <h5 class="font-semibold text-xl pt-2 py-3">
                                    Size
                                </h5>
                            </li>
                            <li>
                                <span class="font-semibold">Site Area:</span>
                                {{ textSectionSiteArea }}
                            </li>
                            <li>
                                <span class="font-semibold">Building Height:</span>
                                {{ textSectionBuildingHeight }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        textSectionTitle: {
            type: String,
            default: "TextSection Title",
        },

        textSectionFirstSubtitle: {
            type: String,
            default: "Subtitle 1",
        },
        textSectionSecondSubtitle: {
            type: String,
            default: "Subtitle 2",
        },
        textSectionThirdSubtitle: {
            type: String,
            default: "Subtitle 3",
        },

        textSectionFirstParagraph: {
            type: String,
            default: "TextSection Paragraph 1",
        },
        textSectionSecondParagraph: {
            type: String,
            default: "TextSection Paragraph 2",
        },
        textSectionThirdParagraph: {
            type: String,
            default: "TextSection Paragraph 3",
        },
        textSectionFourthParagraph: {
            type: String,
            default: "TextSection Paragraph 4",
        },
        textSectionFifthParagraph: {
            type: String,
            default: "TextSection Paragraph 5",
        },

        textSectionClient: {
            type: String,
            default: " Clients",
        },
        textSectionCountry: {
            type: String,
            default: "Country",
        },
        textSectionLocation: {
            type: String,
            default: "Location",
        },
        textSectionProjectStatus: {
            type: String,
            default: "Status",
        },
        textSectionCompletionYear: {
            type: String,
            default: "Year",
        },
        textSectionSiteArea: {
            type: String,
            default: "Measure",
        },
        textSectionBuildingHeight: {
            type: String,
            default: "Measure",
        },
    },
};
</script>
