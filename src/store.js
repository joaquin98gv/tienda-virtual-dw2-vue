import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categorias: [{
                id: 1,
                nombre: 'muebleria'
            },
            {
                id: 2,
                nombre: 'estanteria'
            },
            {
                id: 3,
                nombre: 'otro'
            }
        ],
        articles: [{
                id: 1,
                nombre: "Estante de piso",
                descripcion: 'Este aparador de madera de sheesham es elegante y práctico, y será un gran aporte para su sala de estar, comedor o pasillo. También se puede usar como cómoda, gabinete, mesa auxiliar, etc.',
                categoria: 2,
                colors: [{
                        color: 'gris',
                        stock: 2
                    },
                    {
                        color: 'marron',
                        stock: 5
                    },
                    {
                        color: 'negro',
                        stock: 3
                    }
                ],
                images: [{
                        img: true,
                        src: "https://i.ebayimg.com/images/g/gdUAAOSwWkdeVDfm/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/Ki8AAOSwqIleVDfm/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/XIsAAOSw8gdeVDfm/s-l1600.jpg"
                    }
                ],
                etiquetas: [{
                        nombre: "Super venta",
                        color: "red darken-4",
                    },
                    {
                        nombre: "Nuevo",
                        color: "primary",
                    },
                ],
                valoracion: 5,
                precio: 799,
                descuento: 0,
                count: 0,
            },
            {
                id: 2,
                nombre: "Estante de piso con puerta",
                descripcion: 'DISEÑO EXQUISITO color El color texturado y las líneas limpias hacen que este gabinete sea casi compatible con cualquier estilo de tono. Presentar elegancia, simplicidad y funcionalidad lo hace perfectamente compatible con su sala de estar, dormitorio, cocina, baño y similares.',
                categoria: 2,
                colors: [{
                        color: 'nogal',
                        stock: 2
                    },
                    {
                        color: 'marron',
                        stock: 5
                    },
                    {
                        color: 'blanco',
                        stock: 3
                    }
                ],
                images: [{
                        img: true,
                        src: "https://i.ebayimg.com/images/g/aBYAAOSwTSldAm67/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/TywAAOSwRMhdAm66/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/eQ8AAOSw0LVdAm66/s-l1600.jpg"
                    }
                ],
                etiquetas: [{
                        nombre: "Super venta",
                        color: "red darken-4",
                    },
                    {
                        nombre: "Nuevo",
                        color: "primary",
                    },
                ],
                valoracion: 4,
                precio: 920,
                descuento: 5,
                count: 0,
            },
            {
                id: 3,
                nombre: "Aparador",
                descripcion: 'Estructura de madera, cristales, joyas de metal de latón.',
                categoria: 2,
                colors: [{
                        color: 'nogal',
                        stock: 2
                    },
                    {
                        color: 'marron',
                        stock: 5
                    },
                    {
                        color: 'blanco',
                        stock: 3
                    }
                ],
                images: [{
                        img: true,
                        src: "https://i.ebayimg.com/images/g/vYkAAOSwil5bRgXp/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/~n0AAOSw~jpbRgXp/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/cQcAAOSwcVZbRgYH/s-l1600.jpg"
                    }
                ],
                etiquetas: [{
                        nombre: "Super venta",
                        color: "red darken-4",
                    },
                    {
                        nombre: "Nuevo",
                        color: "primary",
                    },
                ],
                valoracion: 4,
                precio: 1900,
                descuento: 15.8,
                count: 0,
            },
            {
                id: 4,
                nombre: "Estante",
                descripcion: 'Este mueble de baño de madera de 3 niveles presenta un elegante color blanco, una construcción delgada y patrones de rayas verticales, puede combinar perfectamente con sus decoraciones existentes. Hace alarde de un atractivo moderno y una amplia capacidad de almacenamiento, proporcionando una solución inteligente de almacenamiento para sus baños, salas de estar, dormitorios, salas de estudio u otros espacios necesarios.',
                categoria: 2,
                colors: [{
                    color: 'nogal',
                    stock: 2
                }, {
                    color: 'marron',
                    stock: 5
                }, {
                    color: 'blanco',
                    stock: 3
                }],
                images: [{
                        img: true,
                        src: "https://i.ebayimg.com/images/g/BAcAAOSwNoteGXVd/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/C-IAAOSwAHFeGXWJ/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/xY4AAOSwXiVeGXWY/s-l1600.jpg"
                    }
                ],
                etiquetas: [{
                    nombre: "Nuevo",
                    color: "primary",
                }, ],
                valoracion: 5,
                precio: 350,
                descuento: 0,
                count: 0,
            },
            {
                id: 5,
                nombre: "Estante con puertas",
                descripcion: 'Estructura robusta fabricada en acero con superficie galvanizada y un sistema de encajado y travesaños horizontales que le dan mucha estabilidad.',
                categoria: 2,
                colors: [{
                    color: 'nogal',
                    stock: 2
                }],
                images: [{
                        img: true,
                        src: "https://i.ebayimg.com/images/g/SnAAAOSwsw9d4s7l/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/UeEAAOSwBDdd~VFa/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/IdsAAOSwYKBd~VFc/s-l1600.jpg"

                    }
                ],
                etiquetas: [{
                    nombre: "Nuevo",
                    color: "primary",
                }, ],
                valoracion: 5,
                precio: 350,
                descuento: 0,
                count: 0,
            },
            {
                id: 6,
                nombre: "Pack muebles p/ cocina",
                descripcion: 'Armario para llaves Armario de pared Armario de pared Gancho para toallas Armario de cocina.',
                categoria: 1,
                colors: [{
                        color: 'nogal',
                        stock: 2
                    },
                    {
                        color: 'marron',
                        stock: 5
                    },
                    {
                        color: 'negro',
                        stock: 3
                    }
                ],
                images: [{
                        img: true,
                        src: "https://i.ebayimg.com/images/g/iPUAAOSwzBJdEjbn/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/ClsAAOSwpXFdEjbq/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/UFMAAOSw-GtdEjbt/s-l1600.jpg"

                    }
                ],
                etiquetas: [{
                    nombre: "Nuevo",
                    color: "primary",
                }],
                valoracion: 5,
                precio: 2600,
                descuento: 0,
                count: 0,
            },
            {
                id: 7,
                nombre: "Pack muebles p/ cuarto",
                descripcion: '',
                colors: [{
                    color: 'nogal',
                    stock: 2
                }],
                categoria: 1,
                images: [{
                        img: true,
                        src: "https://i.ebayimg.com/images/g/5wQAAOSwQE1bM7MH/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/cbUAAOSw8eFbM7Lt/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/b54AAOSwm6lbM7L6/s-l1600.jpg"

                    }
                ],
                etiquetas: [{
                        nombre: "Tamaño matrimonial",
                        color: "info",
                    },
                    {
                        nombre: "Nuevo",
                        color: "primary",
                    },
                ],
                valoracion: 3,
                precio: 3500,
                descuento: 5,
                count: 0,
            },
            {
                id: 8,
                nombre: "Pack muebles p/ cuarto #2",
                descripcion: 'Este impresionante juego de muebles de dormitorio es de nuestra gama Lila. Compuesto por un tocador completo con 2 baúles junto a la cama. El conjunto viene pintado en un color blanco que se adaptará a cualquier combinación de colores y agregará un estilo francés vintage.',
                categoria: 1,
                colors: [{
                    color: 'nogal',
                    stock: 2
                }, {
                    color: 'blanco',
                    stock: 5
                }, {
                    color: 'marron',
                    stock: 3
                }],
                images: [{
                        img: true,
                        src: "https://i.ebayimg.com/images/g/SpkAAOSwsXpdA5Cs/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/UWUAAOSwYdpdA5Cs/s-l1600.jpg"
                    },
                    {
                        img: true,
                        src: "https://i.ebayimg.com/images/g/IQ0AAOSwVg9dA5Cs/s-l1600.jpg"

                    }
                ],
                etiquetas: [{
                        nombre: "Tamaño matrimonial",
                        color: "info",
                    },
                    {
                        nombre: "Nuevo",
                        color: "primary",
                    },
                ],
                valoracion: 4,
                precio: 3399,
                descuento: 0,
                count: 0,
            }
        ],
        articlesUser: [{
                article: 2,
                count: 1
            },
            {
                article: 4,
                count: 2
            }
        ],
    },
    mutations: {},
    actions: {},
});