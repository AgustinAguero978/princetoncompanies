<template>
    <Navbar />
    <BannerCenter />
    <div class="font-custom">
        <div class="flex justify-center items-center h-2/3 mx-32 py-10">
            <div class="w-screen mx-4 mt-60">
                <div class="flex">
                    <div
                        class="w-1/2 flex justify-center items-center column-1 pl-48"
                    >
                        <img
                            src="src\assets\img\AboutUs\ImageAbout.jpg"
                            alt=""
                            class="max-w-3xl mx-auto"
                        />
                    </div>
                    <div class="w-1/2 flex flex-col justify-center pr-48">
                        <h2
                            class="text-5xl font-semibold italic text-gray-600 mb-20 text-center"
                        >
                            We Turn Ideas Into Art
                        </h2>
                        <p
                            class="leading-loose text-2xl text-gray-600 text-justify max-w-3xl mx-auto"
                        >
                            <b class="italic"
                                >We are a collective of architects, designers,
                                engineers, and planners working together to
                                build a better future. </b
                            >
                            It all started with a self-performing technical
                            builder. Grown to be one of the top contractors in
                            the world in 30 short years, DPR Construction has
                            stayed true to its roots. mod tincidunt ut laoreet
                            dolore magna aliquam erat volutpat. Ut wisi enim ad
                            minim veniam, quis nostrud exerci tation ullamcorper
                            suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat. Duis autem vel eum iriure dolor in
                            hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center h-2/3 mx-32 py-10">
            <div class="text-center">
                <h1 class="text-5xl font-semibold text-dressblue mb-10 mt-16">
                    TPC FAMILY
                </h1>
                <p
                    class="leading-loose text-justify max-w-7xl mx-auto text-2xl text-gray-600"
                >
                    From the first moment that a project is conceived through
                    the life of a building, we see opportunities to streamline
                    and integrate the project for more predictability, more
                    efficiency and higher quality—but only if there is
                    transparency and collaboration. The TPC family of companies
                    is an extended team of teams, connecting a typically
                    disjointed process from preconstruction through development,
                    design, visualization and building. Our shared builder
                    skillset and mindset allows us to approach prefabrication,
                    software and logistics not as tools or methods, but simply
                    the way we build.
                </p>
            </div>
        </div>
        <div class="mt-32 mb-28 mx-32">
            <div class="grid grid-cols-2 gap-4 gap-y-16">
                <div class="col-span-2 md:col-span-1 pl-36">
                    <div
                        class="relative max-w-2xl mx-auto"
                        v-motion-slide-visible-once-left
                    >
                        <img
                            src="\src\assets\img\AboutUs\Visualization.jpeg"
                            alt="Descripción de la imagen"
                            class="w-full rounded-xl h-[448px]"
                        />
                        <div
                            class="absolute inset-0 flex flex-col items-center justify-center text-4xl font-semibold"
                        >
                            <h2
                                class="text-white z-20"
                                style="
                                    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
                                "
                            >
                                TPC
                            </h2>
                            <p
                                class="text-center text-white z-20"
                                style="
                                    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
                                "
                            >
                                VISUALIZATION
                            </p>
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-gray-600 to-gray-600 opacity-40 rounded-xl"
                        ></div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div
                        class="flex flex-col items-start justify-center"
                        v-motion-slide-visible-once-right
                    >
                        <h2
                            class="text-5xl font-semibold italic text-gray-700 mb-2 max-w-3xl"
                        >
                            We are not the outsource, we are the source
                        </h2>
                        <p
                            class="leading-relaxed text-2xl text-gray-600 mb-4 max-w-3xl text-justify mt-3"
                        >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                        </p>
                        <button
                            class="border-gray-400 border bg-gray-200 hover:bg-dressblue hover:text-white text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mt-12"
                        >
                            <a href="/visualization">View More</a>
                        </button>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 pl-36">
                    <div
                        class="relative max-w-2xl mx-auto"
                        v-motion-slide-visible-once-left
                    >
                        <img
                            src="\src\assets\img\AboutUs\Design.jpeg"
                            alt="Descripción de la imagen"
                            class="w-full rounded-xl h-[448px]"
                        />
                        <div
                            class="absolute inset-0 flex flex-col items-center justify-center text-4xl font-semibold"
                        >
                            <h2
                                class="text-white z-20"
                                style="
                                    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
                                "
                            >
                                TPC
                            </h2>
                            <p
                                class="text-center text-white z-20"
                                style="
                                    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
                                "
                            >
                                DESIGN
                            </p>
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-gray-600 to-gray-600 opacity-40 rounded-xl"
                        ></div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div
                        class="flex flex-col items-start justify-center"
                        v-motion-slide-visible-once-right
                    >
                        <h2
                            class="text-5xl font-semibold italic text-gray-700 mb-2 max-w-3xl"
                        >
                            We Design From Dockhouses To Clubhouses
                        </h2>
                        <p
                            class="leading-relaxed text-2xl text-gray-600 mb-4 text-justify max-w-3xl mt-3"
                        >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                        </p>
                        <button
                            class="border-gray-400 border bg-gray-200 hover:bg-dressblue hover:text-white text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mt-12"
                        >
                            <a href="/design">View More</a>
                        </button>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 pl-36">
                    <div
                        class="relative max-w-2xl mx-auto"
                        v-motion-slide-visible-once-left
                    >
                        <img
                            src="\src\assets\img\AboutUs\Builders.jpeg"
                            alt="Descripción de la imagen"
                            class="w-full rounded-xl h-[448px]"
                        />
                        <div
                            class="absolute inset-0 flex flex-col items-center justify-center text-4xl font-semibold"
                        >
                            <h2
                                class="text-white z-20"
                                style="
                                    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
                                "
                            >
                                TPC
                            </h2>
                            <p
                                class="text-center text-white z-20"
                                style="
                                    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
                                "
                            >
                                BUILDERS
                            </p>
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-gray-600 to-gray-600 opacity-40 rounded-xl"
                        ></div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div
                        class="flex flex-col items-start justify-center"
                        v-motion-slide-visible-once-right
                    >
                        <h2
                            class="text-5xl font-semibold italic text-gray-700 max-w-3xl mb-2"
                        >
                            We Design From Dockhouses To Clubhouses
                        </h2>
                        <p
                            class="leading-relaxed text-2xl text-gray-600 mb-4 max-w-3xl text-justify mt-3"
                        >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                        </p>
                        <button
                            class="border-gray-400 border bg-gray-200 hover:bg-dressblue hover:text-white text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mt-12"
                        >
                            <a href="/builder">View More</a>
                        </button>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 pl-36">
                    <div
                        class="relative max-w-2xl mx-auto"
                        v-motion-slide-visible-once-left
                    >
                        <img
                            src="\src\assets\img\AboutUs\Development.jpeg"
                            alt="Descripción de la imagen"
                            class="w-full rounded-xl h-[448px]"
                        />
                        <div
                            class="absolute inset-0 flex flex-col items-center justify-center text-4xl font-semibold"
                        >
                            <h2
                                class="text-white z-20"
                                style="
                                    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
                                "
                            >
                                TPC
                            </h2>
                            <p
                                class="text-center text-white z-20"
                                style="
                                    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
                                "
                            >
                                DEVELOPMENT
                            </p>
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-gray-600 to-gray-600 opacity-40 rounded-xl"
                        ></div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div
                        class="flex flex-col items-start justify-center"
                        v-motion-slide-visible-once-right
                    >
                        <h2
                            class="text-5xl font-semibold italic text-gray-700 mb-2 max-w-3xl"
                        >
                            We Design From Dockhouses To Clubhouses
                        </h2>
                        <p
                            class="leading-relaxed text-2xl text-gray-600 mb-4 text-justify max-w-3xl mt-3"
                        >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                        </p>
                        <button
                            class="border-gray-400 border bg-gray-200 hover:bg-dressblue hover:text-white text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mt-12"
                        >
                            <a href="/development">View More</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import BannerCenter from "@/components/BannerCenter.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "about us",
    components: { Navbar, BannerCenter, Footer },
};
</script>
