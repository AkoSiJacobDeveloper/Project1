<template>
    <div class="btn-container d-flex gap-1 mt-2">
        <button
            v-for="(button, index) in buttons"
            :key="index"
            @click="handleClick(button.label)"
            class="rounded-1 border-0 px-2 "
        >
            {{ button.label }}
        </button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const buttons = ref([
            { label: "Italian" },
            { label: "Chinesse" },
            { label: "Japanese" },
        ]);

        return {
            buttons
        }
    }
}
</script>