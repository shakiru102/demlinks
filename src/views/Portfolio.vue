<template>
    <div>
        <div class="aboutImage">
        <div class="overlayParent">
             <v-container class="">
                <v-layout row wrap>
                    <v-flex xs12 sm6>
                        <div class="about_demlinks ">
                            PORTFOLIO
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
         <div class="head_meet_teams">Our <span class="TeamStyle" >Portfolio</span></div>
         <img class="imgline" src="@/assets/stroke.png" alt="">
       </div>
      
    </div>

    <div class="port">
    <v-container 
    >
    <v-layout row wrap justify-space-around>
    <v-flex md2 v-for="(doc, index) in portfolio" :key="index" class="mobil">
             <v-img class="img"  :src="require('@/assets/' + doc.image)" style="width:300px;height:300px; margin-left:10px;"></v-img>
                     
                            <v-card-title >{{doc.head}}</v-card-title >
                            
                            <v-card-text>
                            
                            <p style= "width: 350px;" class="test">{{doc.test}}</p>
                            </v-card-text>
    
    </v-flex>
  
    </v-layout>
    </v-container>
    
    </div>

        <Foot/>
    </div>
</template>

<script>
import Foot from '@/components/footer'
export default {
    components:{
        Foot
    },
    data:() => ({
        portfolio: [
            {image:'Rectangle.png', head: 'Open Test CBT Software',
             test: 'We are proficient in designing world class website to suit your business and taste. we also manage your website to beome the most displayed when anythng related to what you do is being searched for.'},
            {image:'Rectangle.png', head: 'Shopmeco',
             test: 'We are proficient in designing world class website to suit your business and taste. we also manage your website to beome the most displayed when anythng related to what you do is being searched for.'},
             {image:'Rectangle.png', head: 'High School Manager',
             test: 'We are proficient in designing world class website to suit your business and taste. we also manage your website to beome the most displayed when anythng related to what you do is being searched for.'},
   ]
    })
}
</script>


<style scoped>
.aboutImage{
  height: 70vh;
    background-image: url('../assets/footer.png');
  background-position: center;
  background-size: contain;
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
.content{
    font-size: 1.5em;
    font-weight: 300;
    color: #FFFFFF;

text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.head{
    font-size: 2.9em;
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
.v-image.img{
  margin: 2em;
  width: 389px;
    height:366px;
    border-radius: 37px;
}

@media screen and (max-width: 800px) {
    .aboutImage{
    height: 110vh;
      background-image: url('../assets/other.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  .mobil{
      
      margin-left: 30px;
  }
    }
</style>
