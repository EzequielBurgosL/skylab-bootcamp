'use strict'

const root = document.getElementById('root')

const title = React.createElement('h1', null, 'Hello, World!')
const section = React.createElement('section', null, title)

const item1 = React.createElement('li', null, 'item 1')
const item2 = React.createElement('li', null, 'item 2')
const item3 = React.createElement('li', null, 'item 3')

const item4 = React.createElement('li', null, 'item 1')
const item5 = React.createElement('li', null, 'item 2')
const item6 = React.createElement('li', null, 'item 3')

const list4 = React.createElement('ul', null, item4, item5, item6)

const itemFour = React.createElement('li', null, 'item 4', list4)

const list = React.createElement('ul', null, item1, item2, item3, itemFour)

const main = React.createElement('main', null, section, list)



ReactDOM.render(main, root)
