'use strict'

const title = 'Hello World!'
const a = 2, b = 3



function operation(a, b, symbol) {
    return <section>
        <h2>{symbol === '+' ? 'Addition' : 'Substraction'}</h2>
        {a} {symbol} {b} = {symbol === '+' ? a + b : a - b}
    </section>
}

const main =
    <main>
        <h1>{title}</h1>
        {operation(2, 3, '+')}
        {operation(3, 2, '-')}


        <o  peration a={2} b={3} symbol={'-'}/>
    </main>


ReactDOM.render(main, document.getElementById('root'))



