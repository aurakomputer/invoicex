<template lang="pug">
    div
      div(v-for="schema in schemas")
        | {{ schema }}
</template>
<script setup lang="ts">
import schemas from "../schemas";
</script>
