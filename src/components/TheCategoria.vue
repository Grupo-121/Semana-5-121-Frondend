<template>
<div>
<div>
   <h1>sadasdsa</h1><br>
   <font color="white"><h1>sadasdsa</h1><br></font>
</div>


<div id="app mt-5">
          <v-app id="inspire mt-5">
            <v-data-table
              :headers="headers"
              :items="categorias"
              sort-by="nombre"
              class="elevation-1"
              :loading="cargando"
              loading-text="Loading... Please wait"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>CATEGORIAS </v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Agregar Categoria
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                             <!-- <v-col cols="12" >
                              <v-text-field
                                v-model="editedItem.id"
                                label="ID"
                              ></v-text-field>
                            </v-col> -->
                            <v-col cols="12" >
                              <v-text-field
                                v-model="editedItem.nombre"
                                label="Nombre"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" >
                              <v-text-field
                                v-model="editedItem.descripcion"
                                label="Descripción"
                              ></v-text-field>
                            </v-col>
                                <!-- <v-col cols="12" >
                              <v-text-field
                                v-model="editedItem.estado"
                                label="Estado"
                              ></v-text-field>
                            </v-col> -->
                       
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">
                          Cancelar
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="save">
                          guardar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <template v-if="editedItem.estado == 1">
                  <v-dialog v-model="dialogDelete" width="800px"
                      >
                    <v-card>
                      <v-card-title class="d-flex justify-center"
                        >¿Estas seguro de que quieres desactivar el artículo?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete"
                          >Cancelar</v-btn
                        >
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="deleteItemConfirm"
                          >OK</v-btn
                        >
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  </template>
                  <template v-else>
                  <v-dialog v-model="dialogDelete" width="800px"
                      >
                    <v-card>
                      <v-card-title class="d-flex justify-center"
                        >Confirme para activar el articulos.</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="deleteItemConfirm"
                          >OK</v-btn
                        >
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  </template>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon medium class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon medium @click="deleteItem(item)"> 
                  
                  <template v-if="item.estado">
                    <!-- cambia el estado con un switch -->
                    mdi-toggle-switch 

                  </template>
                  <template v-else>
                    mdi-toggle-switch-off-outline
                    
                  </template>

                  </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize"> Reset </v-btn>
              </template>
            </v-data-table>
          </v-app>
        </div>
      </div>

      
         <!----Llamar soloe ste elemento en categoria----->
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    // desserts: [],
     dialog: false,
    dialogDelete: false,
      headers: [
      { text: "ID", value: "id" },
      {
        text: "Categoria",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "Estado", value: "estado" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    categorias: [],
    editedIndex: -1,
    cargando: true,
    editedItem: {
      id:0,
      nombre: '',
      descripcion: '',
      estado: 0,
    },
    defaultItem: {
      id:0,
      nombre: '',
      descripcion: '',
      estado: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar catergoria" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.list();
  },

  methods: {
   
    list() {
      axios.get("https://calm-chamber-38042.herokuapp.com/api/categoria/list")
        .then( response => {
          this.categorias = response.data;
          this.cargando = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
        if (this.editedItem.estado === 1) {
        //put
        axios.put('http://calm-chamber-38042.herokuapp.com/api/categoria/deactivate',{
          "id": this.editedItem.id,
        },{headers: {'token': localStorage.jwt}})
        .then(response => {
            this.list();
        })
        .catch(error => {
            return error;
        })
        } else {
        //post
        axios.put('http://calm-chamber-38042.herokuapp.com/api/categoria/activate',{
          "id": this.editedItem.id,
        },{headers: {'token': localStorage.jwt}})
        .then(response => {
            this.list();
        })
        .catch(error => {
            return error;
        })        
      }



      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        //put
        axios.put('http://calm-chamber-38042.herokuapp.com/api/categoria/update',{
          "id": this.editedItem.id,
          "nombre": this.editedItem.nombre,
          "descripcion": this.editedItem.descripcion,
        },{headers: {'token': localStorage.jwt}})
        .then(response => {
            this.list();
        })
        .catch(error => {
            return error;
        })
        } else {
        //post
        axios.post('https://calm-chamber-38042.herokuapp.com/api/categoria/add',{
          "estado": 1,
          "nombre": this.editedItem.nombre,
          "descripcion": this.editedItem.descripcion,
        },{headers: {'token': localStorage.jwt}})
        .then(response => {
            this.list();
        })
        .catch(error => {
            return error
        })        
      }
      this.close();
    },
  },
};
</script>