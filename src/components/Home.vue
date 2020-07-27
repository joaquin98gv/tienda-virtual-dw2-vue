<template>
  <div class="mb-5">
    <!-- <carousel/> -->
    <headers/>

    <mdb-container>
      <mdb-row>
        <mdb-col md="3" sm="12" class="mb-3">
          <mdb-card class="card-image zoom" v-bind:style="{ backgroundImage: 'url(' + $store.state.articles[$store.state.articles.length - 1].images[0].src + ')' }" style="background-size: contain">
            <div class="text-white rgba-black-strong py-5 px-4">
              <div>
                <mdb-badge color="yellow darken-4">Ultimo agregado</mdb-badge>
                <mdb-card-title tag="h3" class="pt-2"><strong>{{$store.state.articles[$store.state.articles.length - 1].nombre}}</strong></mdb-card-title>
                <mdb-btn color="red darken-4" @click="ModalArticulo(parseInt($store.state.articles[$store.state.articles.length - 1].id))">Leer mas...</mdb-btn>
              </div>
            </div>
          </mdb-card>
        </mdb-col>
        <mdb-col md="9" sm="12">
          <mdb-card class="card-image zoom" v-bind:style="{ backgroundImage: 'url(' + $store.state.articles[0].images[0].src + ')' }" style="background-size: contain">
            <div class="text-white rgba-black-strong py-5 px-4">
              <div>
                <mdb-badge color="red darken-4">Mejor vendido</mdb-badge>
                <mdb-card-title tag="h3" class="pt-2"><strong>Este es el articulo mejor vendido</strong></mdb-card-title>
                <p>El aparador que le mostramos, esta siendo un exito de ventas debido a su bajo costo. </p>
                <mdb-btn color="red darken-4" @click="ModalArticulo(parseInt($store.state.articles[0].id))">Leer mas...</mdb-btn>
              </div>
            </div>
          </mdb-card>
        </mdb-col>

        <mdb-col md="12" class="mb-5 mt-5">
          <mdb-card class="card-image" v-bind:style="{ backgroundImage: 'url(' + $store.state.articles[PositionMayorDescuento].images[0].src + ')' }" style="background-size: contain">
            <div class="rgba-black-strong ">
              <div class="text-white text-right pt-lg-5 pt-md-1 mr-5 pr-md-4 pr-0 py-5 px-4">
                <mdb-badge color="red darken-4">Mayor Rebaja</mdb-badge>
                <h2 class="py-3 font-weight-bold">
                  <strong>{{$store.state.articles[PositionMayorDescuento].nombre}} ¡En venta desde el {{$store.state.articles[PositionMayorDescuento].descuento}}% de descuento!</strong>
                </h2>
                <p>{{$store.state.articles[PositionMayorDescuento].descripcion}}</p>
                <mdb-btn color="red darken-4" rounded size="md" @click="ModalArticulo(parseInt($store.state.articles[PositionMayorDescuento].id))"> Leer mas... </mdb-btn>
              </div>
            </div>
          </mdb-card>
        </mdb-col>

      </mdb-row>

      <div class="dividerHome mb-5 mt-5"></div>

      <div class="team mb-5">
        <h2 class="text-center">Equipo de trabajo</h2>
        <mdb-row>
        </mdb-row>
      </div>

      <mdb-container>
        <mdb-row class="mb-5">
          <mdb-col sm="1"></mdb-col>
          <mdb-col sm="5" class="mb-3" v-for="x in equipo.filter(x => x.rol == 'alumno')" :key="x.nombre">
            <mdb-card testimonial style="margin-top: 125px">
              <mdb-card-avatar color="white" class="mx-auto" style="height: 125px;"><img style="position: relative; top: -125px; height: 250px; width: 250px" :src="x.img" class="rounded-circle img-fluid z-depth-1 "></mdb-card-avatar>
              <mdb-card-body>
                <mdb-card-title class="text-center">{{x.nombre}}</mdb-card-title>
                <p class="font-weight-lighter text-center">{{x.ocupacion}}</p>
                <hr />
                <p> {{ x.descripcion }}</p>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col sm="1"></mdb-col>
        </mdb-row>

        <mdb-row>
          <mdb-col sm="4"></mdb-col>
          <mdb-col sm="4" v-for="x in equipo.filter(x => x.rol == 'docente')" :key="x.nombre">
            <mdb-card testimonial style="margin-top: 125px">
              <mdb-card-avatar color="white" class="mx-auto" style="height: 125px;"><img style="position: relative; top: -125px; height: 250px; width: 250px" :src="x.img" class="rounded-circle img-fluid z-depth-1 "></mdb-card-avatar>
              <mdb-card-body>
                <mdb-card-title class="text-center">{{x.nombre}}</mdb-card-title>
                <p class="font-weight-lighter text-center">{{x.ocupacion}}</p>
                <hr />
                <p> {{ x.descripcion }}</p>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col sm="4"></mdb-col>
        </mdb-row>

      </mdb-container>
    </mdb-container>

    <article-modal :codigo="idArticulo" :count="countModal" />
    
  </div>  
</template>

<script>

  // import Carousel from '@/components/Carousel'
  import ArticleModal from '@/components/Article'
  import Headers from '@/components/Headers'
  import { mdbBadge, mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardTitle, mdbCardBody, mdbCardAvatar, mdbBtn  } from 'mdbvue';
  export default {
    name: 'ListGroupPage',
    components: {
      mdbBadge,
      Headers,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardTitle,
      mdbBtn,
      ArticleModal,
      mdbCardBody,
      mdbCardAvatar,
      // Carousel
    },
    data: () => {
      return {
        idArticulo: 0,
        countModal: 0,
        equipo: [{
          nombre: 'Joaquin Gonzalez Villaescusa',
          rol: 'alumno',
          ocupacion: 'Desarrollador Web',
          img: 'https://scontent.fsrz2-1.fna.fbcdn.net/v/t1.0-9/34741150_608708522818655_335158412893487104_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=xGLxl2nqxiMAX9loXU5&_nc_ht=scontent.fsrz2-1.fna&oh=bdc643a1c11df7b77912492e31c2f68b&oe=5EB33863',
          descripcion: 'Estudiante de la UPDS de 5to semestre. Desarrollador de Aplicaciones Web. Encargado de la logica, estructura y desarrollo del sitio.'
        },
        {
          nombre: 'Charles Perez',
          rol: 'alumno',
          ocupacion: 'Diseñador Web',
          img: 'https://scontent.fsrz2-1.fna.fbcdn.net/v/t31.0-8/p960x960/22096129_1662108290531052_723840418933022402_o.jpg?_nc_cat=110&_nc_sid=dd7718&_nc_ohc=4RM69rGWU6wAX-uxMC7&_nc_ht=scontent.fsrz2-1.fna&_nc_tp=6&oh=a0c6c36be5db84707d1b453dbeca31f6&oe=5EB396A4',
          descripcion: 'Estudiante de la UPDS de 5to semestre. Encargado de la maquetacion, estructuracion y parte del diseño de la app web.'
        },
        {
          nombre: 'Jaime Zambrana Chacón',
          rol: 'docente',
          ocupacion: 'Profesor Universitario',
          img: 'https://scontent.fsrz2-1.fna.fbcdn.net/v/t1.0-9/84463252_10217671319427778_4699833723892269056_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=eIMbBGlexrkAX_r9YPC&_nc_ht=scontent.fsrz2-1.fna&oh=d898dfc8064fe45cfabdf0db559b11bc&oe=5EB3968C',
          descripcion: 'Jaime Zambrana, ha sido el instructor de la materia llevada a cabo en el modulo III de la primera gestion del 2020 en la materia "Diseño Web II".'
        }]
      }
    },
    computed: {
      PositionMayorDescuento: function(){
        var position = 0;
        var array = this.$store.state.articles;
        for (let i = 0; i < array.length; i++) {
          if (array[position].descuento < array[i].descuento) {
            position = i;
          }
        }
        return position;
      }
    },
    methods: {
      ModalArticulo(id){
        this.idArticulo = id;
        this.countModal++;
      },
    },
  }
</script>

<style>

  .hoverable:hover{
    cursor: pointer !important;
  }
  .dividerHome{
    height: 3px;
    display: block;
    background-color: rgba(0,0,0,.1);
    margin: 1em 0;
    width: 70%;
    margin: auto;
  }

</style>style