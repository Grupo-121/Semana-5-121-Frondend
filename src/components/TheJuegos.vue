<template>
    <div>
        <div>
   <h1>sadasdsa</h1><br>
   <font color="white"><h1>sadasdsa</h1><br></font>
</div>
  <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- /.col-lg-3 -->

      <div class="col-lg-9 mt-5">


        <div class="row mt-4">

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="https://es.games68.com/images_jeux/9011447.jpg" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="http://localhost:8080/GreenPiece">Green Piece</a>
                </h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
                
                <div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 class="modal-title" id="myModalLabel">Esto es un modal</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
    

              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="https://es.games68.com/images_jeux/9011446.jpg" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">PongIdle</a>
                </h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
            
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQl7Cq8gUkkZc4Ci3eRHXwPgLNYgdIR01lBw&usqp=CAU" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Crazy Roll 3D</a>
                </h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                 <v-dialog
        v-model="dialog"
        width="1500"
        height="1500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Click Me
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="headline grey lighten-2">
            JUEGO
          </v-card-title>
  
          <v-card>
            <iframe src="https://www.1001juegos.com/embed/jet-rush" style="width: 800px; height: 800px;" frameborder="0"></iframe>
          </v-card>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              SALIR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

              </div>

              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="https://es.games68.com/images_jeux/9011400.jpg" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Chunks</a>
                </h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>
        
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="https://es.games68.com/images_jeux/9011397.jpg" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Zumbido</a>
                </h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="https://es.games68.com/images_jeux/9011406.jpg" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Forgetting</a>
                </h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

        </div>
        <!-- /.row -->

      </div>
      <!-- /.col-lg-9 -->

    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->

  <!-- Footer -->
  <footer class="py-5 bg-dark">
    <!-- /.container -->
  </footer>

  <!-- Bootstrap core JavaScript -->
    </div>
 
</template>
<script>
export default {
    
    data: () => ({
    
    dialogm1: "",
    dialog: false
   
  })
  }

</script>