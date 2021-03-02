<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title> BlueFire Health </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-white text-primary">
      <q-tabs align="justify">
        <q-route-tab
          v-for="nav in navs"
          :key="nav.path"
          :to="nav.path"
          :icon="nav.icon"
          :label="nav.label"
          exact
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      navs: [
        {
          label: "Home",
          icon: "home",
          path: "/",
        },
        {
          label: "Contatos",
          icon: "group",
          path: "/contacts",
        },
        {
          icon: "camera",
          path: "/camera",
        },
        {
          label: "Sua Saúde",
          icon: "health_and_safety",
          path: "/health",
        },
        {
          label: "Mais",
          icon: "reorder",
          path: "/more",
        },
      ],
    };
  },
};
</script>
