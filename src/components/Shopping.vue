<template>
    <mdb-container class="mt-100 mb-200">
        <h2 class="text-center mb-2"> Tu carrito de compra </h2>
        <mdb-tbl>
        <mdb-tbl-head>
            <tr>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acumulado</th>
            </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
            <tr v-for="x in articles" :key="x.id">
            <th>
                <mdb-card-image :src="x.images[0].src" :alt="x.nombre"></mdb-card-image>
            </th>
            <td>
                <h5 class="mt-5">{{x.nombre}}</h5>
            </td>
            <td>
                <h5 class="mt-5">Bs.{{ Math.round((x.precio * (100 - x.descuento))/100) }}</h5>
                </td>
            <td>
                <div class="mt-5">
                    <span>{{x.count}}</span>
                    <mdb-btn-group size="sm" class="text-center">
                        <mdb-btn color="red darken-4" style="border-radius: 15px 0 0 15px" @click="DisminuirCantidad(x.id)">-</mdb-btn>
                        <mdb-btn color="red darken-4" style="border-radius: 0 15px 15px 0" @click="AumentarCantidad(x.id)">+</mdb-btn>
                    </mdb-btn-group>
                </div>
            </td>
            <td>
                <h5 class="mt-5">{{ x.count * Math.round((x.precio * (100 - x.descuento))/100) }}</h5>
            </td>
            <td>
                <mdb-btn size="sm" class="mt-5 p-2" color="red darken-4" title="Eliminar del carrito" @click="Delete(x.id)">x</mdb-btn>
            </td>
            </tr>
            <tr>
                <td colspan="2"></td>
                <td><h4 class="mt-2">Total</h4></td>
                <td><h4 class="mt-2">{{total}}</h4></td>
                <td colspan="2">
                    <mdb-btn style="border-radius: 25px" color="red darken-4">Completar compra</mdb-btn>
                </td>
            </tr>
        </mdb-tbl-body>
        </mdb-tbl>
    </mdb-container>
</template>

<script>
  import { mdbTbl, mdbTblHead, mdbTblBody, mdbContainer, mdbCardImage, mdbBtn, mdbBtnGroup } from 'mdbvue';
  export default {
    name: 'TablePage',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
      mdbContainer,
      mdbCardImage,
      mdbBtn, 
      mdbBtnGroup
    },
    data: function(){
        return {
            articles: []
        }
    },
    methods: {
        GetArticlesInShopping(){
            this.$store.state.articles.forEach(x => {
                this.$store.state.articlesUser.forEach(b => {
                    if(x.id == b.article){
                        x.count = b.count;
                        this.articles.push(x);
                    }
                });
            });
        },
        AumentarCantidad(id){
            this.articles.find(x => x.id == id).count++;
            this.$store.state.articlesUser.find(x => x.article == id).count++;
        },
        DisminuirCantidad(id){
            if (this.articles.find(x => x.id == id).count == 1) {
                return false;
            }
            this.articles.find(x => x.id == id).count--;
            this.$store.state.articlesUser.find(x => x.article == id).count--;
        },
        Delete(id){
            var NewList = [];
            this.articles.forEach(x => {
                if (x.id != id) {
                    NewList.push(x);
                }
            });
            this.articles = NewList;
            NewList = [];
            this.$store.state.articlesUser.forEach(x => {
                if (x.article != id) {
                    NewList.push(x);
                }
            });
            this.$store.state.articlesUser = NewList;
        }
    },
    created() {
        this.GetArticlesInShopping();
    },
    computed: {
        total: function(){
            var suma = 0;
            this.articles.forEach(x => {
                suma += (x.count * Math.round((x.precio * (100 - x.descuento))/100));
            });
            return suma;
        }
    },
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
    .mt-100{
    margin-top: 100px;
  }
  .mb-200{
    margin-bottom: 200px;
  }
  .mt-8{
    margin-top: 5rem;
  }

  .carous img{
    border: 3px solid #6b6b6b;
    border-radius: 5px;
  }

  table img{
      max-height: 150px
  }

</style>