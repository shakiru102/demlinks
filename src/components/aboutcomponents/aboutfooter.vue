<template>
  <div>
      <footer class="foot">
       <div class="footerImage">
         <!-- <img  src="@/assets/footer.png"> -->
       </div>
                 <v-container class="footerContent">
             <v-layout row wrap class="mt-16">
               <v-flex xs12>
                 <v-card 
                 tile
                 elevation="10"
                 class="contCard"
                 >
                 <div class="team_heads text-center">
                    <div class="head_meet_teams">Our <span class="TeamStyle" >Expertise</span></div>
                    <img class="imgline" src="@/assets/stroke.png" alt="">
                 </div>
                 <v-card-text>
                     <v-container class="textContents ">
                         <v-layout row wrap justify-center>
                             <v-flex xs12>
                             <div class="mb-5 aboutfooter-cont">
                                 We have been working on variety of projects accross different industries, making our work as appropriate, versatile and functional response to the needs of our client. Our capabilities cover the following areas;
                             </div>
                         </v-flex>
                         <v-flex class="" v-for="(doc, index) in services " :key="index" xs12 md4>
                           <div class="expertise">{{ doc }}</div>
                         </v-flex>
                         </v-layout>
                     </v-container>
                 </v-card-text>
                 </v-card>
               </v-flex>
               <v-flex xs12 sm6 >
                  <v-container class="move">
                    <v-row><v-col><div class="demTechs">Demlinks Technology</div></v-col></v-row>
                     <v-row>
                      <v-col v-for=" (nav, index) in footnavs" :key="index" cols="4">
                   <div class="footContTitle mb-4 mt-1">{{nav.title}}</div>
                   <a v-for=" (item, index) in nav.cont" :key="index" :href="item.link" class="footContContent">{{item.contTitle}}</a>
                 </v-col>
                     </v-row>
                   </v-container>
               </v-flex>
               <v-flex xs12 sm6 >
                 <div class="wraps">
                   <div class="wrapsCont ">
                      <v-container class="">
                         <v-row class="">
                           <v-col>
                              <v-icon color="white">mdi-phone</v-icon>
                              <span> +23490 212 845 72</span>
                           </v-col>
                           <v-col>
                             <v-icon color="white">mdi-email</v-icon>
                              <span> demlinks.tech@gmail.com</span>
                           </v-col>
                         </v-row>
                         <v-row class=" line  ">
                           <v-col>
                             <span>copyright © 2022, All right reserved.  </span>
                           </v-col>
                           <v-col>
                             <div class="text-right">
                                <v-btn fab 
                                target="_blank" text x-small
                                v-for="(btn, index) in btns" :key="index"
                                 :href="btn.link" color="white"><v-icon color="white">{{btn.name}}</v-icon></v-btn>
                             </div>
                           </v-col>
                         </v-row>
                       </v-container>
                     </div>   
                 </div>
               </v-flex>
             </v-layout>
           </v-container>
      </footer>
  </div>
</template>

<script>
export default {
  data: ()=> ({
    footnavs: [
      {title: 'Services', cont: [{contTitle: 'Branding' , link:''},{contTitle:'Campaigns', link:""}, {contTitle:'IT consultancy', link:''}]},
      {title: 'About', cont: [{contTitle: 'Our projects' , link:''},{contTitle:'Careers', link:""}, {contTitle:'Team', link:''}]},
      {title: 'Help', cont: [{contTitle: 'Getting started' , link:''},{contTitle:'FAQ', link:""}]},
    ],
    btns:[
      { name:'mdi-instagram', link:''},
      { name:'mdi-facebook', link:''},
      { name:'mdi-twitter', link:''}
    ],
    services: ['Frontend development', 'Backend development', 'Software development', 'Brand identity', 'User experience design', 'Business Branding', 'Tech talent incubation', 'Co-working space', 'User interface design']
  })

}
</script>

<style scoped>

.foot{
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding-bottom: 2em;
}
.aboutfooter-cont{
  line-height: 1.5em;
  font-size: 15px;
  /* font-size: 2px; */
}
div.footerImage{
  width: 100%;
  background: url('../../assets/footer.png');
 background-size: cover;
  height: 643px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.container.footerContent{
  z-index: 2;
  position: relative;
}

.contCard.v-card{
  width: 80%;
  height: 60vh;
  margin: 4em auto; 
  padding: 5em auto;

 }

.footContContent{
  display: block;
 text-decoration: none;
 font-family: poppins;
color: rgba(223, 219, 219, 0.849); 
font-weight: 300;
font-size: 0.9em;
transition: all 0.3s ease-in-out;
}
.footContContent:hover{
  color:#9B4C0E;
}
.demTechs{
  font-family: montserrat;
  color: white;
  font-size: 1.7em;
}
.footContTitle{
font-family: montserrat;
color: white;
}
.wraps{
  width: 100%;
  height: 100%;
  position: relative;
}
.wrapsCont{
  width: 100%;
  position: absolute;
  bottom: 0;
  color: white;
  font-family: poppins;
  font-weight: 200;
}
.row.line{
  border-top: solid 1px white;
  margin-top: 2em;
}
.TeamStyle{
  color: #f2a839;
}
.team_heads{
  padding-top: 2em;
}
.team_heads > .head_meet_teams {
   font-family: montserrat, sans-serif;
   font-size: 2.5em;
   font-weight: 500;
}
.textContents{
    font-family: montserrat, sans-serif;
    font-weight: 400;
    font-size: 1.3em;
    padding-left: 5em;
    padding-right: 5em;
}
.expertise{
    margin-top: 1em;
    font-size: 15px;
}
 /* mobile view  */
 
 @media screen and (max-width: 1024px) {
  
   .demTechs{
     font-size: 1.3em;
   }
   .footContTitle{
     font-size: 0.9em;
   }
   .footContContent{
     font-size: 0.8em;
   }
   .wrapsCont{
     font-size: 0.6em;
   }
 }
 @media screen and (max-width: 800px) {
     .textContents{
         /* font-size: 1em; */
    padding-left: 2em;
    text-align: center;
    padding-right: 2em;
}
.expertise{
    margin-top: 0;
}
 }
 @media screen and (max-width: 600px){
   .imgline{
  width: 99px;
  position: relative;
  top: -0.5em;
}
.aboutfooter-cont{
  line-height: 1.5em;
}
   .quoteContent{
     padding-right: 0;
     margin-bottom: 4em;
     margin-right: 1em;
   }
   .contCard.v-card{
     width: 90%;
     height: 600px;
     padding: 2.5em auto;
   }
   .wrapsCont{
     position: relative;
     bottom: 0;
   }
   .expertise{
     margin-top: 0.5em;
   }
   .foot{
     padding-bottom: 0em;
   }
   .demTechs{
     position: relative;
     top: 0.5em;
   }
  .container.move{
    margin: 0 auto;
  }
      .textContents{
         /* font-size: 1em; */
    padding-left: 2em;
    text-align: left;
    font-size: 1em;
    padding-right: 2em;
}
.team_heads > .head_meet_teams{
    font-size: 1.8em;
  }
 }

</style>