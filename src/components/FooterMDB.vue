<template>
  <!-- Footer -->
  <mdb-footer color="unique-color-dark" class="page-footer font-small pt-0">
    <div style="backgroundColor: #6351ce">
      <mdb-container class="text-left">
        <mdb-row class="py-4 d-flex align-items-center">
          <mdb-col md="12" class="text-center text-md-left mb-4 mb-md-0">
            <h6 class="mb-0 white-text text-center">Contacta con nosotros mediante nuestras redes sociales!</h6>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
    <mdb-container class="mt-5 mb-4 text-center text-md-left">
      <mdb-row class="mt-3">
        <mdb-col md="3" lg="4" xl="4" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Mundo Hogar</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p>Los Muebles además de ser necesarios en tu hogar, aportan elegancia, brindan confort y puedes disfrutar grandes momentos en ellos! 
            te esperamos para que veas todos nuestros nuevos productos...!!</p>
        </mdb-col>
        <mdb-col md="3" lg="4" xl="4" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Tecnologias utilizadas</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><a href="https://getbootstrap.com/" target="_blank">Bootstrap 4</a></p>
          <p><a href="https://mdbootstrap.com/" target="_blank">MDBootstrap</a></p>
          <p><a href="https://vuejs.org/" target="_blank">Vue</a></p>
        </mdb-col>
        <mdb-col md="6" lg="4" xl="4" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><i class="fas fa-home mr-3"></i> Calle J Prudencio Bustillos 679 Sucre, Chuquisaca, Bo</p>
          <p><i class="fas fa-envelope mr-3"></i> info@mundohogar.com.bo</p>
          <p><i class="fas fa-phone mr-3"></i> +591 71837961</p>
          <p><i class="fas fa-print mr-3"></i> +591 78697939</p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="https://www.upds.edu.bo/"> UPDS </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>