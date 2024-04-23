<script setup>
import {useFlash} from '@/composables/useFlash';

let {flash} = useFlash();

</script>

<template>
    <p>
        <button @click="flash('Yay!','it works! about page',)">Clicl me</button>
    </p>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
