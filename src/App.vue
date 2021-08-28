<template>
  <v-app>
    <v-main>
      <!-- <div class="fill"> -->
      <Head />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Head from '@/components/header'
export default {
  name: 'App',
  metaInfo (){
    return {
          meta: [
            { name: 'theme-color', content: '#f59145'},
            { name: 'msapplication-navbutton-color', content: '#f59145'},
            { name: 'apple-mobile-web-app-capable', content: 'yes'},
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'}
          ]
    }
  },

  components: {
    Head
  },

  data: () => ({
    //
  }),
  
};
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.fill{
  overflow: hidden;
}
</style>
