<template>
  <v-container>
    <v-footer >
      <v-card flat tile width="100%" class="blue-grey lighten-4 text-center">
        <v-row>
        <v-col v-for="item in items" :key="item.id"  class="mx-4">
          <v-card color="blue-grey lighten-4" >
            <v-icon size="18px">
              {{ item.icon }}              
            </v-icon>
            <v-card-text >              
              {{ item.text }}
            </v-card-text>
          </v-card>
        </v-col>
        </v-row>
                <v-card-text pa-0>          
          {{ new Date().getFullYear() }} — <strong>Nariño, Huila, Magdalena, Córdoba y Atlántico </strong>
        </v-card-text>
                <v-card-text pa-0>          
          <strong>  
            <a href="https://github.com/Tecnalia-Cilco-3/semana-4" >https://github.com/Tecnalia-Cilco-3/semana-4</a>
          </strong>
        </v-card-text>


      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
    return {
      items: [
        {
          id: 1,
          icon: 'mdi-home',
          text: "IndustrialGames@igames.com",
        },
                {
          id: 2,
          icon: 'mdi-email',
          text: "contacto@igames.com",
        },
                {
          id: 3,
          icon: 'mdi-phone',
          text: "0314568907",
        },
                       {
          id: 4,
          icon: 'mdi-cellphone',
          text: "3073114422",
        }, 
           
      ],
    }
    }
  }
   
</script>