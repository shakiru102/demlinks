<template>
  <v-app>
    <v-main>
      <div class="fill">
      <Head />
      <router-view></router-view>
      <Foot />
      </div>
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
<style  scoped>
.fill{
  overflow: hidden;
}
</style>
