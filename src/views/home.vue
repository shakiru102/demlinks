<template>
  <div>
    <div class="homeimg">
      <v-img height="100%" src="@/assets/hero div.png">
     <v-container class="">
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <div class="amet">
              Amet mminim mollit no
            </div>
            <div class="amet-cont">
              Lorem ipsum dolor sit, amet coerendis ad ea exercitationem, quia soluta quasi ducimus officia non, accusamus itaque aut reprehenderit accusantium atque.
            </div>
                <v-btn width="180px" height="50px"  class="big-btn" color="#9B4C0E">select a service</v-btn>
            </v-flex>
          <v-flex xs12 sm6>
            <v-img  
            
          class="images"
            :src="require('@/assets/hero-image.jpeg')" ></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    </div>
    
     <v-container class="mt-16">
        <v-layout row wrap>
           <v-flex xs12>
            <div class="headOne text-center ">
              Our <span class="headTwo">Story</span>
            </div>
            <div class="text-center pt-3">
              <img src="@/assets/stroke.png" alt="">
            </div>
          </v-flex>
          <v-flex xs12 sm6>
            <v-card
             class="ourstory-img" >
              <v-img height="300px" src="@/assets/our-story.png"></v-img>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6>
            <div class="story-cont">
           We are a team of great minds dedicated to serving our consumer with an excellent delivery service thus greatly improving our client's revenue and engagements.
           <div class="pt-10">
           We are a team of great minds dedicated to serving our consumer with an excellent delivery service thus greatly improving our client's revenue and engagements.
           </div>
            </div>
          </v-flex>
          <v-flex xs12 sm6>
            <v-card class="mission-vision" >
              <v-card-text>
                <div class="mission-vision-head">
                  Mission
                </div>
                <div class="mission-vision-content">
                 Exercitation veniam conse quat nostrud amet.
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6>
            <v-card class="mission-vision" >
              <v-card-text>
                <div class="mission-vision-head">
                  Vision
                </div>
                <div class="mission-vision-content">
                 Exercitation veniam conse quat nostrud amet.
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
        <div class="headOne move text-center">
              What <span class="headTwo">We Offer</span>
            <div class="text-center pt-3">
              <img src="@/assets/stroke.png" alt="">
            </div>
            </div>

      <div class="bg">
         <v-container class="">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-card class="card-left mt-16">
                  <v-img src="@/assets/web-design.jpeg"></v-img>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6>
                <div class="card-title">Web Design & Development</div>
                <div class="card-content">
                  We are profient in designing world class website to suit your business and taste. we also manage your website to become the most displayed when anything related to what you donig being searched for.
                </div>
                <div class="text-right hidden-xs-only">
                      <v-btn :width="widths" class="small-btn" :height="heights"  :color="colors">Learn more.</v-btn>
                  
                </div>
                  <div class="text-center hidden-sm-and-up my-10 ">
                      <v-btn :width="widths" class="small-btn" :height="heights"  :color="colors">Learn more.</v-btn>
                  
                </div>
              </v-flex>
            </v-layout>
          </v-container>
      </div>
      <div class="my-16">
       <v-container class="">
          <v-layout row wrap>
            <v-flex xs sm6>
              <div class="card-title-two">Business Branding</div>
                <div class="card-content-two ">
                  We are profient in designing world class website to suit your business and taste. we also manage your website to become the most displayed when anything related to what you donig being searched for.
                </div>
                <div class="text-right hidden-xs-only">
                      <v-btn :width="widths" class="small-btn" :height="heights"  :color="colors">Learn more.</v-btn>
                  
                </div>
                  <div class="text-center hidden-sm-and-up my-10 ">
                      <v-btn :width="widths" class="small-btn" :height="heights"  :color="colors">Learn more.</v-btn>
                </div>
            </v-flex>
            <v-flex xs sm6>
              <v-card class="card-right mt-16">
                  <v-img  src="@/assets/business-branding.png"></v-img>
                </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
       <div class="bg">
         <v-container class="">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-card class="card-left mt-16">
                  <v-img  src="@/assets/home-automation.png"></v-img>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6>
                <div class="card-title">Web Design & Development</div>
                <div class="card-content">
                  We are profient in designing world class website to suit your business and taste. we also manage your website to become the most displayed when anything related to what you donig being searched for.
                </div>
                <div class="text-right hidden-xs-only">
                      <v-btn :width="widths" class="small-btn" :height="heights"  :color="colors">Learn more.</v-btn>
                  
                </div>
                  <div class="text-center hidden-sm-and-up my-10 ">
                      <v-btn :width="widths" class="small-btn" :height="heights"  :color="colors">Learn more.</v-btn>
                  
                </div>
              </v-flex>
            </v-layout>
          </v-container>
      </div>
           <div class="my-16">
       <v-container class="">
          <v-layout row wrap>
            <v-flex xs sm6>
              <div class="card-title-two">CCTV/Remote Video Monitoring</div>
                <div class="card-content-two ">
                  We are profient in designing world class website to suit your business and taste. we also manage your website to become the most displayed when anything related to what you donig being searched for.
                </div>
                <div class="text-right hidden-xs-only">
                      <v-btn :width="widths" class="small-btn" :height="heights"  :color="colors">Learn more.</v-btn>
                  
                </div>
                  <div class="text-center hidden-sm-and-up my-10 ">
                      <v-btn :width="widths" class="small-btn" :height="heights"  :color="colors">Learn more.</v-btn>
                  
                </div>
            </v-flex>
            <v-flex xs sm6>
              <v-card class="card-right mt-16">
                  <v-img  src="@/assets/CCTV.png"></v-img>
                </v-card>
            </v-flex>
            <v-flex  xs12 sm8>
              <div class="card-title-more">
                Want to know more about our services?
              </div>
                  <v-btn width="200px" height="70px"  class="btn" :color="colors">Explore</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div class="headOne  text-center">
              Testim<span class="headTwo">onials</span>
            <div class="text-center pt-3">
              <img src="@/assets/stroke.png" alt="">
            </div>
            </div>
            <div class="my-16">
                <Carousel
              :autoplay="true"
              :loop="true"
              :perPage="1"
              mouseDrag
              :navigationEnabled="true"
              navigationNextLabel=">"
              :paginationColor="colors"
              :paginationSize="20"
              paginationActiveColor="#F2A839"
            >
              <Slide v-for="(doc, index) in testimonials" :key="index">
                <v-card
                tile
                class="carousel-card"
                >
                 <v-container class="">
                   <v-layout row wrap>
                     <v-flex xs12 sm6 >
                        <v-img class="img"  :src="require('@/assets/' + doc.image)"></v-img>
                     </v-flex>
                     <v-flex xs12 sm6 >
                       <v-card-text class="my-16">
                         <v-row>
                           <v-col cols="2">
                             <v-img contain src="@/assets/upper quotation.png"></v-img>
                           </v-col>
                           <v-col cols="10">
                             <p class="carousel-card-text">{{doc.testimonial}}
                         </p>
                           </v-col>
                         </v-row>
                         <v-row>
                           <v-col cols="10">
                          <div class="cards-title">
                           {{doc.name}}
                         </div>
                         <div class="cards-text">{{ doc.info }}</div>
                           </v-col>
                           <v-col cols="2">
                             <v-img src="@/assets/lower quotation.png"></v-img>
                           </v-col>
                         </v-row>
                       </v-card-text>
                     </v-flex>
                   </v-layout>
                  </v-container>
                </v-card>
              </Slide>
            </Carousel>
            </div>
     <Foot /> 
  </div>
</template>

<script>
import Foot from '@/components/footer'
import { Carousel, Slide } from 'vue-carousel';

export default {
 components: {
   Foot,
   Carousel,
    Slide

 },
 data:() => ({
   colors: '#9B4C0E',
   heights: '40px',
   widths: '130px',
   testimonials: [
     {image: 'testimony.25c72e7a.svg', testimonial: 'They are proficient in designing world class website to suit your buisness and i love the taste and feel of my website', name: 'John Tee', info: 'CEO, Frit Publications'},
     {image: 'testimony.25c72e7a.svg', testimonial: 'They are proficient in designing world class website to suit your buisness and i love the taste and feel of my website', name: 'John Tee', info: 'CEO, Frit Publications'},
     {image: 'testimony.25c72e7a.svg', testimonial: 'They are proficient in designing world class website to suit your buisness and i love the taste and feel of my website', name: 'John Tee', info: 'CEO, Frit Publications'}
   ]
 })
}
</script>

<style scoped>
.homeimg{
  height: 100vh;
}
.amet{
  font-size: 45px;
  font-weight: 500;
  font-family: montserrat, sans-serif;
  color: rgba(255, 255, 255, 1);
 margin-top: 3em;
 margin-bottom: 0.5em;
}
.amet-cont{
  font-family: montserrat, sans-serif;
  font-weight: 300;
  font-size: 23px;
  line-height: 27px;
  color: rgba(255, 255, 255, 1);

}
.big-btn{
  width: 180px;
height: 50px;
background: #9B4C0E;
border-radius: 19px;
color: white;
text-transform: lowercase;
margin: 3em 0;
font-family: montserrat, sans-serif;
}
.v-image.images{
  width:457px;
   height:288px;
  position: relative;
 left: 9em;
top: 15em;
border-radius: 35px;
}
.headOne{
font-family: montserrat;
font-style: normal;
font-weight: 500;
font-size: 45px;
line-height: 27px;
color: #000000;
}
.headOne.move{
  position: relative;
  bottom: -120px;
}
.headTwo{
  color: #F9B620;
}
.v-card.ourstory-img{
  width: 344px;
height: 316px;
filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.2));
/* box-shadow: 0px 7px 10px rgba(178, 114, 16, 0.3); */
border-radius: 28px;
margin-top: 3em;

}
.story-cont{
  font-family: Poppins;
font-style: normal;
font-weight: 200;
font-size: 20px;
color: #000000;
padding-top: 3em;
}
.v-card.mission-vision{
  width: 355px;
height: 180px;
background: #FFFFFF;
box-shadow: 0px 7px 10px rgba(178, 114, 16, 0.3);
border-radius: 27px;
margin: 5em auto;
}
.mission-vision-content{
  font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 27px;
color: #000000;
}
.mission{
  text-align: right;
}
.mission-vision-head{
  font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 30px;
color: rgba(242, 168, 57, 1);
margin-top: 0.5em;
margin-bottom: 1em;
}
.bg{
  min-height: 444px;
  background: linear-gradient(110.26deg, #F2A839 40.75%, #F4743B 108.81%);
 margin-top: 10em;
 }
.v-card.card-left{
  width: 251px;
height: 274px;
border-radius: 27px;
transform: rotate(-18.09deg);
margin-left: 5em;
box-shadow: 8px 8px #9B4C0E;

}
.v-card.card-right{
  width: 251px;
height: 274px;
border-radius: 27px;
transform: rotate(30deg);
margin: auto;
box-shadow: 8px 8px #9B4C0E;
}
.card-title{
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 27px;
margin-top: 3em;
margin-bottom: 1em;
color: white;
}
.card-title-two{
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 27px;
margin-top: 3em;
margin-bottom: 1em;
color: rgb(0, 0, 0);
}
.card-title-more{
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 27px;
margin-top: 7em;
margin-bottom: 1em;
color: rgb(0, 0, 0);
}
.card-content{
  font-family: Poppins;
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;
padding-right: 1em;
}
.card-content-two{
  font-family: Poppins;
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 30px;
color: rgb(0, 0, 0);
padding-right: 1em;
}
.small-btn{
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.15);
border-radius: 12px;
margin-right: 4em;
color: white;
text-transform: lowercase;
font-family: poppins;
font-weight: 300;
}
.btn{
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.15);
border-radius: 12px;
font-family: poppins;
color: white;
font-size: 20px;
}
.VueCarousel-slide{
  min-height: 400px;
}
.v-card.carousel-card{
  width: 1300px;
  height: 350px;
  margin: auto;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.1);
}
.v-image.img{
  margin: 2em auto;
  width: 389px;
    height:266px;
}
.carousel-card-text{
  font-family: Poppins;
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 30px;
}
.cards-title{
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
color: #F2A839;
}
.cards-text{
  font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 30px;
}
@media screen and (max-width: 800px) {
  .homeimg{
  height: 60vh;
}
.amet{
  font-size: 30px;
  padding-left: 2em;
}
.amet-cont{
  font-size: 15px;
  padding-left: 3em;
}
.big-btn{
  margin-left: 3em;
}
.v-image.images{
    width:350px;
   height:250px;
   left: 1em;
}
  .v-card.ourstory-img{
    width: 290px;
    height: 100px;
    margin: 3em auto;
  }
  .story-cont{
    font-size: 1em;
    padding-right: 1em;
    margin-bottom: 6em;
  }
  .v-card.card-left{
    width: 200px;
    height: 220px;
  }
   .v-card.card-right{
    width: 200px;
    height: 220px;
  }
  .card-title{
    font-size: 1.4em;
  }
  .card-content{
    font-size: 0.9em;
    padding-bottom: 2em;
  }
  .card-content-two{
    font-size: 0.9em;
    padding-left: 2em;
    padding-bottom: 2em;

  }
   .card-title-two, .card-title-more{
     padding-left: 1em;
    font-size: 1.4em;
  }
  .btn{
    margin-left: 2em;
  }
  .v-card.carousel-card{
    width: 90%;
  }
  .v-image.img{
    width: 300px;
  }
  .carousel-card-text{
    font-size: 1em;
  }
  .cards-title{
    font-size: 1.3em;
  }
  .cards-text{
    font-size: 1em;
  }
  
}

@media screen and (max-width: 600px) {
  .homeimg{
  height: 102vh;
}
.v-image.images{
  top: 2em;
  width: 70%;
  margin: auto;
}
.amet{
 margin-top: 1em;
 padding-left: 1em;

}
.amet-cont{
 padding-left: 1em;

}
.big-btn{
 margin-left: 1em; /* margin: 3em 6.5em; */
}
  .headOne{
    font-size: 1.8em;
  }
 .v-card.ourstory-img{
    width: 290px;
    height: 100px;
    margin: auto;
    margin-bottom: 15em;
    margin-top: 5em;
  }
  .story-cont,.card-title,.card-content,.card-content-two,.card-title-two{
    text-align: center;
  }
  .story-cont{
    font-size: 0.8em;
    padding:  1em;
    margin-bottom: 0;
    margin-top: 2em;
  }
  .v-card.mission-vision{
    width: 85%;
  }
  .mission-vision-head{
    font-size: 1.5em;
    margin-top: 1em;
  }
  .mission-vision-content{
    font-size: 1.2em;
  }
  .card-title,.card-title-two{
    font-size: 1.2em;
  }
  .card-content{
    font-size: 1em;
    line-height: 1.8em;
    padding: 1em;
    font-weight: 200;
  }
  .card-content-two{
    font-size: 1em;
    line-height: 1.8em;
    padding: 1em;
    font-weight: 200;
  }
  .v-card.carousel-card{
    width: 90%;
    height: auto;
  }
  .small-btn{
    margin-left: 4em;
  }
  }
</style>