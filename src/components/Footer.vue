<template>
    <footer>
        <div class="p-10 bg-dressblue text-gray-200">
            <div class="max-w-7xl mx-auto">
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
                >
                    <div class="mb-5">
                        <h4 class="text 2xl pb-4 font-custom font-semibold text-xl">The Princeton Companies</h4>
                        <p class="text-gray-200 font-custom font-light">
                            2 Cardinal Park Drive SE Suite 202-C<br />
                            Leesburg, Virginia 20175 <br /><br />
                            <strong class="font-custom font-semibold">Phone:</strong> 571-510-3192<br />
                            <strong class="font-custom font-semibold">Email:</strong> info@pdesignbuild.com <br />
                        </p>
                    </div>
                    <div class="mb-5">
                        <h4 class="pb-4 font-custom font-semibold text-xl">Useful Links</h4>
                        <ul class="text-gray-200 font-custom font-light">
                            <li class="pb-4"><i class="fa fa-chevron-right text-lightbluenew"></i><a class="hover:text-skylinesteel"><RouterLink to="/"> Home</RouterLink></a></li>
                            <li class="pb-4"><i class="fa fa-chevron-right text-lightbluenew"></i><a href="" class="hover:text-skylinesteel"><RouterLink to="/about"> About Us</RouterLink></a></li>
                            <li class="pb-4"><i class="fa fa-chevron-right text-lightbluenew"></i><a href="" class="hover:text-skylinesteel"><RouterLink to="/contact"> Contact</RouterLink></a></li>
                            <li class="pb-4"><i class="fa fa-chevron-right text-lightbluenew"></i><a href="" class="hover:text-skylinesteel"> Privacy and Legal Terms</a></li>
                        </ul>
                    </div>
                    <div class="mb-5">
                        <h4 class="pb-4 font-custom font-semibold text-xl">Our Companies</h4>
                        <ul class="text-gray-200 font-custom font-light">
                            <li class="pb-4"><i class="fa fa-chevron-right text-lightbluenew"></i><a class="hover:text-skylinesteel"><RouterLink to="/design"> Princeton Design</RouterLink></a></li>
                            <li class="pb-4"><i class="fa fa-chevron-right text-lightbluenew"></i><a href="#" class="hover:text-skylinesteel"><RouterLink to="/builder"> Princeton Builder</RouterLink></a></li>
                            <li class="pb-4"><i class="fa fa-chevron-right text-lightbluenew"></i><a href="#" class="hover:text-skylinesteel"> <RouterLink to="/development"> Princeton Development</RouterLink></a></li>
                            <li class="pb-4"><i class="fa fa-chevron-right text-lightbluenew"></i><a href="#" class="hover:text-skylinesteel"><RouterLink to="/visualization"> Princeton Visualization</RouterLink></a></li>

                        </ul>
                    </div>
                    <div class="mb-5">
                        <h4 class="pb-4 font-custom font-semibold text-xl">Join our Socials</h4>
                        <p class="text-gray-200 pb-2 font-custom font-light">
                            Let us make your dream build a reality
                        </p>
                        <div class="flex flex-row flex-wrap text-center text-xl text-dressblue mt-3 ">
                            <a href="https://www.instagram.com/pdesignbuild/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-lightbluenew mx-1 inline-block pt-1"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/tpc---the-princeton-companies/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-lightbluenew mx-1 inline-block pt-1"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-gray-800 text-gray-200 px-10">
            <div class="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
                <div class="text-center">
                    <div class="font-custom font-light">
                        Copyright <span class="font-custom font-semibold">The Princeton Companies</span>. All rights Reserved
                    </div>
                    <div class="font-custom font-light" >
                        Designed by <a href="#" class="font-custom font-semibold">Agustin Aguero</a>
                    </div>
                </div>
        </div>
        </div>
    </footer>
</template>