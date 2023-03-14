<template>
    <section
        :class="[
            'bg-gradient-to-tl from-slate-400 to-neutral-800 h-[70vh] w-full relative top-32 mb-32',
        ]"
    >
        <img
            :class="['absolute w-full h-full object-cover mix-blend-overlay']"
            src="/src/assets/img/accordionImage/Image-2.jpg"
            alt=""
        />
        <div 
        v-motion-slide-left
        :class="[
            'absolute text-white py-36 px-8 cursor-default',
            'md:p-16',
            'lg:p-12',
            'xl:p-16',
            '3xl:p-24',
            '4xl:p-32',
            ]">

            <h1
            :class="[
                'font-bold text-4xl',
                'md:text-5xl',
                'lg:text-4xl',
                'xl:text-5xl',
                '3xl:text-7xl',
                '4xl:text-8xl',
                ]">
                Wild Forest
            </h1>

            <h2 
            :class="[
                'text-2xl my-2',
                'md:text-3xl md:my-4',
                'lg:text-2xl lg:my-4',
                'xl:text-3xl xl:my-4',
                '3xl:text-3xl 3xl:my-5',
                '4xl:text-4xl 4xl:my-5',
                ]">
                A breath of Fresh air
            </h2>
        </div>
    </section>
</template>
