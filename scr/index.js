const result = document.querySelector(".result")
const form = document.querySelector(".form")
const input = document.querySelector(".form input")

vetor = []
for (let i = 0; i < 20; i++) {
    const randomico = parseInt(Math.random() * 10)
    vetor.push(randomico)
}
// console.log(vetor)

function exibeAleatorio() {
    for (let i = 0; i < vetor.length; i++) {
        let element = document.createElement('p')
        element.textContent = vetor[i]
        element.classList.add('random')
        result.appendChild(element)
    }
}
exibeAleatorio();

function LIS(vetor, i, n, prev) {
    if (i == n) {
        return 0;
    }

    let excl = LIS(vetor, i+1, n, prev)

    let incl = 0;
    if (vetor[i] > prev) {
        incl = 1 + LIS(vetor, i+1, n, vetor[i])
    }

    return Math.max(incl, excl)
}
const seq = LIS(vetor, 0, vetor.length, Number.MIN_SAFE_INTEGER);
console.log(seq)


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const num = parseInt(input.value)

    if (num == seq) {
        window.alert("Parabéns! Você acertou o tamanho da maior subsequência!")
    }
    else {
        window.alert("Opsss, essa não é a maior subsequência!")
    }
    input.value = "";
})
