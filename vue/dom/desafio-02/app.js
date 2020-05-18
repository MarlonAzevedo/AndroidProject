new Vue({
    el: '#desafio',
    data: {
        valor1: '',
        valor2: ''
    },
    methods: {
        exibirAlerta() {
            alert('Estou alertando agora!')
        },
        alterarValor(event) {
            this.valor2 = event.target.value
        }
    }
})