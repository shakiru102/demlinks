<template>
  <div>
    <div class="aboutImage">
        <div class="overlayParent">
             <v-container class="">
                <v-layout row wrap>
                    <v-flex xs12 sm6>
                        <div class="about_demlinks ">
                            ABOUT DEMLINKS
                        </div>
                        <div class="result_driven">
                            <div class="head">
                               We Build, We Create!
                            </div>
                            <p class="content mt-5">
                              We're a digital Agency passionate about developing responsive and elegant websites, brands and digital products
                            </p>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-img src="@/assets/undraw_personal_website_weap 1.png"></v-img>
                    </v-flex>
                </v-layout>
              </v-container>
        </div>
    </div>
    <div class="meet_team">
       <div class="team_heads text-center">
         <div class="head_meet_teams">Meet the <span class="TeamStyle" >Team</span></div>
         <img class="imgline" src="@/assets/stroke.png" alt="">
       </div>
       <carousel-3d 
       class="adjustable"
       :adjustableHeight="true"
        :autoplay="true">
          <slide v-for="(doc, index) in images" :key="index" :index="index">
              <img  :src="require('@/assets/' + doc.img)" class="image" alt="">
              <div class="imageContents text-center">
                <div class="avatar_name">{{doc.name}}</div>
                <div class="avatar_skills">{{ doc.skills }}</div>
              </div>
          </slide>
     </carousel-3d>
    </div>
     <AboutTeam />
     <AboutProcess />
    <AboutGlance />
     <AboutFooter /> 
  </div>
</template>

<script>
import { bus } from '../main'
 import { Carousel3d, Slide } from 'vue-carousel-3d';
 import AboutTeam from "@/components/aboutcomponents/aboutTeam"
 import AboutGlance from "@/components/aboutcomponents/aboutGlance"
 import AboutFooter from "@/components/aboutcomponents/aboutfooter"
 import AboutProcess from "@/components/aboutcomponents/aboutprocess"
 

export default {
   components: {
    Carousel3d,
    Slide,
    AboutTeam,
    AboutGlance,
    AboutFooter,
    AboutProcess
  },
    data: () => ({
        model: [1, 2, 3, 4, 5, 6],
        compName: 'About Us',
        images: [
          { name:'Shittu Moshood', skills:'Frontend Developer', img:'IMG-20210828-WA0001.jpg'},
          { name:'Adebisi Abdullahi', skills:'UI/UX Designer', img:'IMG-20210828-WA0002.jpg'},
          { name:'Jack Moris', skills:'Team Lead, Tech and Design', img:'blond-man-happy-expression_1194-2873.jpg'},
          { name:'Oladipupo Oyinkansola', skills:'Backend Developer', img:'IMG-20210828-WA0000.jpg'},
          { name:' Owojori Habbibat', skills:'UI/UX Designer', img: 'IMG-20210827-WA0004.jpg'}]
    }),
    mounted () {
     bus.$emit('changeClass', this.compName)
 }

}
</script>

<style scoped>
.aboutImage{
  height: 80vh;
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
}



.carousel-3d-slide{
  border: none;
  border-radius: 30px;
  background: white;
}
.imageContents > .avatar_name{
  font-weight: bold;
  font-size: 1em;
  color: #f2a839;
}
.carousel-3d-slide > img{
  width: 100%;
  height: 80%;
  opacity: 0.7;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0px 3px 10px  rgba(19, 18, 18, 0.404);

}
.carousel-3d-slide > .imageContents{
  opacity: 0;
}

.carousel-3d-slide.current > img{
  opacity: 1;

}
.carousel-3d-slide.current > .imageContents{
  opacity: 1;
  font-family: montserrat, sans-serif;
}
.team_heads{
  margin-top: 10em;
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
@media screen and (max-width: 800px) {
 .aboutImage{
    height: 50vh;
  }
  .overlayParent{
    padding-left: 1.5em;
  }
  .result_driven{
    margin-top: 1em;
  }
  .carousel-3d-container{
  min-height: 83vh ;
}
.carousel-3d-container{
  min-height: 100% ;
}
  
}
@media screen and (max-width: 600px) {
  
  .aboutImage{
    height: 100vh;
      background-image: url('../assets/other.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  .team_heads > .head_meet_teams{
    font-size: 1.8em;
  }
  .carousel-3d-container{
  min-height: 100% ;
}
  .carousel-3d-slide{
    max-width: 200px;
    margin: auto 5em;

  }
  .carousel-3d-slide > img{
  height: 70%;

  }

  .imageContents > .avatar_name{
    font-size: 1em;
  }
  .imageContents > .avatar_skills{
    font-size: 0.8em;
  }
  .imgline{
  width: 99px;
  position: relative;
  top: -0.5em;
}
}

</style>