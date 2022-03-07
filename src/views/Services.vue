<template>
    <div>
    
    <div class="aboutImage">
        <div class="overlayParent">
             <v-container class="">
                <v-layout row wrap>
                    <v-flex xs12 sm6>
                        <div class="about_demlinks ">
                            OUR SERVICES
                        </div>
                        <div class="result_driven">
                            <div class="head">
                               We Build, We Create!
                            </div>
                            <p class="content mt-16">
                              We're a digital Agency passionate about developing responsive and elegant websites, brands and digital products
                            </p>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm6 >
                        <v-img src="@/assets/draw.png" style="height:709px; " class="mage"></v-img>
                    </v-flex>
                </v-layout>
              </v-container>
        </div>
    </div>

     <div class="meet_team">
       <div class="team_heads text-center">
         <div class="head_meet_teams">Our <span class="TeamStyle" >Offers</span></div>
         <img class="imgline" src="@/assets/stroke.png" alt="">
       </div>
      
    </div>

    <div class="car">
         

            <div class="my-16">
                <Carousel
              :autoplay="true"
              :loop="true"
              :perPage="1"
              mouseDrag
              :navigationEnabled="true"
              navigationNextLabel=""
              :paginationColor="colors"
              :paginationSize="20"
              paginationActiveColor="#F2A839"
            >
              <Slide v-for="(doc, index) in testimonials" :key="index">
                <v-card
                tile
                class="carousel-card"
                flat
                
                >
                 <v-container class="">
                   <v-layout row wrap>
                     <v-flex xs12 sm5 >
                        <v-img class="img"  :src="require('@/assets/' + doc.image)"></v-img>
                     </v-flex>
                     <v-flex xs12 sm7 >
                       <v-card-text class="testimonal-text">
                        <v-container>
                            <v-layout col wrap>
                            <v-flex>
                            <h1>{{doc.head}}</h1>
                            </v-flex>
                            <v-flex>
                            <p>{{doc.testimonial}}</p>
                            </v-flex>
                            <v-flex>
                            <p style="margin-top:-40px;">{{doc.testimonial}}</p>
                            </v-flex>

                            </v-layout>
                        
                        </v-container>
                       </v-card-text>
                     </v-flex>
                   </v-layout>
                  </v-container>
                </v-card>
              </Slide>
            </Carousel>
            </div>
    </div>
    <div class="caro">


     <v-carousel
    cycle
    height="100vh"
    hide-delimiter-background
    show-arrows-on-hover


  >
    <v-carousel-item v-for="(doc, index) in testimonials" :key="index"
    >
     <v-card light flat class="caro ">
     
                            
                       <div>
                         <v-img class="img"  :src="require('@/assets/' + doc.image)"></v-img>
                       </div>
                     
                            <v-card-title style="align-item: center;">{{doc.head}}</v-card-title >
                            
                            <v-card-text>
                            <p>{{doc.testimonial}}</p>
                            
                            <p style="display:none;">{{doc.testimonial}}</p>
                            </v-card-text>
                           
     </v-card>
     
    </v-carousel-item>
  </v-carousel>
    </div>
        <Foot/>
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
   reveal: true,
   colors: '#9B4C0E',
   heights: '40px',
   widths: '130px',
   testimonials: [
     {image: 'Rectangle.png', head: 'Web design and Development', testimonial: 'We are proficient in designing world class website to suit your business and taste. we also manage your website to beome the most displayed when anythng related to what you do is being searched for.', name: 'Babalola Abisola', info: 'CEO, ChopBeta'},
     {image: 'Rectangle.png', head: 'Co-working space', testimonial: 'We are proficient in designing world class website to suit your business and taste. we also manage your website to beome the most displayed when anythng related to what you do is being searched for.', name: 'Babalola Abisola', info: 'CEO, ChopBeta'},
     {image: 'Rectangle.png', head: 'Software development', testimonial: 'We are proficient in designing world class website to suit your business and taste. we also manage your website to beome the most displayed when anythng related to what you do is being searched for.', name: 'Babalola Abisola', info: 'CEO, ChopBeta'},
     {image: 'Rectangle.png', head: 'UI/UX design', testimonial: 'We are proficient in designing world class website to suit your business and taste. we also manage your website to beome the most displayed when anythng related to what you do is being searched for.', name: 'Babalola Abisola', info: 'CEO, ChopBeta'},
     {image: 'Rectangle.png', head: 'Graphics design', testimonial: 'We are proficient in designing world class website to suit your business and taste. we also manage your website to beome the most displayed when anythng related to what you do is being searched for.', name: 'Babalola Abisola', info: 'CEO, ChopBeta'},
     {image: 'Rectangle.png', head: 'Business branding', testimonial: 'We are proficient in designing world class website to suit your business and taste. we also manage your website to beome the most displayed when anythng related to what you do is being searched for.', name: 'Babalola Abisola', info: 'CEO, ChopBeta'},
     {image: 'Rectangle.png', head: 'Internship and training', testimonial: 'We are proficient in designing world class website to suit your business and taste. we also manage your website to beome the most displayed when anythng related to what you do is being searched for.', name: 'Babalola Abisola', info: 'CEO, ChopBeta'},
      {image: 'Rectangle.png', head: 'General I.T consultancy', testimonial: 'We are proficient in designing world class website to suit your business and taste. we also manage your website to beome the most displayed when anythng related to what you do is being searched for.', name: 'Babalola Abisola', info: 'CEO, ChopBeta'},
   
   ],
   
     
 }),
    
  }

</script>


<style scoped>
.aboutImage{
  height: 70vh;
    background-image: url('../assets/footer.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.overlayParent{
    background: linear-gradient( to right, #f2a839b4 , #f4733b7c);
    color: white;
    height: 100%;
    font-family: montserrat, sans-serif;
    padding-top: 4em;
}
.about_demlinks{
    font-size: 1.2em;
    text-shadow: 0px 3px 5px rgba(19, 18, 18, 0.295);
    margin-top: 4em;
}
.result_driven{
    margin-top: 4em;

}
.head{
    font-size: 2.9em;
}
.content{
    font-size: 1.2em;
    font-weight: 300;
    color: #FFFFFF;

text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}



.team_heads{
  margin-top: 8em;
   margin-bottom: 5em;

}
.team_heads > .head_meet_teams {
   font-family: montserrat, sans-serif;
   font-size: 2.5em;
   font-weight: 500;
}
.TeamStyle{
  color: #f2a839;
}
.car{
    margin-bottom: 8em;
    margin-left: 4em;
    margin-right: 4em;
    display: block;
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
  margin: 2em;
  width: 489px;
    height:366px;
    border-radius: 37px;
}
    .car h1{
        padding-top: 10px;
        height: 27px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 27px;
        margin-bottom: 2em;

    }

    p{
        
width: 723px;
height: 150px;
font-family: Poppins;
font-style: normal;
font-weight: 275;
font-size: 20px;
line-height: 30px;
color: #454040;
    }

.caro {
    display: none;
}


    @media screen and (max-width: 800px) {


    .aboutImage{
    height: 110vh;
      background-image: url('../assets/other.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
.v-image.img{
        width: 300px;
        height: 300px;
        margin-top: 40px;
    }
    .test{
        width: 200px;
    }
    .overlayParent{
    padding-left: 1em;
    height: 94vh;
  }
  .about_demlinks{
    font-size: 1em;
  }
  .result_driven{
    margin-top: 1em;
  }
  .result_driven .head{
    font-size: 1.6em;
  }
   .result_driven .content{
    font-size: 1em;
  }

.car{
    margin-top: 12em;
    display: none;
}
.caro{
    display: block;
}
 .caro p{
        
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 27px;
        width: 100%;
        
        color: #888484;

    }
    .caro{
        padding: 0 10px;
        text-align: center;
    }
    .head{
    font-size: 1.9em;
}
.about_demlinks{
    font-size: 1.2em;
    text-shadow: 0px 3px 5px rgba(19, 18, 18, 0.295);
    margin-top: 4em;
}
.content{
    font-size: 1.2em;
    font-weight: 300;
    width: 400px;   
}
.team_heads > .head_meet_teams {
   font-family: montserrat, sans-serif;
   font-size: 2.5em;
   font-weight: 500;
}
.aboutImage{
  height: 120vh;
    background-image: url('../assets/footer.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

}
</style>

