<template>
    <form class="mt-16">
        <div class="mb-16">
            <label
                class="block text-gray-700 font-bold mb-5 text-2xl"
                for="full-name"
            >
                Full Name
            </label>
            <input
                v-model="fullName"
                class="border-b border-gray-400 appearance-none bg-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="full-name"
                type="text"
                placeholder="Your Full Name"
                required
            />
        </div>
        <div class="mb-16">
            <label
                class="block text-gray-700 font-bold mb-5 text-2xl"
                for="email"
            >
                Email*
            </label>
            <input
                v-model="email"
                class="border-b border-gray-400 appearance-none bg-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email Address"
                required
            />
        </div>
        <div class="mb-16">
            <label
                class="block text-gray-700 font-bold mb-5 text-2xl"
                for="subject"
            >
                Subject
            </label>
            <input
                v-model="subject"
                class="border-b border-gray-400 appearance-none bg-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="Your Message Subject"
            />
        </div>
        <div class="mb-16">
            <label
                class="block text-gray-700 font-bold mb-5 text-2xl"
                for="message"
            >
                Message*
            </label>
            <textarea
                v-model="message"
                class="resize-none border-gray-400 bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                placeholder="Let Us Know More"
                required
            ></textarea>
        </div>
        <div class="flex items-center justify-left text-xl mt-8">
            <button
                class="italic border-gray-400 border bg-gray-200 hover:bg-blue-500 hover:text-white text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="sendEmail"
            >
                Send
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            fullName: "",
            email: "",
            subject: "",
            message: "",
        };
    },
    methods: {
        sendEmail() {
            axios
                .post("/send-email", {
                    fullName: this.fullName,
                    email: this.email,
                    subject: this.subject,
                    message: this.message,
                })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
};
</script>
