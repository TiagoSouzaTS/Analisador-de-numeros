let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista') 
let res = document.querySelector('div#res') 
let valores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

        function adicionar(){
            if(isNumero(num.value) && !inLista(num.value, valores)){ //Verificação feita pra saber se o conteúdo de num é um número e se não está dentro de lista. "!inLista". 
                valores.push(Number(num.value))
                let item = document.createElement('option')
                item.text = `Valor ${num.value} adicionado.`
                lista.appendChild(item)
                res.innerHTML = ''
            } else {
                window.alert('Valor inválido ou já encontrado na lista.')
            }
            num.value = '' //Isso serve para apagar o campo de número depois de adicionar um item.
            num.focus() //Isso serve para manter o cursor do mouse focado no campo de números depois de adicionar um item.
        } 
function finalizar() {
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length //Para saber quantos números foram cadastrados é só verificar o comprimento do Array com o atributi length
        let maior = valores[0] //Se tiver apenas um número cadastrado ele é o maior e o menor.
        let menor =valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) { //vai varrer todas as posições do array e fazer comparações de menor e maior
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. <p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.<p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.<p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.<p>`
        res.innerHTML += `<p> A média dos valores é ${media}. <p>`
    }
}