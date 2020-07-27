<template>
  <div class="mb-5">
    <!--ViewWrapper-->
    <mdb-view id="cabecera" class="pt-100">
      <mdb-mask class="gradient d-flex justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
            <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 pt-xs-5 pt-55">
              <h1 class="h1-responsive font-weight-bold mt-sm-5">Mundo Hogar </h1>
              <hr class="hr-light"/>
              <h6 class="mb-4">Nos consideramos la tienda más completa de sucre esperamos con ansias su visita.
                Sea bienvenido a apreciar toda nuestra gama de productos.
                Actualmente contamos con una amplia gama de productos en nuestro catalogo.
              </h6>
              <mdb-btn color="white">Descargar catalogo</mdb-btn>
            </div>
            <mdb-col md="6" xl="5" class="mt-xl-5">
              <img src="@/assets/mueble.png" class="img-fluid"/>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </mdb-view>
    <!--/.ViewWrapper-->
  </div>
</template>

<script>
  import { mdbContainer, mdbRow, mdbCol, mdbView, mdbMask, mdbBtn } from 'mdbvue';
  export default {
    name: 'Headers',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbView,
      mdbMask,
      mdbBtn
    }
  }
</script>

<style>
  #cabecera {
    background-image: url('../assets/mh.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: calc(100vh);
  }
  .gradient {
    background: -moz-linear-gradient(45deg, rgba(103,0,0, 0.7), rgba(163,163,163, 0.7) 100%);
    background: -webkit-linear-gradient(45deg, rgba(103,0,0, 0.7), rgba(163,163,163, 0.7) 100%);
    background: -webkit-gradient(linear, 45deg, from(rgba(103,0,0, 0.7)), to(rgba(163,163,163, 0.7)));
    background: -o-linear-gradient(45deg, rgba(103,0,0, 0.7), rgba(163,163,163, 0.7) 100%);
    background: linear-gradient(45deg, rgba(103,0,0, 0.7), rgba(163,163,163, 0.7) 100%);
  }
  h6 {
      line-height: 1.7;
  }
  .mt-sm-55{
    margin-top: 20px;
  }

  @media (max-width: 768px) {
      .pt-55{
      padding-top: 200px;
    }
  }
  

  .pt-100{
    padding-top: 100px;
  }
</style>