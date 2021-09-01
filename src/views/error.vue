<template>
  <div class="view">
         <footer-error>
           <template v-slot:left >
              <h1 class="head" >Ooops...</h1>
              <h2 class="subhead" >Page not available yet</h2>
              <div class="err_text my-3 ">
                The page you are looking for does not exist or an error occured, go back to home page.
              </div>
                  <v-btn  dark to="/" color="#9B4C0E" class="text-capitalize button">home page</v-btn>
              
           </template>
           <template v-slot:right>
             <v-img class="hidden-xs-only" src="@/assets/errorimage.png"></v-img>
             <v-img class="hidden-sm-and-up" src="@/assets/errormobile.png"></v-img>
             
           </template>
         </footer-error>
  </div>
</template>

<script>
 import FooterError from '@/components/footerError'

export default {
  components: {
    FooterError
  }
}
</script>

<style scoped>
.button.v-btn{
  border-radius: 15px;
}
.head{
  font-family: montserrat;
}
.subhead{
  font-family: montserrat;
}
.err_text{
  font-family: montserrat;
  padding-right: 150px;
  font-size: 0.8em;
}
@media screen and (max-width: 800px){
.button.v-btn{
  margin-left: 1em;
  margin-bottom: 3em;
}
.head{
margin-left: 1em;
}
.subhead{
  margin-left: 1em;
}
.err_text{
  margin-left: 1em;
  padding-right: 20px;
}
  
}
</style>