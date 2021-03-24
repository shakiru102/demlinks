<template>
  <v-app>
    <v-main>
      <Head />
      <Foot />
    </v-main>
  </v-app>
</template>

<script>
import Head from '@/components/header'
import Foot from '@/components/footer'
export default {
  name: 'App',

  components: {
    Head,Foot
  },

  data: () => ({
    //
  }),
};
</script>
