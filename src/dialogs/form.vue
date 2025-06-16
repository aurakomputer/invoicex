<template lang="pug">
q-form(@submit="submit")
  q-dialog(ref='dialogRef' @hide='onDialogHide')
    q-card.q-dialog-plugin
      q-card-section
        div.text-h5 {{ title }}
        q-form
          template(v-for="(fieldType, fieldKey) in schema.form")
            q-input(:label="startCase(fieldKey)" :type="fieldType" v-model="form[fieldKey]")
        q-card-actions(align='center')
            q-btn(label="Cancel", @click="onDialogCancel", flat)
            q-btn(color='positive' :icon="mdiContentSave" label="Save" type="submit" :loading="loading.submit" push)
</template>

<script setup>
import { mdiContentSave } from "@quasar/extras/mdi-v7";
import { chain, startCase } from "lodash";
import schemas from "../schemas";
import { useDialogPluginComponent } from "quasar";
import { computed, ref } from "vue";
import db from "../db";
const props = defineProps({
  schema: String,
  action: String,
});

defineEmits([...useDialogPluginComponent.emits]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
function onOKClick() {
  onDialogOK();
}

const title = computed(() => {
  return startCase(`${props.action} Item`);
  // return startCase(`${props.action} ${props.schema}`);
});
const loading = ref({ submit: false });
const schema = schemas[props.schema];
const form = ref({
  name: "",
});
async function submit() {
  loading.value.submit = true;
  try {
    let rows = (await db.get(props.schema)) || [];
    if (props.action == "create") {
      rows.push(form.value);
    }

    console.log(props.schema, rows);
    await db.set(props.schema, rows);
    await db.save();
  } finally {
    loading.value.submit = false;
  }
}
</script>
