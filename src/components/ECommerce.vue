<template>
  <mdb-container class="mt-100">
    <h2 class="text-center mb-5"> Todos nuestros articulos </h2>
    <mdb-row>
      <mdb-col lg="3">
        <div class="mb-5">
          <h5 class="font-weight-bold dark-grey-text">Ordenar por</h5>
          <div class="divider"></div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" value="defecto" id="defecto" v-model="ordenar">
            <label class="custom-control-label" for="defecto">Por defecto</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" value="reputacion" id="reputacion" v-model="ordenar">
            <label class="custom-control-label" for="reputacion">Mas reputacion</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" value="masprecio" id="masprecio" v-model="ordenar">
            <label class="custom-control-label" for="masprecio">Precio mas alto</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" value="menosprecio" id="menosprecio" v-model="ordenar">
            <label class="custom-control-label" for="menosprecio">Precio mas bajo</label>
          </div>
        </div>
        <div class="mb-5">
          <h5 class="font-weight-bold dark-grey-text">Categoria</h5>
          <div class="divider"></div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" value="0" id="todas" v-model="categoria">
            <label class="custom-control-label" for="todas">Todas</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" value="1" id="muebles" v-model="categoria">
            <label class="custom-control-label" for="muebles">Muebleria</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" value="2" id="estantes" v-model="categoria">
            <label class="custom-control-label" for="estantes">Estanteria</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" value="3" id="otras" v-model="categoria">
            <label class="custom-control-label" for="otras">Otros</label>
          </div>
        </div>
        <div class="mb-5">
          <h5 class="font-weight-bold dark-grey-text">Rango de precio</h5>
          <div class="divider"></div>
          <div class="custom-control pl-0">
            <label for="minimo">Desde: bs.{{ minimo }}</label>
            <input type="range" class="custom-range" id="minimo" :min="precioMinimo" :max="precioMaximo" v-model="minimo" >
          </div>
          <div class="custom-control pl-0">
            <label for="maximo">Hasta: bs.{{ maximo }}</label>
            <input type="range" class="custom-range" id="maximo" :min="precioMinimo" :max="precioMaximo" v-model="maximo" >
          </div>
        </div>
      </mdb-col>
      <mdb-col lg="9">
        <mdb-row>
          <mdb-col sm="4" v-for="x in FiltradoPrecio" :key="x.id" v-on:click="ModalArticulo(parseInt(x.id))">
            <mdb-card class="mb-4 animated fadeIn">
              <div class="cursor" @click="ModalArticulo(parseInt(x.id))">
                <mdb-card-image :src="x.images[0].src" :alt="x.nombre"></mdb-card-image>
              </div>
              <mdb-card-body>
                <div class="cursor" @click="ModalArticulo(parseInt(x.id))">
                  <mdb-card-title>{{x.nombre}}</mdb-card-title>
                </div>
                <mdb-badge v-for="badg in x.etiquetas" :key="badg.id" :color="badg.color" class="mr-2">{{badg.nombre}}</mdb-badge>
                <mdb-rating disabled v-model="x.valoracion" class="mb-2" />            
                <mdb-card-footer class="pb-0 white">
                  <div v-if="x.descuento == 0">
                    <span class="float-left mr-2">
                      <strong> Bs.{{x.precio}}</strong>
                    </span>
                  </div>
                  <div v-else>
                    <h5 class="mb-0 pb-0 mt-1 font-weight-bold">
                      <span class="float-left mr-2 red-text">
                        <strong>Bs.{{ Math.round((x.precio * (100 - x.descuento))/100) }}</strong>
                      </span>
                      <span class="float-left mr-2 grey-text">
                        <strong>
                          <small>Bs.{{ x.precio }}</small>
                        </strong>
                      </span>
                    </h5>
                  </div>
                  <span class="float-rigth" v-if="!ExisteEnCarrito(x.id)" @click="AgregarAlCarrito(parseInt(x.id))">
                    <mdb-icon class="enlace" icon="shopping-cart" />
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-col>
		</mdb-row>
    <article-modal :codigo="idArticulo" :count="countModal" />
  </mdb-container>
</template>

<script>
import axios from 'axios';
import ArticleModal from '@/components/Article'
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardFooter, mdbBadge, mdbRating, mdbIcon } from 'mdbvue';
export default {
  name: 'EcommercePage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardFooter,
    mdbBadge,
    mdbRating,
    mdbIcon,
    ArticleModal
  },  
  data() {
    return {
      articles: this.$store.state.articles,
      ordenar: 'defecto',
      categoria: '0',
      minimo: 0,
      maximo: 0,
      idArticulo: 0,
      countModal: 0,
      info: null,
    }
  },
  computed: {
    precioMinimo: function(){
      var arrayPrecios = [];
      this.articles.forEach(x => {
        arrayPrecios.push(Math.round((x.precio * (100 - x.descuento))/100));
      });
      return Math.min.apply(null,arrayPrecios);
    },
    precioMaximo: function(){
      var arrayPrecios = [];
      this.articles.forEach(x => {
        arrayPrecios.push(Math.round((x.precio * (100 - x.descuento))/100));
      });
      return Math.max.apply(null,arrayPrecios);
    },
    FiltradoPrecio: function(){
      var articulos = [];
      this.articles.forEach(x => {
        if ((Math.round((x.precio * (100 - x.descuento))/100)) >= this.minimo && (Math.round((x.precio * (100 - x.descuento))/100)) <= this.maximo) {
          articulos.push(x);
        }
      });
      return articulos;
    }
  },
  watch: {
    categoria: function(){
      if(this.categoria == 0){
        this.articles = this.$store.state.articles
      }else{
        this.articles = [];
        this.$store.state.articles.forEach(x => {
          if (x.categoria == this.categoria) {
            this.articles.push(x);
          }
        });
      }
      this.minimo = this.precioMinimo;
      this.maximo = this.precioMaximo;
    },
    ordenar: function(){
      switch (this.ordenar) {
        case 'reputacion':
          this.articles.sort(function (o1,o2) {
            if (o1.valoracion < o2.valoracion) { //comparación lexicogŕafica
              return 1;
            } else if (o1.valoracion > o2.valoracion) {
              return -1;
            } 
            return 0;
          });  
          break;

        case 'masprecio':
          this.articles.sort(function (o1,o2) {
            if ((Math.round((o1.precio * (100 - o1.descuento))/100)) < Math.round((o2.precio * (100 - o2.descuento))/100)) { //comparación lexicogŕafica
              return 1;
            } else if ((Math.round((o1.precio * (100 - o1.descuento))/100)) > Math.round((o2.precio * (100 - o2.descuento))/100)) {
              return -1;
            } 
            return 0;
          });  
          break;

        case 'menosprecio':
          this.articles.sort(function (o1,o2) {
            if ((Math.round((o1.precio * (100 - o1.descuento))/100)) > Math.round((o2.precio * (100 - o2.descuento))/100)) { //comparación lexicogŕafica
              return 1;
            } else if ((Math.round((o1.precio * (100 - o1.descuento))/100)) < Math.round((o2.precio * (100 - o2.descuento))/100)) {
              return -1;
            } 
            return 0;
          });  
          break;    
          
        default:
          this.articles.sort(function (o1,o2) {
            if (o1.id > o2.id) { //comparación lexicogŕafica
              return 1;
            } else if (o1.id < o2.id) {
              return -1;
            } 
            return 0;
          });  
          break;
      }
    },
    minimo: function(){
      if (this.maximo == null) {
        this.maximo = this.precioMaximo;
      }
    },
    maximo: function(){
      if (this.minimo == null) {
        this.minimo = this.precioMinimo;
      }
    }
  },
  methods: {
    AgregarAlCarrito(id){  
      this.$store.state.articlesUser.push({article: id, count: 1});
      this.$swal({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado al carrito correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    },
    ObtenerDatos(){
      axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => console.log(response))
    },
    ObtenerPrecio(o){
      return (Math.round((o.precio * (100 - o.descuento))/100))
    },
    ModalArticulo(id){
      this.idArticulo = id;
      this.countModal++;
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
  created() {
      this.ObtenerDatos();
      this.minimo = this.precioMinimo;
      this.maximo = this.precioMaximo;
    },
  }
</script>

<style>
  .enlace{
    color:#310000;
    transition: .5s;
  }
  .enlace:hover{
    cursor: pointer;
    color:red;
  }

  .cursor{
    cursor: pointer;
  }

  small{
    text-decoration: line-through;
  }

  .mt-100{
    margin-top: 100px;
  }

  .divider{
    height: 3px;
    display: block;
    background-color: rgba(0,0,0,.1);
    margin: 1em 0;
    width: 30px;
  }
</style>