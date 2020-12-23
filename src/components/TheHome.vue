<template>
<div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">GAMITIC</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="http://localhost:8080/pagina1">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="http://localhost:8080/ajustes">Ajustes <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="http://localhost:8080/juegos">Juegos<span class="sr-only">(current)</span></a>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" 
      type="submit" @click.prevent="logOut">Salir</button>
      
    </form>
  </div>
</nav>

 <div class="d-flex flex-row  bd-highlight justify-content-between align-items-stretch align-items-center text-justify"> 
   <div class="d-flex mt-5 bd-highlight justify-content-between align-items-stretch align-items-center">
   <p class="parrafo ml-2"> 
     //<img src=" " alt=""/>
     Nombre: {{ user.name }} <br>
     Correo: {{ user.email }} <br>
     Rol: {{ user.rol }} <br>
     Pasatiempo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a facere aut earum optio quia praesentium vitae voluptatum omnis modi similique voluptas aliquid quaerat, rerum explicabo recusandae voluptatibus! Nihil, dolore?

   </p>
   </div>

  <div class="d-flex flex-column bd-highlight mb-3 ml-5">
    <div><h1>DISEÑO EN BOOTSTRAP</h1></div> 
    <div><iframe width="560" height="315" src="https://www.youtube.com/embed/ixBgrqho03E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
  </div>
 </div>
 <div class="footer bg-dark">
    <!-- Footer Text -->


        <!-- Grid row -->
        <div class="row">

            <!-- Grid column -->
            <div class="col pt-2 ml-2">

                <!-- Content -->
                <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt=" " width="160"
                    height="133"><br>
                <span class="footer-url text-uppercase font-weight-bold text-light"><a href="https://github.com/orgs/Grupo-121/dashboard"> Enlace repositorio
                        Github</a></span>
                <p class="text-footer text-uppercase font-weight-bold text-justify text-light">
                    Proyecto sprint 2 del ciclo 3 de Programamción<br>
                    Grupo 121<br>
                    Operador: Universidad UTP<br>
                    MisiónTIC2022</p>

            </div>

            <!-- Grid column -->
            <div class="col">
                <div class="row">
                <!-- Content -->
                <div class="col text-light pt-5 text-justify">
                    <p class="text-footer">
                    <b>PRODUCT OWNER</b>
                    Daniel Duque<br>
                    <b>SCRUM MASTER</b><br>
                    Alba Ligia Cardona<br>
                    <b>DEVELOPMENT TEAM</b> <br>
                    Lorena Elizabeth Bravo <font color="yellow"> elizabeth1935@hotmail.com</font><br>
                    David Andres Sosa     <font color="yellow"> danotron74@gmail.com</font><br>
                    Jaime Luis Correa  <font color="yellow"> jaimecorreagarcia@hotmail.com</font ><br>
                    Jorge Perez  <font color="yellow"> jpdj25@gmail.com</font><br>
                    Pablo Alexander Romero <font color="yellow"> pabloaromerol@gmail.com</font></p>
                </div>
               
                </div>

            </div>
       
    </div>
    <!-- Grid column -->

    </div>
    <!-- Grid row -->

  
    <!-- Footer Text -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-1 text-light bg-secondary">©️ 2020 Copyright: EQUIPO 121
    </div>
 </div>
</template>

<script>
import swal from 'sweetalert';
export default {
    data(){
      return{
        user:{}
    }
}, 
methods:{
    getUserDetails(){
      let user =localStorage.getItem('user');
      let token =localStorage.getItem('jwt');
      if(token){ 
        this.user = JSON.parse(user);
        //console.log(user);
        //console.log(JSON.parse(user));
        }
      },
        logOut(){
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        //this.$router.push('/');
        if(localStorage.getItem('jwt')===null){
          swal("Esperamos verte pronto!", "Has salido correctamente", "success");
          this.$router.push('/');  
      }
    }
    },
    created(){
        this.getUserDetails();
    }
}
</script>

