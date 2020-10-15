<template>
  <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
</template>

<script>
/* TODO:...props & ...slots pass all from above */
import { vuetify } from 'vuetify';

export default {
  name: 'vue-breadcrumber',
  components: { vuetify }
};
</script>
