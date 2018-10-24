<template>
    <div class="search-box">
        <input type="text" :value="searchQuery" />
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'SearchBoxInjection',
    inject: ['searchQuery']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    input {
        font-size: 20px;

    }

</style>
