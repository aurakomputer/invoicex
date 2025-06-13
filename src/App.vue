<template>
  <q-layout class="bg-grey-1">
    <q-header
      elevated
      class="text-white"
      style="background: #24292e"
      height-hint="61.59"
    >
      <q-toolbar class="q-py-sm q-px-md">
        <q-btn
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
        />

        <div
          v-if="$q.screen.gt.sm"
          class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap"
        >
          <RouterLink to="/customers" class="text-white">
            Customers
          </RouterLink>
        </div>
        <q-space />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { mdiInvoice } from "@quasar/extras/mdi-v7";
</script>
