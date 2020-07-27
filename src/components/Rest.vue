<template>
    <div>
        <mdb-container class="mt-100">
            <h2 class="text-center">Listado de paises de habla Hispana</h2>
            <mdb-row class="mt-5">
                <mdb-col sm="4" v-for="x in Paises" :key="x.id" class="mb-2">
                    <mdb-card>
                        <mdb-card-image :src="x.flag" alt="Card image cap"></mdb-card-image>
                        <mdb-card-body>
                            <mdb-card-title>{{ x.name }} [{{ x.topLevelDomain[0] }}]</mdb-card-title>
                            <mdb-card-text>
                                <p>
                                    {{ x.name }} cuenta con {{ x.population }} personas como habitantes. Se encuentra en la region de {{ x.region }}, especificamente en {{ x.subregion }}
                                </p>
                                <p v-if="x.borders.length > 0">
                                    Hace frontera con {{x.borders.length}} paises, los cuales son: 
                                    <ul>
                                        <li v-for="p in x.borders" :key="p.id">
                                            {{ p }}
                                        </li>
                                    </ul>
                                </p>
                                <p v-else>
                                    No tiene frontera con ningun pais
                                </p>
                            </mdb-card-text>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </mdb-container>
    </div>
  
</template>

<script>
    import axios from 'axios';

	import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbRow, mdbCol, mdbContainer } from 'mdbvue';
	export default {
		name: 'CardPage',
		components: {
			mdbCard,
			mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
            mdbRow,
            mdbCol, 
            mdbContainer
        },
        data: function(){
            return {
                Paises: []
            }
        },
        methods: {
            ObtenerDatos(){
                axios
                .get('https://restcountries.eu/rest/v2/lang/es')
                .then(response => this.Paises = response.data)
            },
        },
        created() {
            this.ObtenerDatos();
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