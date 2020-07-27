<template>
  <mdb-container class="mt-100">
    <mdb-card>
      <mdb-card-title class="mt-4 h2">Contáctenos</mdb-card-title>
      <mdb-card-body>
        <mdb-card-text class="pr-5 pl-5" mr-4 ml-4 >
          ¿Tiene usted alguna pregunta? Por favor no dude en contactarnos directamente. Nuestro equipo se pondrá en contacto con usted en cuestión de horas para ayudarlo.
          </mdb-card-text>
        <form class="needs-validation" novalidate @submit.prevent="submitForm">
          <mdb-row>
            <mdb-col md="8">
              <mdb-row>
                <mdb-col>
                  <mdb-input label="Tu nombre" v-model="fields.name" required />
                </mdb-col>
                <mdb-col>
                  <mdb-input type="email" label="Tu correo electronico" v-model="fields.email" required />
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col>
                  <mdb-input label="Asunto" v-model="fields.subject" required />
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col>
                  <mdb-input type="textarea" label="Tu mensaje" v-model="fields.message" required />
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col md="4">
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="map-marker-alt" size="2x" />
                  <p>San Francisco, CA 94126, USA</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="phone" size="2x" />
                  <p>+ 01 234 567 89</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="envelope" size="2x" />
                  <p>contact@mdbootstrap.com</p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <mdb-btn color="primary" type="submit" class="float-left">Send</mdb-btn>
        </form>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
</template>

<script>
  import {
    mdbContainer,
    mdbInput,
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbIcon,
    mdbBtn,
    mdbRow,
    mdbCol
  } from "mdbvue";

  export default {
    components: {
      mdbContainer,
      mdbInput,
      mdbCard,
      mdbCardTitle,
      mdbCardBody,
      mdbCardText,
      mdbIcon,
      mdbBtn,
      mdbRow,
      mdbCol
    },
    data() {
      return {
        fields: {
          name: "",
          email: "",
          subject: "",
          message: ""
        }
      };
    },
    methods: {
      submitForm(event) {
        event.target.classList.add("was-validated");
        // submit form
      }
    }
  };
</script>

<style scoped>
  .container {
    text-align: center;
  }

  .mt-100{
    margin-top: 100px;
  }
</style>