<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      

      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-1">
            {{ item.text }}
          </div>
        </v-row>
      
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carrusel",

  data() {
    return {
      items: [
        {
          src: "img/banner1.jpg",
          text: "Mantener motivados a los trabajadores",
        },
        {
          src: "img/banner2.jpg",
          text: "Guiar el cambio de comportamientos",
        },
        {
          src: "img/banner3.jpg",
          text: "Crear cultura empresarial",
        },
      ],
    };
  },
};
</script>






