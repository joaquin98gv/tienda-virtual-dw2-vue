<template>
  <div>
    <mdb-modal :show="modal" @close="modal = false" centered size="xl">
      <mdb-modal-body>

          <mdb-row>
              <mdb-col md="6">
                <mdb-carousel class="p-4 carous"
                  :items="item.images"
                  :interval="5000"
                  controlls
                ></mdb-carousel>
              </mdb-col>
              <mdb-col md="6 pl-xl-0 pl-4">
                <h2 class="h2-responsive text-md-left font-weight-bold dark-grey-text mb-1"> {{item.nombre}} </h2>
                <mdb-badge v-for="badg in item.etiquetas" :key="badg.id" :color="badg.color" class="mb-4 mr-2">{{badg.nombre}}</mdb-badge>
                <div v-if="item.descuento == 0" class=" text-md-left mb-5">
                  <h3>
                    <span class="float-left mr-2 text-md-left mb-5">
                      <strong> Bs.{{item.precio}}</strong>
                    </span>
                  </h3>
                  </div>
                  <div v-else>
                    <h3 class="h2-responsive">
                      <span class="float-left mr-2 red-text">
                        <strong>Bs.{{ Math.round((item.precio * (100 - item.descuento))/100) }}</strong>
                      </span>
                      <span class="float-left mr-2 grey-text">
                        <strong>
                          <small>Bs.{{ item.precio }}</small>
                        </strong>
                      </span>
                    </h3>
                  </div>
                <h5 class="font-weight-bold dark-grey-text mt-8">Descripcion</h5>
                <div class="divider"></div>
                <p class="dark-grey">{{item.descripcion}}</p>
              </mdb-col>

          </mdb-row>

      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="red darken-4" v-if="!ExisteEnCarrito(item.id)"
         @click="AgregarAlCarrito(item.id)" >Agregar al carrito <i class="fas fa-shopping-cart ml-2"></i> </mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>
  import { mdbBtn, mdbModal, mdbModalBody, mdbModalFooter, mdbRow, mdbCol, mdbCarousel, mdbBadge } from 'mdbvue';
  export default {
    name: 'ArticleModal',
    components: {
      mdbModal,
      mdbModalBody,
      mdbBtn,
      mdbModalFooter,
      mdbRow,
      mdbCol,
      mdbCarousel,
      mdbBadge
    },
    props:[
        'codigo',
        'count'
    ],
    data() {
      return {
          modal: false,
          item: {}
      }
    },
    watch: {
        count:function(){
            this.modal = true;
            this.item = this.$store.state.articles.find(element => element.id == this.codigo);
        }
    },
    methods: {
      AgregarAlCarrito(id){  
      this.$store.state.articlesUser.push({article: id, count: 1});
        this.modal = false;
        this.$swal({
          position: 'top-end',
          icon: 'success',
          title: 'Agregado al carrito correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      ExisteEnCarrito(id){
      var encontrado = false;
      this.$store.state.articlesUser.forEach(x => {
        if (x.article == id) {
          encontrado = true;
        }
      });
      return encontrado;
    }
    },
    created(){

    }
  }
</script>

<style>
  .divider{
    height: 3px;
    display: block;
    background-color: rgba(0,0,0,.1);
    margin: 1em 0;
    width: 30px;
  }
  .mt-8{
    margin-top: 5rem;
  }

  .carous img{
    border: 3px solid #6b6b6b;
    border-radius: 5px;
  }

</style>