<template>
   <div>
         <v-app-bar class="nav" height="60px"   dark>
              <v-toolbar-title class="logo">
                   <v-container class="">
                      <v-row>
                        <v-col>
                       <v-avatar class="avat" height="50px" width="50px">
                      <v-img src="@/assets/m-logo.jpg"></v-img>
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
                     <a 
                    v-for="(nav, index) in navs" :key="index" 
                     class="btn "
                    :href="nav.link">{{nav.name}}</a>
              </div>
              <!-- <v-spacer></v-spacer> -->
              <v-app-bar-nav-icon @click="dialog = !dialog" class="hidden-md-and-up"></v-app-bar-nav-icon>
            </v-app-bar>
            <v-navigation-drawer app 
            disable-resize-watcher
            disable-route-watcher
            overlay-color="#9B4C0E"
            right
             v-model="dialog" width="60%" color="#FB8C00"> 
             <div class="text-right pa-4"> <v-icon @click="dialog =!dialog" medium color="white">mdi-close</v-icon>
             </div>
             <v-list class="my-16">
                 <v-list-item class="act" :href="nav.link" v-for="(nav, index) in navs" :key="index" >
                     <v-list-item-content>
                         <v-list-item-subtitle class="text-center">
                             <span class="mobileNavs">{{nav.name}}</span>
                         </v-list-item-subtitle>
                     </v-list-item-content>
                 </v-list-item>
             </v-list>
                
            </v-navigation-drawer>
   </div>
</template>

<script>
export default {
    data: ()=>({
    dialog: false,
    navs: [{name:'Home', link:'/'}, {name:'About Us', link:'/'}, {name:'Services', link:'/'}, {name:'Portfolio', link:'/'}, {name:'Contact', link:'/'}]
    })

}
</script>

<style scoped>
header.nav.v-sheet{
    background:linear-gradient( to right, #F2A839 , #F4743B);
}
.cont{
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-right: 3em;
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

.btn:active{
    border-bottom: solid 2px white;
    color: #9B4C0E;
    font-weight: 500;
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
a.act.v-list-item:active .v-list-item__content .v-list-item__subtitle .mobileNavs{
    color: black;
    font-family: poppins;
    border-bottom: solid 2px white;
}



@media screen and (max-width: 800px) {
.v-toolbar__title.logo{
    margin-left: 1em;
}
}


</style>