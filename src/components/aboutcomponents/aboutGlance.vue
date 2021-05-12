<template>
  <div>
      <div class="meet_team">
       <div class="team_heads text-center">
         <div class="head_meet_teams">Demlinks at a <span class="TeamStyle" >Glance</span></div>
         <img src="@/assets/stroke.png" alt="">
            <div class="contents">
                 <v-container class="text-left">
                    <v-row>
                      <v-col cols="6">
                          <v-row class="g-right">
                              <v-col cols="3" >
                                  <v-img class="imgs" src="@/assets/fluent_building-bank-16-filled.png"></v-img>
                              </v-col>
                              <v-col cols="9">
                                  <div class="galance-header">Founded in 2021</div>
                                  <div class="galance-content">We are a start-up focused on developing your brand</div>
                              </v-col>
                          </v-row>
                      </v-col>
                       <v-col cols="6">
                          <v-row class="g-bottom">
                              <v-col cols="3" >
                                  <v-img class="imgs" src="@/assets/ri_team-fill.png"></v-img>
                              </v-col>
                              <v-col cols="9">
                                  <div class="galance-header">Team of 8 people</div>
                                  <div class="galance-content">We are full time and ready to grow your buisness.</div>
                              </v-col>
                          </v-row>
                      </v-col>
                       <v-col cols="6">
                          <v-row class="g-top">
                              <v-col cols="3" >
                                  <v-img class="imgs" src="@/assets/ant-design_safety-certificate-filled.png"></v-img>
                              </v-col>
                              <v-col cols="9">
                                  <div class="galance-header">Certified Personnels</div>
                                  <div class="galance-content">our team consist of developers and marketers certified by google.</div>
                              </v-col>
                          </v-row>
                      </v-col>
                       <v-col cols="6">
                          <v-row class="g-left">
                              <v-col cols="3" >
                                  <v-img class="imgs"  src="@/assets/el_idea-alt.png"></v-img>
                              </v-col>
                              <v-col cols="9">
                                  <div class="galance-header">Our Goal</div>
                                  <div class="galance-content">All that matters is achieving the best result.</div>
                              </v-col>
                          </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.meet_team{
    min-height: 100vh;
    background: rgba(252, 151, 0, 0.2);
}
.team_heads{
  padding-top: 5em;
}
.team_heads > .head_meet_teams {
   font-family: montserrat, sans-serif;
   font-size: 2.5em;
   font-weight: 500;
}
.TeamStyle{
  color: #f2a839;
}
.contents{
    width: 50%;
    margin: 3em auto;
    
}
.galance-header{
    font-family: montserrat, sans-serif;
    font-weight: 600;
    font-size: 1.3em;
}
.galance-content{
    font-family: montserrat, sans-serif;
    font-weight: 500;
    font-size: 0.9em;
    padding-top: 0.5em;
}
.g-right,.g-left,.g-top,.g-bottom{
    padding-top: 2.5em;
    padding-bottom: 2.5em;
}
.g-top{
    border-top: 1px solid rgba(0, 0, 0, .1)
}
.g-left{
    border-left: 1px solid rgba(0, 0, 0, .1)
}
.g-right{
    border-right: 1px solid rgba(0, 0, 0, .1)
}
.g-bottom{
    border-bottom: 1px solid rgba(0, 0, 0, .1)
}
@media screen and (max-width: 800px) {
    .contents{
        width: 80%;
    }
    .meet_team{
    min-height: 65vh;
}
}
@media screen and (max-width: 600px) {
    .team_heads > .head_meet_teams{
    font-size: 1.8em;
  }
    .meet_team{
    min-height: 75vh;
}
    .contents{
        width: 100%;
    }
    .galance-header{
        font-size: 0.7em;
    }
    .galance-content{
        font-size: 0.4em;
    }
    .g-right,.g-left,.g-top,.g-bottom{
    padding-top: 1.5em;
    padding-bottom: 1.5em;
}
    
}
/* .v-image.imgs{
    position: relative;
    top: -2em;
} */
</style>