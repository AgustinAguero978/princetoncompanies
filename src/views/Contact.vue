<template>
    <Navbar />
    <section class="relative top-48">
        <div class="flex flex-wrap font-custom">
            <div class="w-full md:w-[60%] pl-36">
                <div class="bg-gray-200 p-4">
                    <div
                        class="mb-4 px-9 bg-gray-200 items-center justify-center"
                    >
                        <img
                            src="src\assets\img\Home\sliderCarouselImage\slide-2.jpg"
                            alt="Imagen de ejemplo"
                        />
                    </div>
                    <div class="mb-4 pt-10 pl-8 bg-gray-200 mt-8">
                        <div class="grid grid-cols-2 gap-32">
                            <div>
                                <h3 class="text-2xl font-bold mb-2 itali">
                                    Project Enquiry
                                </h3>
                                <p class="text-gray-600 mt-12 text-5xl italic">
                                    Do you want to inquire about The Princeton
                                    Companies?
                                </p>
                            </div>
                            <div class="pl-52">
                                <h3 class="text-2xl font-bold mb-2">Details</h3>
                                <ul class="font-light mt-6 text-xl">
                                    <li class="mb-2">
                                        The Princeton Companies
                                    </li>
                                    <li class="mb-2">
                                        2 Cardinal Park Drive SE - Suite 202-C
                                        <br />
                                        Leesburg, VA 20175-4458
                                    </li>
                                    <li class="mb-2">Ph: 571-510-3192</li>
                                    <li class="mb-2">
                                        mail@theprincetoncompanies.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-[40%] px-36">
                <div class="bg-gray-200 p-4">
                    <h2
                        class="text-5xl font-semibold text-gray-600 mb-4 italic"
                    >
                        Let's talk!
                    </h2>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
    name: "contact",
    components: { Navbar, ContactForm },
};
</script>
