const listnotes = require('../handlers/listnotes')
const retrievenotes = require('../handlers/retrievenote')
const createnote = require('../handlers/createnote')
const updatenote = require('../handlers/updatenote')
const deletenote = require('../handlers/deletenote')

module.exports = {

    listnotes,
    retrievenotes,
    createnote,
    updatenote,
    deletenote

}