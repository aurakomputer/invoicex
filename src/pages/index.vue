<template lang="pug">
  .heading-actions
    QBtn(label="Create" color="primary" icon="mdi-plus" push @click="create")

</template>

<script setup lang="ts">
import Form from "../dialogs/form.vue";
import { Dialog } from "quasar";
const props = defineProps<{
  schema: string;
}>();

function create(): void {
  Dialog.create({
    component: Form,
    componentProps: {
      schema: props.schema,
      action: "create",
    },
  }).onOk(() => {});
}
</script>
