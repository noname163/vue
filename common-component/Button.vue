<template>
    <button @click="handleClick">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Click me',
        },
    },
    methods: {
        handleClick() {
            // Emit a 'click' event when the button is clicked
            this.$emit('click');
        },
    },
};
</script>

<style scoped>
button {
    background-color: blue;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
