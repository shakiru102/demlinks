<template>
   <div>
         <v-app-bar flat fixed class="nav" height="60px"   dark>
              <v-toolbar-title class="logo">
                   <v-container class="">
                      <v-row>
                        <v-col>
                       <v-avatar class="avat" height="50px" width="50px">
                      <v-img width="70px" height="70px" src="@/assets/demlinks 2.jpg"></v-img>
                      </v-avatar>
                        </v-col>
                        <v-col>
                            <div class="demlinks">DemLinks</div>
                        </v-col>
                      </v-row>
                    </v-container>
                   
                  
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <div class="cont hidden-sm-and-down">
                     <router-link 
                     
                    v-for="(nav, index) in navs" :key="index" 
                     :class="{btn: 'btn' }"
                    exact-active-class="onpage"
                    :to="nav.link">{{nav.name}}</router-link>
              </div>
              <!-- <v-spacer></v-spacer> -->
              <v-app-bar-nav-icon @click="dialog = !dialog" class="hidden-md-and-up"></v-app-bar-nav-icon>
            </v-app-bar>
            <v-navigation-drawer app 
            disable-resize-watcher
            disable-route-watcher
            overlay-color="#9B4C0E"
            right
             v-model="dialog" width="80%" color="#FB8C00"> 
             <div class="text-right pa-4"> <v-icon @click="dialog =!dialog" medium color="white">mdi-close</v-icon>
             </div>
             <v-list class="my-16">
                 <v-list-item :class="{act: 'act', onpages: nav.onpage}" :href="nav.link" v-for="(nav, index) in navs" :key="index" >
                     <v-list-item-content>
                         <v-list-item-subtitle class="text-center">
                             <span :class="{mobileNavs: 'mobileNavs', onpages: nav.onpage}">{{nav.name}}</span>
                         </v-list-item-subtitle>
                     </v-list-item-content>
                 </v-list-item>
             </v-list>
                
            </v-navigation-drawer>
   </div>
</template>

<script>
import { bus } from '../main'
export default {
    data: ()=>({
    dialog: false,
    navs: [{onpage: false,name:'Home', link:'/'}, {onpage: false,name:'About Us', link:'/about'}, {onpage: false,name:'Services', link:'/services'}, {onpage: false,name:'Portfolio', link:'/portfolio'},]
    }),
    mounted(){
        bus.$on('changeClass', (data) => {
            const indexs = this.navs.findIndex(doc => doc.name === data)
            this.navs[indexs].onpage = true
        })
    }

}
</script>

<style scoped>
header.nav.v-sheet{
    background:linear-gradient( to right, #F2A839 , #F4743B);
    /* z-index: 1000; */
    /* box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1); */
}
.cont{
    width: 25%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-right: 2em;
    overflow: hidden;
}
.btn{
    outline: none;
    display: inline-block;
    height: 30px;
    width: auto;
      text-decoration: none;
    color: white;
    font-family: poppins;
    font-weight: 290;
    transition: all 0.1s ; 
    /* margin: 0 2em; */
}

.onpage{
     outline: none;
    display: inline-block;
    height: 30px;
    width: auto;
      text-decoration: none;
    font-family: poppins;
    border-bottom: solid 2px white;
    color: #9B4C0E;
    font-weight: 500;
    transition: all 0.1s ; 

}

.v-avatar.avat{
    border: solid 2px white;

}
.demlinks{
    font-family: poppins;
    font-weight:300 ;
    font-size: 0.85em;
    margin-top: 0.8em;
    margin-left: -1em;
}
.v-toolbar__title.logo{
    margin-left: 2em;
}
a.act.v-list-item .v-list-item__content .v-list-item__subtitle .mobileNavs{
    color: white;
    font-family: poppins;
    display: inline-block;
    height: 100%;
    padding-bottom: 0.5em;
    transition: all 0.3s;
}
a.act.v-list-item .v-list-item__content .v-list-item__subtitle .mobileNavs.onpages{
    color: black;
    font-family: poppins;
    border-bottom: solid 2px white;
}
a.act.onpages.v-list-item{
    background:  rgba(155, 75, 14, 0.268);

}


@media screen and (max-width: 600px) {
.v-toolbar__title.logo{
    margin-left: -0.5em;
}
}


</style>