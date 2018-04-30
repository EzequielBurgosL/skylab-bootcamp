'use strict'

const main = <main>
    <section>
        <h1>Hello, World!</h1>
    </section>
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </li>
    </ul>
</main>


const footer = 
<div>
<section>Que chuliiii</section>
<ul>
    <li>Hello</li>
</ul>
<section>Que chuliiii</section>
<section>Que chuliiii</section>
<section>Que chuliiii</section>
</div>




ReactDOM.render(main, document.getElementById('root'))
ReactDOM.render(footer, document.getElementById('root2'))


