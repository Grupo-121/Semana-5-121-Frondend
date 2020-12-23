<template>
<div id="login" class=" container bg-dark text-light mt-5 rounded mb-0 ml-100 mr-100">
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Dirección de correo electrónico</label>
      <input 
        v-model="login.email"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Ingrese correo electrónico"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Contraseña</label>
      <input 
        v-model="login.password"
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Contraseña"/>
      <pre>
        {{login}}
      </pre> 

    </div>
    <button 
    @click.prevent="loginUser"
    type="submit" class="btn btn-primary">Ingresar</button>
  </form>
  </div>
</template>

<script>
import swal from 'sweetalert';
export default {
  name: "TheLogin",
  data() {
    return {
      login:{
        email:'',
        password: ''
      }
    };
  },
  methods: {
    async loginUser(){
      try{
        //let response = await this.$http.post('/api/usuario/', this.signin)
        let response = await this.$http.post('/api/usuario/login', this.login)
        //console.log(response.data)
        let token = response.data.tokenReturn;
        let user = response.data.user;

        localStorage.setItem('jwt', token);
        localStorage.setItem('user', JSON.stringify(user));

        if(token){
          swal("Bienvenido!", "Has ingresado correctamente!", "success");
          this.$router.push('/home');
        }
      }

      catch{
          swal("Oops!", "El usuario o contraseña es incorrecta!", "error");
      
        
      }
    }
  },
};
</script>