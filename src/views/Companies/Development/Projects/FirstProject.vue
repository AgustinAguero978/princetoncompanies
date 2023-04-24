<template>
    <section class="overflow-x-hidden">
        <section class="w-screen h-screen">
            <Navbar />
            <Banner
                :banner-title="banner[0].title"
                :banner-subtitle="banner[0].subtitle"
                :banner-background="banner[0].image"
            />
        </section>
        <ImagesColumns
            :imagesColumns-image-vertical="imagesColumns[0].imageVertical"
            :imagesColumns-image-horizontal="imagesColumns[0].imageHorizontal"
            :imagesColumns-title="imagesColumns[0].title"
            :imagesColumns-paragraph="imagesColumns[0].paragraph"
        />
        <div class="w-full h-40"></div>
        <ImageWithText
            :imageWithText-title="imageWithText[0].title"
            :imageWithText-paragraph="imageWithText[0].paragraph"
            :imageWithText-image="imageWithText[0].image"
        />
        <div class="w-full h-40"></div>
        <TextSection
            :textSection-title="textSection[0].title"
            :textSection-first-subtitle="textSection[0].firstSubtitle"
            :textSection-first-paragraph="textSection[0].firstParagraph"
            :textSection-second-paragraph="textSection[0].secondParagraph"
            :textSection-third-paragraph="textSection[0].thirdParagraph"
            :textSection-second-subtitle="textSection[0].secondSubtitle"
            :textSection-fourth-paragraph="textSection[0].fourthParagraph"
            :textSection-third-subtitle="textSection[0].thirdSubtitle"
            :textSection-fifth-paragraph="textSection[0].fifthParagraph"
            :textSection-client="textSection[0].client"
            :textSection-country="textSection[0].country"
            :textSection-location="textSection[0].location"
            :textSection-project-status="textSection[0].projectStatus"
            :textSection-completion-year="textSection[0].completionYear"
            :textSection-site-area="textSection[0].siteArea"
            :textSection-building-height="textSection[0].buildingHeight"
        />
        <div class="w-full h-40"></div>
        <!-- <Testimonials
            :testimonial-title="testimonials[0].title"
            :testimonial-background-image="testimonials[0].backgroundImage"
            :testimonial-first-image="testimonials[0].firstImage"
            :testimonial-first-name="testimonials[0].firstName"
            :testimonial-first-role="testimonials[0].firstRole"
            :testimonial-first-title="testimonials[0].firstTitle"
            :testimonial-first-comment="testimonials[0].firstComment"
            :testimonial-second-image="testimonials[0].secondImage"
            :testimonial-second-name="testimonials[0].secondName"
            :testimonial-second-role="testimonials[0].secondRole"
            :testimonial-second-title="testimonials[0].secondTitle"
            :testimonial-second-comment="testimonials[0].secondComment"
            :testimonial-third-image="testimonials[0].thirdImage"
            :testimonial-third-name="testimonials[0].thirdName"
            :testimonial-third-role="testimonials[0].thirdRole"
            :testimonial-third-title="testimonials[0].thirdTitle"
            :testimonial-third-comment="testimonials[0].thirdComment"
            :testimonial-fourth-image="testimonials[0].fourthImage"
            :testimonial-fourth-name="testimonials[0].fourthName"
            :testimonial-fourth-role="testimonials[0].fourthRole"
            :testimonial-fourth-title="testimonials[0].fourthTitle"
            :testimonial-fourth-comment="testimonials[0].fourthComment"
            :testimonial-fifth-image="testimonials[0].fifthImage"
            :testimonial-fifth-name="testimonials[0].fifthName"
            :testimonial-fifth-role="testimonials[0].fifthRole"
            :testimonial-fifth-title="testimonials[0].fifthTitle"
            :testimonial-fifth-comment="testimonials[0].fifthComment"
        /> -->
        <section>
            <div class="w-full h-40"></div>
        </section>
        <ProjectCards
        :projects="projectCards"
        />
        <section>
            <div class="w-full h-40"></div>
        </section>
        <Footer />
    </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import ImagesColumns from "@/components/ImagesColumns.vue";
import ImageWithText from "@/components/ImageWithText.vue";
import Testimonials from "@/components/Testimonials.vue";
import ProjectCards from "@/components/ProjectCards.vue";
import TextSection from "@/components/TextSection.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "firstProjectDevelopment",
    components: {
        Navbar,
        Banner,
        ImageWithText,
        Testimonials,
        Footer,
        ProjectCards,
        ImagesColumns,
        TextSection,
    },

    data() {
        return {
            banner: [
                {
                    title: "Explore",
                    subtitle: "A breath of Fresh Air",
                    image: "/src/assets/img/Companies/Development/projectImages/Project-1.jpg",
                },
            ],

            imagesColumns: [
                {
                    imageVertical: "/src/assets/img/Companies/Development/firstProjectImages/Inside-1.jpeg",
                    imageHorizontal: "/src/assets/img/Companies/Development/firstProjectImages/Inside-2.jpeg",
                    title: "We are not the outsource, we are the source.",
                    paragraph:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eligendi aut nulla. Hic, qui? Architecto inciduntquod earum dicta accusamus, voluptatibus soluta eius,aliquid laudantium temporibus est, quibusdam perspiciatis nostrum.",
                },
            ],

            imageWithText: [
                {
                    title: "Relax, you're home !",
                    paragraph:
                        "All our supported hardware includes traditional inputs so you can integrate our products into your house in a way that's best for everyone.",
                    image: "/src/assets/img/Companies/Development/firstProjectImages/House-Design-1.png",
                },
            ],

            textSection: [
                {
                    title: "Connecting to the design, and the client",
                    firstSubtitle: "First Subtitle",
                    secondSubtitle: "Second Subtitle",
                    thirdSubtitle: "Third Subtitle",
                    firstParagraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem maiores aspernatur dolore fugit voluptatibus corporis consequuntur labore temporibus, vero, quas quos assumenda doloremque voluptatum veniam, laudantium pariatur iure molestiae? Culpa!",
                    secondParagraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                    thirdParagraph: "aspernatur laborum consequatur. Omnis ullam vitae eligendi libero facilis perferendis?...",
                    fourthParagraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem maiores aspernatur dolore fugit voluptatibus corporis consequuntur labore temporibus, vero, quas quos assumenda doloremque voluptatum veniam, laudantium pariatur iure molestiae? Culpa!",
                    fifthParagraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officia harum! Ratione corporis...",
                    client: "Mumbai International Airport Ltd.",
                    country: "EE.UU",
                    location: "Virginia",
                    projectStatus: "Design Complete",
                    completionYear: "2022",
                    siteArea: "83 mts²",
                    buildingHeight: "12 meters",
                },
            ],

            testimonials: [
                {
                    title: "Customer Reviews and Testimonials",

                    backgroundImage:
                        "/src/assets/img/Companies/Development/firstProjectImages/testimonialsImages/bg-pattern-quotation.svg",
                    firstImage:
                    "/src/assets/img/Companies/Development/firstProjectImages/testimonialsImages/image-daniel.jpg",
                    firstName: "Daniel Clifford",
                    firstRole: "Verified Graduate",
                    firstTitle:
                        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
                    firstComment:
                        '" I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. "',

                    secondImage:
                    "/src/assets/img/Companies/Development/firstProjectImages/testimonialsImages/image-jonathan.jpg",
                    secondName: "Jonathan Walters",
                    secondRole: "Verified Graduate",
                    secondTitle:
                        "The team was very supportive and kept me motivated",
                    secondComment:
                        '"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself."',

                    thirdImage:
                    "/src/assets/img/Companies/Development/firstProjectImages/testimonialsImages/image-jeanette.jpg",
                    thirdName: "Jeanette Harmon",
                    thirdRole: "Verified Graduate",
                    thirdTitle: "An overall wonderful and rewarding experience",
                    thirdComment:
                        '" Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. "',

                    fourthImage:
                    "/src/assets/img/Companies/Development/firstProjectImages/testimonialsImages/image-patrick.jpg",
                    fourthName: "Patrick Abrams",
                    fourthRole: "Verified Graduate",
                    fourthTitle:
                        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
                    fourthComment:
                        '" The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The is above the rest. You will get the personal attention you need from an incredible community of Smart and amazing people. "',

                    fifthImage:
                    "/src/assets/img/Companies/Development/firstProjectImages/testimonialsImages/image-kira.jpg",
                    fifthName: "Kira Whittle",
                    fifthRole: "Verified Graduate",
                    fifthTitle:
                        "Such a life-changing experience. Highly recommended!",
                    fifthComment:
                        '" Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"',
                },
            ],

            projectCards: [
                {
                    title: "Wild Forest",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos natus, cupiditate deserunt rem vitae mollitia quod qui ad deleniti! Tempora numquam quae iure maiores velit! Fugit veniam dolores harum.",
                    imageUrl: "/src/assets/img/Companies/Development/projectImages/Project-2.jpg",
                    route: "/development/secondProject",
                },
                {
                    title: "Night",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos natus, cupiditate deserunt rem vitae mollitia quod qui ad deleniti! Tempora numquam quae iure maiores velit! Fugit veniam dolores harum.",
                    imageUrl: "/src/assets/img/Companies/Development/projectImages/Project-3.jpg",
                    route: "/development/thirdProject",
                },
                {
                    title: "Summer",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos natus, cupiditate deserunt rem vitae mollitia quod qui ad deleniti! Tempora numquam quae iure maiores velit! Fugit veniam dolores harum.",
                    imageUrl: "/src/assets/img/Companies/Development/projectImages/Project-4.jpg",
                    route: "/development/fourthProject",
                },
            ],
        };
    },
};
</script>
