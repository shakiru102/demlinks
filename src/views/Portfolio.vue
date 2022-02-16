<template>
    <div>
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
                            <p class="content mt-5">
                              We're a digital Agency passionate about developing responsive and elegant websites, brands and digital products
                            </p>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm6 >
                        <v-img src="@/assets/draw.png" style="height:509px;"></v-img>
                    </v-flex>
                </v-layout>
              </v-container>
        </div>
        <div class="meet_team">
       <div class="team_heads text-center">
         <div class="head_meet_teams">Our <span class="TeamStyle" >Portfolio</span></div>
         <img class="imgline" src="@/assets/stroke.png" alt="">
       </div>
      
    </div>

        <Foot/>
    </div>
</template>

<script>
import Foot from '@/components/footer'
export default {
    components:{
        Foot
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
</style>
