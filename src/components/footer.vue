<template>
  <div>
      <footer class="foot">
       <div class="footerImage">
         <img  src="@/assets/footer.png">
       </div>
                 <v-container class="footerContent">
             <v-layout row wrap class="mt-16">
               <v-flex xs12 sm6>
                 <div class="quoteTitle">
                   Need a quote for a project? Get in touch...
                 </div>
                 <div class="quoteContent">
                   if you're here it means you want to start a journey we would love to get to know you and guide you along the journey.
                 </div>
               </v-flex>
               <v-flex xs12 sm6>
                 <form
                  action="https://formspree.io/f/xknkbgpg"
                  method="POST"
                >
                 <v-card 
                 tile
                 elevation="10"
                 class="contCard"
                 >
                 <v-card-title >
                   <div class="cardTitle">
                              SAY SOMETHING
                            </div>
                 </v-card-title>
                   <v-card-text>
                      <v-list>
                        <v-list-item class="cardList">
                          <v-list-item-content>
                            <v-text-field type="text" name="Your name" 
                            label="Your name..."  outlined color="#9B4C0E"></v-text-field>
                            
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="cardList">
                          <v-list-item-content>
                            <v-text-field type="email" name="Your mail"  
                            label="Your mail..."   outlined color="#9B4C0E"></v-text-field>
                            
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="cardList">
                          <v-list-item-content>
                              <v-textarea name="comment"
                                     
                                      outlined
                                      color="#9B4C0E"
                                      label="Your message..."
                                    ></v-textarea> 
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="cardList2">
                          <v-list-item-content>
                          <v-btn width="100%" tile class="cardBtn" type="submit"><div class="">SEND</div></v-btn>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                   </v-card-text>
                 </v-card>
                 </form>
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
                             <span>copyright © 2021, All right reserved.  </span>
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
    ]
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
div.footerImage{
  width: 100%;
  height: 643px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.container.footerContent{
  z-index: 2;
  position: relative;
}
.cardTitle{
  font-family: montserrat;
  font-weight:500;
  font-size: 1.5em;
  color: black;
}
.quoteTitle{
  font-family: montserrat;
  color: black;
  font-weight:500;
  font-size: 1.5em;
  padding-right: 10em;

}
.quoteContent{
  font-family: poppins;
  font-weight:280;
  padding-right: 21em;
  margin-top: 1em;
}
.contCard.v-card{
  width: 80%;
  margin: 0 auto;
  /* padding: 5em auto; */
}
.cardBtn.v-btn{
  background:#9B4C0E;
  color: white;
  font-family: poppins;
}
.cardTitle{
     margin-left: 0.5em;
     padding-top: 1em;
     font-size: 1.4em;
   }
.cardList.v-list-item{
  margin-bottom: -1em;
}
.cardList2.v-list-item{
  margin-top: -3em;
  margin-bottom: 3em
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
 /* mobile view  */
 
 @media screen and (max-width: 1024px) {
   .quoteTitle{
     padding-right: 3em ;
     font-size: 1.3em;
     margin-left: 1em;
   }
   .quoteContent{
  padding-right: 10em;
  margin-left: 1em;
  font-size: 0.9em;
  margin-top: 1.5em;
   }
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
 @media screen and (max-width: 500px){
   .quoteContent{
     padding-right: 0;
     margin-bottom: 4em;
     margin-right: 1em;
   }
   .contCard.v-card{
     width: 90%;
     height: 480px;
   }
   .cardList.v-list-item{
     margin: -3em auto;
   }
   .cardList2.v-list-item{
     margin-bottom: 0;
   }
   .cardTitle{
     margin: 0.4em  0.5em;
   }
   .wrapsCont{
     position: relative;
     bottom: 0;
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
 }

</style>