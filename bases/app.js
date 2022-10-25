const app = Vue.createApp({
   
        
    // OPTIONS API
    // data de la aplicación, para mantener el estado
    // propiedades reactivas, vue se encarga de cambiar en caso de cambio manteniendo el estado.
        data() {
            return {
                author: 'Bruno Díaz',
                quote: 'Soy batman'
            }
        },
        methods: {
            changeQuote( evento ){
                this.author = 'Ángel Haro'
                console.log('Hola mundo desde el methods', evento)

                this.capitalize()
            },
            capitalize () {
                this.quote = this.quote.toUpperCase()
            }
        }

    })

    // SE MONTA VUE, SOBRE EL DIV QUE SE DEFINIO EN EL HTML.
    app.mount('#myApp')