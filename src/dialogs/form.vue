<template lang="pug">
q-form(@submit="submit")
  q-dialog(ref='dialogRef' @hide='onDialogHide')
    q-card.q-dialog-plugin
      q-card-section
        div.text-h5 {{ title }}
        q-card-actions(align='center')
            q-btn(label="Cancel", @click="onDialogCancel", flat)
            q-btn(color='positive' icon="mdi-content-save" label="Save" type="submit" :loading="loading.submit" push)
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from "quasar";
import { computed, ref } from "vue";
const props = defineProps<{
  schema: string;
  action: "create" | "update";
}>();

defineEmits([...useDialogPluginComponent.emits]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
function onOKClick() {
  onDialogOK();
}

const title = computed<string>(() => {
  return `${props.action} ${props.schema}`;
});
const loading = ref({ submit: false });
async function submit() {
  loading.value.submit = true;
  try {
    if (response.status) {
      onDialogOK();
    }
  } finally {
    loading.value.submit = false;
  }
}
</script>
