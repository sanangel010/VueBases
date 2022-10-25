const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

console.log(quotes)


const app = Vue.createApp({   
        
    // OPTIONS API
    // data de la aplicación, para mantener el estado
    // propiedades reactivas, vue se encarga de cambiar en caso de cambio manteniendo el estado.
        data() {
            return {                                
                //quotes: quotes
                // Cuando el objeto y el valor se llaman igual, en este caso quotes, se puede sumir de la siguiente forma
                quotes,
                newQuote: 'Hola mundo new quote'
            }
        },
        methods: {
            addQuote( event ) {
                console.log(this.newQuote)
                console.log(event)

                if( event.charCode !== 13) return 
                this.quotes.unshift({
                    quote: this.newQuote
                })

            }
        }

    })

    // SE MONTA VUE, SOBRE EL DIV QUE SE DEFINIO EN EL HTML.
    app.mount('#myApp')