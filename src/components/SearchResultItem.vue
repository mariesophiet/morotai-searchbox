<template>
<div class="result-item">
    <h2>{{ title }}</h2>
    <p>{{objectID}}, {{type}}</p>
</div>
</template>
<script>
export default {
  name: "SearchResultItem",
  props: ["title", "objectID", "type"]
};
</script>

