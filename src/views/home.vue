<template>
  <div>
    <div v-if="reveal" class="homeimg">
      <div>
     <v-container class="">
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <div class="amet">
              We Build, We Create!
            </div>
            <div class="amet-cont">
              Demlinks Technologies advocates for smart living, security consciousness, and help individual and company to drive business to peak of success...
            </div>
                <v-btn width="180px" height="50px"  class="big-btn hidden-xs-only" color="#9B4C0E">select a service</v-btn>
                 <v-btn width="140px" height="38.89px"  class="big-btn  hidden-sm-and-up" color="#9B4C0E">select a service</v-btn>
            </v-flex>
          <v-flex xs12 sm6>
            <v-img  class="images"
            :src="require('@/assets/mind.png')" ></v-img>
          </v-flex>
          <v-flex xs12 class="hidden-sm-and-up text-center" >
            <a href="" v-scroll-to="'#ourstory'">
            <v-img  class="imgbtn" height="30px" width="26.5px"  contain src="@/assets/scroll.png"></v-img>
            </a>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    </div>
    <!-- </div> -->
    <div id="ourstory" class="others" >
     <v-container class="mt-16">
        <v-layout row wrap>
           <v-flex xs12>
            <div  class="headOne move text-center ">
              Our <span class="headTwo">Story</span>
            </div>
            <div class="text-center">
              <img  class="imgline" src="@/assets/stroke.png" alt="">
            </div>
          </v-flex>
          <v-flex xs12 sm6>
            <!-- <v-card 
             class="ourstory-img" > -->
              <v-img  src="@/assets/isolation.png" class="ourstory-img"></v-img>
            <!-- </v-card> -->
          </v-flex>
          <v-flex xs12 sm6>
            <div class="story-cont">
           We are a team of great minds dedicated to serving our consumer with an excellent delivery service thus greatly improving our client's revenue and engagements.
           <div class="pt-10">
           We combine various skills to build and implement projects to suite clients wants and train interns to be best in their chosen career.
           </div>
            </div>
          </v-flex>
          <v-flex xs12 >
            <div class="mission-vision-cont">
             <v-container class="">
               <v-layout row wrap>
                    <v-flex xs12 sm6>
            <v-card class="mission-vision" >
              <v-card-text>
                <div class="mission-vision-head">
                  Mission
                </div>
                <div class="mission-vision-content">
                 To create a society for individuals with great Mindset and make there dreams a reality.
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
            </div>
          </v-flex>
        </v-layout>
      </v-container>
        <div id="services" class="headOne move text-center">
              What <span class="headTwo">We Offer</span>
            <div class="text-center ">
              <img class="imgline" src="@/assets/stroke.png" alt="">
            </div>
            </div>

      <div class="bg">
         <v-container class="">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-card class="card-left mt-16">
                  <v-img src="@/assets/group.png" class="mobile"></v-img>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6>
                <div class="card-title">Web Design & Development</div>
                <div class="card-content">
                  We are profient in designing world class website to suit your business and taste. we also manage your website to become the most displayed when anything related to what you doing is being searched for.
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
                  We're a digital Agency passionate about developing responsive and elegant websites, brands and digital products 
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
                <div class="card-title">Home Automation</div>
                <div class="card-content">
                  We offer proficient automation and software solutions for everyone who desires innovation, luxury, convenient and full-fledge support for his dormitory/company.
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
                  We are expert in providing remote security to anywhere depending on clients choice using sophisticated and updated technology.
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
                  <v-btn width="200px" height="70px"  class="btn hidden-xs-only" :color="colors">Explore</v-btn>
                  <v-btn width="130px" height="40px" class="btn hidden-sm-and-up" :color="colors">Explore</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div class="headOne  text-center">
              Testim<span class="headTwo">onials</span>
            <div class="text-center">
              <img class="imgline" src="@/assets/stroke.png" alt="">
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
                     <v-flex xs12 sm5 >
                        <v-img class="img"  :src="require('@/assets/' + doc.image)"></v-img>
                     </v-flex>
                     <v-flex xs12 sm7 >
                       <v-card-text class="testimonal-text">
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
  </div>
</template>

<script>
import Foot from '@/components/footer'
import { Carousel, Slide } from 'vue-carousel';
import { bus } from '../main'
import { gsap } from 'gsap'


export default {
 components: {
   Foot,
   Carousel,
    Slide,

 },
 data:() => ({
   reveal: true,
   colors: '#9B4C0E',
   heights: '40px',
   widths: '130px',
   testimonials: [
     {image: 'testimony.25c72e7a.svg', testimonial: 'They are proficient in designing world class website to suit your buisness and i love the taste and feel of my website', name: 'Babalola Abisola', info: 'CEO, ChopBeta'},
     {image: 'testimony 2.png', testimonial: 'They are proficient in designing world class website to suit your buisness and i love the taste and feel of my website', name: 'Akanmu Samad', info: 'CEO, SamadVisuals'},
     {image: 'testimony 1.png', testimonial: 'They are proficient in designing world class website to suit your buisness and i love the taste and feel of my website', name: 'Salaudeen Tawab', info: 'CEO, Frit Publications'}
   ],
   compName: 'Home'
 }),
 mounted () {
     bus.$emit('changeClass', this.compName)
     gsap.to('.imgbtn', { y: -10,autoAlpha: 0.4 , repeat: -1, yoyo: true, ease:'power', duration: 0.7 })
     
 },
}
</script>

<style scoped>
.v-image.imgbtn{
  position: relative;
  top: 5em;
  margin:  auto;
}
.others{
  overflow: hidden;
}
.homeimg{
  height: 100vh;
  transition: 0.8s ease-in-out all;
  background: url('../assets/hero div.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


}

.amet{
  font-size: 45px;
  font-weight: 500;
  font-family: montserrat, sans-serif;
  color: rgba(255, 255, 255, 1);
 margin-top: 4em;
 margin-bottom: 0.5em;
}
.amet-cont{
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 23px;
  line-height: 35px;
  color: rgba(255, 255, 255, 1);

}
.big-btn{
  width: 180px;
height: 50px;
background: #9B4C0E;
border-radius: 19px;
color: white;
text-transform: lowercase;
margin: 4em 0;
font-family: montserrat, sans-serif;
}
.v-image.images{
  width:818px;
   height:613px;
  position: relative;
 left: 7em;
top: 4em;
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
  margin-bottom: 10px;
}
.headTwo{
  color: #F9B620;
}
.ourstory-img{
  width: 407px;
height: 331px;
filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.2));
/* box-shadow: 0px 7px 10px rgba(178, 114, 16, 0.3); */
border-radius: 28px;
margin-top: 3em;
margin-left: 4em;

}
.story-cont{
  font-family: Poppins;
font-style: normal;
font-weight: 200;
font-size: 20px;
color: #000000;
padding-top: 4em;
margin-left: -4em;
padding-right: 3em;
}
.v-card.mission-vision{
  width: 355px;
height: 180px;
padding-bottom: 1em;
background: #FFFFFF;
box-shadow: 0px 7px 10px rgba(178, 114, 16, 0.3);
border-radius: 27px;
margin: 5em auto;
}
.mission-vision-content{
  font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 17px;
line-height: 27px;
color: #000000;
}
.mission-vision-cont{
  width: 75%;
 /* border: solid 2px black; */
 margin: 0 auto 4em;
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
 margin-top: 4em;
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
margin-top: 2em;
color: white;
text-transform: initial;
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
  width: 90%;
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
.testimonal-text{
  margin: 5em 0 ;
  padding-right: 4em;
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
  width: 100%;
  height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: white;
  background-image: url('../assets/Vector 1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
}

.others{
  overflow: hidden;
  min-height: 100vh;
  position: relative;
  z-index: 2;
  transition: 0.5s ease-in-out all;
  background: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.imgline{
  width: 99px;
  position: relative;
  top: -0.5em;
}
.v-image.images{
  top: 5px;
  width: 500px;
height: 300px;
left: -2.5px;
  margin: auto;
}
.amet{
 margin-top: 3.5em;
 padding-left: 20px;
font-size: 25px;
}
.amet-cont{
 padding-left: 20px;
 font-size: 13px;

}
.big-btn{
 margin-left: 1em; 
 margin-top: 2em; 
 font-size: 12px;
}
  .headOne{
    font-size: 1.8em;
  }
 .v-card.ourstory-img{
    width: 307px;
    height: 202px;
    margin: auto;
    margin-bottom: 15em;
    margin-top: 58px;
    box-shadow: 0px 0px 0px white;
  }
  .story-cont,.card-title,.card-content,.card-content-two,.card-title-two{
    text-align: center;
  }
  .story-cont{
    font-weight: 260;
    font-size: 0.9em;
    padding:  1em 2em;
    margin: -170px 0 0;
  }
  .v-card.mission-vision{
    width: 250px;
  min-height: 132px;
  margin: 2em auto;
  padding: 0;
  }
  .mission-vision-head{
    font-size: 18px;
  }
  .mission-vision-content{
    font-weight: 300;
    font-size: 12px;
    
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
  .VueCarousel-slide{
  height: 460px;
}
  .v-card.carousel-card{
    width: 349px;
    height: 450px;
  }
  .small-btn{
    margin-left: 4em;
  }
  .v-image.img{
    width: 253px;
  height: 173px;
  margin: 0 ;
  }
  .testimonal-text{
    margin: 0;
  }
  .btn{
    font-size: 15px;
    margin-bottom: 2em;
  }
  .v-card.card-left{
    width: 189.15px;
  height: 202.79px;
  }
  .v-card.card-right{
    width: 176.15px;
  height: 187.76px;
  }
 .ourstory-img{
    width: 300px;
    margin-right: 20px;
    margin-bottom: 200px;
  }
 

  }
</style>