const expect = require('expect')
const utils = require('./utils')


it('should add two numbers', () => {
    var res = utils.add(33, 11)
    
    expect(res).toBe(44)
});

it('should square a number', () => {
    var res = utils.square(2)

    expect(res).toBe(4)
    expect(res).not.toBe(5)
    expect(typeof res).toBe('number')

});

it('should expect verify first and last names are set', () => {
    var user = {location: 'Barcelona', age: 28}
    var res = utils.setName(user, 'Ezequiel Burgos')

   expect(res).toMatchObject({firstName: 'Ezequiel', lastName: 'Burgos'})

})