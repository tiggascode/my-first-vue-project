<script setup>

    import {useStorage} from "@/composables/useStorage.js";

    let food = useStorage('food', 'salad');


</script>

<template>
    <main>
        <p>
            What is your favorit food <input type="text" v-model="food">
        </p>

    </main>
</template>
