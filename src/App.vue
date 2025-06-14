<template lang="pug">
q-layout(class="bg-grey-1")
  q-header(
    elevated
    class="text-white"
    style="background: #24292e"
    height-hint="61.59"
  )
    q-toolbar(class="q-py-sm q-px-md")
      q-btn(
        to="/"
        round
        dense
        flat
        :ripple="false"
        :icon="mdiInvoice"
        size="19px"
        color="white"
        class="q-mr-sm"
        no-caps
      )

      div(class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap")
        div(v-for="(data, schema) in schemas")
          RouterLink(:to="{name: 'index', params: {schema}}" class="text-white") {{ schema }}
      q-space

  q-page-container
    q-page(padding)
      router-view
</template>

<script setup>
import { mdiInvoice } from "@quasar/extras/mdi-v7";
import schemas from "./schemas";
</script>
