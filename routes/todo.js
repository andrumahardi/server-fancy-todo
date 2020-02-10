const router = require('express').Router()
const TodoController = require('../controllers/todoController.js')
const { authentication } = require('../middlewares/authentication.js')
const { authorization } = require('../middlewares/authorization.js')

// console.log(authentication())
router.get('/', TodoController.findAll)
router.post('/', TodoController.create)

router.get('/:id', TodoController.findById)
router.put('/:id', TodoController.setToCompleted)

router.delete('/:id', TodoController.deleteById)

module.exports = router