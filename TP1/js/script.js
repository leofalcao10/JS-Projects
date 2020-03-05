// LEONARDO PLAZEZWSKI FALCÃO R.A: 171700

//EX1:

function tabuadaPronta() {

    for (i = 1; i < 10; i++)
    {
        document.write(`<h3>Tabuada do ${i}</h3>`);

        for (j = 1; j < 10; j++)
        {
            document.write(`<h4>${i} * ${j} = ${i * j} <br></h4>`);
        }
    }
}

//EX2:

function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)

        tab.innerHTML = ''
        
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            tab.appendChild(item)
        }
    }
}