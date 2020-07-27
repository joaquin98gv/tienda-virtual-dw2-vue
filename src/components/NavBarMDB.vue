<template>
  <mdb-navbar color="elegant-color-dark" position="top" dark scrolling>
    <mdb-navbar-brand href="https://mdbootstrap.com/" >
      <img src="../assets/logo_empresa.png" height="30" alt="">
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item to="/" active>Inicio</mdb-nav-item>
        <mdb-nav-item to="/contact">Contactanos</mdb-nav-item>
        <!-- <mdb-nav-item to="/Rest">Api de Paises</mdb-nav-item> -->
      </mdb-navbar-nav>
      <mdb-navbar-nav right >
        <mdb-nav-item title="Todos los productos" to="/ecommerce" icon="list">Productos</mdb-nav-item>
        <mdb-nav-item title="Ver carrito de compras" to="/shopping" icon="shopping-cart">Carrito</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>

    <div class="sociales">
      <ul>
        <li><a href="https://www.facebook.com/muhogar" target="_blank" class="facebook fab fa-facebook-f"></a></li>
        <li><a href="https://www.facebook.com/muhogar" target="_blank" class="insta fab fa-instagram"></a></li>
        <li><a href="https://www.facebook.com/muhogar" target="_blank" class="twitter fab fa-twitter"></a></li>
        <li><a href="https://www.facebook.com/muhogar" target="_blank" class="twitch fab fa-twitch"></a></li>
      </ul>
    </div>

  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem  } from 'mdbvue';
  export default {
    name: 'NavBarMDB',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem
    }
  }
</script>

<style>
  .navbar {
    transition: 1s;
  }
  .navbar .md-form {
    margin: 0;
  }
  .top-nav-collapse {
    background-color: #310000 !important;
  }
  @media (max-width: 990px){
    .navbar {
      background-color: #310000 !important;
    }
  }

  .sociales{
    position: fixed;
    top: 300px;
    right: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .sociales ul{
    list-style: none;
  }

  .sociales ul li a{
    float: right;
    display: inline-block;
    color: #fff;
    background: #310000;
    padding: 10px 15px;
    text-decoration: none;
    width: 40px;
    /* width: 100%;*/
    text-align: center; 
  }

  .facebook{background-color: #3b5998 !important;}
  .insta{background-color: #3f729b   !important;}
  .twitter{background-color: #55acee !important}
  .twitch{background-color: #6441a5  !important;}

  .sociales ul li a:hover{
    padding: 10px 30px;
    width: 100%;
    background: #000;
  }

</style>