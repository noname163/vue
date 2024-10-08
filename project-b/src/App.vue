<template>
    <div>
        <h1>Shared Button Example</h1>
        <SharedButton text="Click me!" @click="onButtonClick" />
    </div>
</template>

<script>
import SharedButton from '@shared/Button.vue'; // Import the shared button

export default {
    components: {
        SharedButton,
    },
    methods: {
        onButtonClick() {
            // Handle the click event here
            alert('Button was clicked as component b!');
        },
    },
};
</script>
