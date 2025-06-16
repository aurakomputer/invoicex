<template lang="pug">
  .heading-actions
    QBtn(label="Create" color="primary" :icon="mdiPlus" push @click="create")
    QTable(
      :title="startCase(schema)"
      :rows
    )
</template>

<script setup>
import { mdiPlus } from "@quasar/extras/mdi-v7";
import Form from "../dialogs/form.vue";
import { startCase } from "lodash";
import { Dialog } from "quasar";
import db from "../db";
import { ref } from "vue";

const props = defineProps({
  schema: String,
});

const rows = ref([]);

async function initData() {
  console.log(await db.get(props.schema));
}
function create() {
  Dialog.create({
    component: Form,
    componentProps: {
      schema: props.schema,
      action: "create",
    },
  }).onOk(() => {});
}

initData();
</script>
