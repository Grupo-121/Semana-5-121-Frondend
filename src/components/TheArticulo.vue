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
              :items="articulos"
              sort-by="nombre"
              class="elevation-1"
              :loading="cargando"
              loading-text="Loading... Please wait"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>ARTICULOS </v-toolbar-title>
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
                            <v-col cols="12" >
                              <v-text-field
                                v-model="editedItem.id"
                                label="ID"
                              ></v-text-field>
                            </v-col>
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
                                <v-col cols="12" >
                              <v-text-field
                                v-model="editedItem.estado"
                                label="Estado"
                              ></v-text-field>
                            </v-col>

                                <v-col cols="12" >
                              <v-select
                                v-model="categoria"
                                label="Categoria"
                                :items="categorias"
                                item-text="nombre"
                                item-value="id"
                                return-object
                              ></v-select>
                            </v-col>
                                <v-col cols="12" >
                              <v-text-field
                                v-model="editedItem.codigo"
                                label="Código"
                              ></v-text-field>
                            </v-col>
                            <!-- <v-col cols="12" >
                              <v-text-field
                                v-model="editedItem.fat"
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
                  <v-dialog v-model="dialogDelete">
                    <v-card>
                      <v-card-title class="headline"
                        >¿Estas seguro de que quieres desactivar el artículo?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete"
                          >Cancel</v-btn
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
    dialog: false,
    dialogDelete: false,
    cargando: true,
    articulos: [],
    categorias: [],
    categoria: '',
    editedIndex: -1,
    editedItem: {
      id:0,
      nombre: '',
      descripcion: 0,
      codigo: '',
      estado: 0,
      categoria:{
        id: 0,
        nombre: '',
      }
    },
    defaultItem: {
      id:0,
      nombre: '',
      descripcion: 0,
      codigo: '',
      estado: 0,
      categoria:{
        id: 0,
        nombre: '',
      }
    },
    
    headers: [
      { text: "ID", value: "id" },
      {
        text: "Nombre",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "Categoria", value: "categoria.nombre" },
       { text: "Código", value: "codigo" },
      { text: "Estado", value: "estado" },
      { text: "Actions", value: "actions", sortable: false },
    ],
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
    this.listCastegorias()
  },

  methods: {
    // initialize() {
    //   this.desserts = [
    //     {
    //       nombre: "Frozen Yogurt",
    //       descripcion: 159,
    //       estado: 6.0,
    //     },
    //   ];
    // },
    list() {
      axios.get("https://calm-chamber-38042.herokuapp.com/api/articulo/list")
        .then( response => {
          this.articulos = response.data;
          this.cargando = false;
        })
        .catch((error) => {
          console.log(error);
        });
        console.log(localStorage.jwt)
    },
    listCastegorias() {
      axios.get("https://calm-chamber-38042.herokuapp.com/api/categoria/list")
        .then( response => {
          this.categorias = response.data;
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
        axios.put('https://calm-chamber-38042.herokuapp.com/api/articulo/deactivate',{
          "id": this.editedItem.id,
        }, {headers: {'token': localStorage.jwt}})
        .then(response => {
            this.list();
        })
        .catch(error => {
            return error;
        })
        } else {
        //post
        axios.put('https://calm-chamber-38042.herokuapp.com/api/articulo/activate',{
          "id": this.editedItem.id,
        }, {headers: {'token': localStorage.jwt}})
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
        axios.put('https://calm-chamber-38042.herokuapp.com/api/articulo/update',{
          "id": this.editedItem.id,
          "nombre": this.editedItem.nombre,
          "descripcion": this.editedItem.descripcion,
          //"categoria": this.categorias,
        }, {headers: {'token': localStorage.jwt}})
        .then(response => {
            this.list();
        })
        .catch(error => {
            return error;
        })
        } else {
        //post
        axios.post('https://calm-chamber-38042.herokuapp.com/api/articulo/add',{
          "estado": 1,
          "nombre": this.editedItem.nombre,
          // "descripcion": this.editedItem.descripcion,
          // "categoriaId": this.editedItem.categoria.id
          // "codigo": this.editedItem.codigo
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


