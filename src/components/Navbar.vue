<template>
    <div
        :class="[
            'absolute w-full bg-dressblue text-gray-100  shadow-mg hover:shadow-lg z-40 h-32',
            'md:flex md:h-32 md:z-40 md:justify-end md:w-full md:absolute md:hover:shadow-lg md:shadow-mg',
        ]"
    >
        <div
            :class="[
                'absolute flex w-full justify-center items-center ',
                'md:absolute md:w-full md:justify-center md:items-center md:flex',
            ]"
        >
        <RouterLink to="/">
            <img
                :class="[
                    'cursor-pointer py-3.5',
                    'md:cursor-pointer md:py-3.5 md:px-6',
                ]"
                src="..\assets\img\Home\newlogos\tpc.png"
                alt="Logo"
            />
        </RouterLink>
        </div>
        <span
            :class="[
                'md:hidden',
                'absolute right-3 top-1.5 cursor-pointer text-4xl ',
            ]"
            @click="MenuOpen()"
        >
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
        </span>
        <ul
            :class="[
                'absolute w-full h-32 px-10 duration-700 ease-in bg-dressblue top-[127px] z-40',
                'md:flex md:items-center md:px-6 md:pb-0 pb-10 md:static md:w-auto',
                open ? 'left-0' : 'left-[-100%]',
            ]"
        >
            <li
                :class="[
                    'my-5 text-xl font-custom font-semibold',
                    'md:mx-6 md:my-0 md:text-xl 4xl:text-2xl',
                ]"
                v-for="(link, index) in Links"
                :key="`navbar-link-${index}`"
            >
                <a 
                id="navbar-link"
                :class="['inline-block']"
                :href="link.link">{{ link.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
    setup() {
        let open = ref(false);
        let Links = [
            { name: "About Us", link: "/about" },
            { name: "Contact Us", link: "/contact" },
        ];
        function MenuOpen() {
            open.value = !open.value;
        }
        return { Links, open, MenuOpen };
    },
};
</script>

<style>
#navbar-link::after{
    content: '';
    height: 2px;
    width:0% ;
    background-color: white;
    display: block;
    transition: .5s ease-in-out;
}

#navbar-link:hover::after{
    content: '';
    height: 2px;
    width:100% ;
    background-color: white;
    display: block;
}
</style>
