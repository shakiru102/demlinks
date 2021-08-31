<template>
  <div>
      <div class="process">
           <v-container class="">
              <v-layout row wrap>
                  <v-flex xs12 >
                     <div class="team_heads text-center">
                        <div class="head_meet_teams">Our <span class="TeamStyle" >Process</span></div>
                        <img class="imgline" src="@/assets/stroke.png" alt="">
                        <div class="texts mt-7" >We take ideas and change them to products that generate revenue and expand your brand.</div>
                     </div>
                  </v-flex>
                  <v-flex v-for="(doc, index) in process" :key="index" xs6 md3 class="">
                      <div class="processCard">
                          <span class="icontitle">
                              <v-img contain width="33.59px" height="33.59px" :src="require('@/assets/' + doc.img)"></v-img>
                          </span>
                          <div class="processInner">
                              {{ doc.projec_init}}
                          </div>
                          <ul>
                              <li v-for="(item, index) in doc.item" :key="index" class="list">{{ item }}</li>
                          </ul>
                      </div>
                  </v-flex>
              </v-layout>
            </v-container>
      </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        process: [
            { img: 'ant-design_project-filled.png', projec_init: 'Project Initiation', item:['Requirement gathering', 'Proposal', 'Project plan', 'Solution page']},
            { img: 'fluent_design-ideas-24-filled.png', projec_init: 'Design', item:['Inspiration/Concept', 'Branding', 'Design/Style guide', 'Storyboarding']},
            { img: 'ic_baseline-developer-mode.png', projec_init: 'Development', item:['Frontend development', 'Frontend integration', 'Backend development', 'Quality assurance']},
            { img: 'si-glyph_customer-support.png', projec_init: 'Support', item:['Analytics', 'Timely support', 'Security scans', 'Enhancement']}
        ]
    })

}
</script>

<style scoped>
.process{
    min-height: 100vh;
}
.processCard{
    position: relative;
    top: 7em;
    width: 284px;
    height: 287px;
    background: rgba(155, 76, 14, 0.1);
    border-radius: 27px;
    z-index: 1;
    

}
.processCard .processInner{
    height: 108px;
    background: #9B4C0E;
    border-top-right-radius: 27px;
    border-top-left-radius: 27px;
    text-align: center;
    padding-top: 4em;
    color: white;
    font-weight: 500;
    font-size: 20px;
    font-family: montserrat, sans-serif;

}
.icontitle{
    display: inline-block;
    position: absolute;
    z-index: 1000;
   width: 99px;
height: 99px;
left: 32%;
top: -3em;
border: 5px solid white;
border-radius: 50%;
background: #F9B620;
display: flex;
justify-content: center;
align-items: center;

}
ul{
    margin-top: 1.5em;
}
ul > li.list{
    list-style-type: none;
     font-weight: 400;
    font-size: 18px;
    font-family: montserrat, sans-serif;
}
ul > li.list::before{
    content:"";
    position: relative;
    margin-right: 0.5em;
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #C4C4C4;
    border-radius: 50%;
}
.TeamStyle{
  color: #f2a839;
}
.team_heads{
  padding-top: 5em;
  
}
.team_heads > .head_meet_teams {
   font-family: montserrat, sans-serif;
   font-size: 2.5em;
   font-weight: 500;
}
.texts{
    font-size: 15px;
    font-family: poppins;
}
@media screen and (max-width: 800px) {
    .process{
    min-height: 125vh;
}
.processCard{
    position: relative;
    top: 0em;
    left: 3em;
    background: rgba(155, 76, 14, 0.1);
    border-radius: 27px;
    z-index: 1;
    margin-top: 5em;

    

}
.processCard .processInner{
    padding-top: 2.7em;
}
}
@media screen and (max-width: 600px) {
    .imgline{
  width: 99px;
  position: relative;
  top: -0.5em;
}
    .team_heads > .head_meet_teams{
    font-size: 1.8em;
  }
  .texts{
    font-size: 0.8em;
    padding-right: 2em;
    padding-left: 2em;
}
.process{
    min-height: 120vh;
}
.processCard{
    position: relative;
    top: 0;
    left: 0.8em;
    width: 156.12px;
    height: 153.38px;
    background: rgba(155, 76, 14, 0.1);
    border-radius: 27px;
    z-index: 1;
    margin-top: 5em;

    

}
.processCard .processInner{
    height: 57.72px;
    background: #9B4C0E;
    border-top-right-radius: 27px;
    border-top-left-radius: 27px;
    text-align: center;
    padding-top: 2.5em;
    color: white;
    font-weight: 500;
    font-size: 0.8em;
    font-family: montserrat, sans-serif;

}
.icontitle{
    display: inline-block;
    position: absolute;
    z-index: 1000;
   width: 54.42px;
height: 54.42px;
left: 35%;
top: -2em;
border: 3px solid white;
border-radius: 50%;
background: #F9B620;
display: flex;
justify-content: center;
align-items: center;

}
ul{
    margin-top: 1.5em;
}
ul > li.list{
    list-style-type: none;
     font-weight: 400;
    font-size: 0.5em;
    font-family: montserrat, sans-serif;
}
ul > li.list::before{
    content:"";
    position: relative;
    margin-right: 0.5em;
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #C4C4C4;
    border-radius: 50%;
}
}
</style>