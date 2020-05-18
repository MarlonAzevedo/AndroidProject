new Vue({
    el: '#desafio',
    data: {
        nome: 'Marlon Azevedo',
        idade: 32,
        imagem: 'https://i0.wp.com/gamelogia.com.br/wp-content/uploads/2016/11/gamer.jpg?resize=1280%2C640&ssl=1'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})