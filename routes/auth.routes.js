const {Router} = require('express')
const User = require('../models/User')
const router = Router()


// /api/auth/register
router.post('/register', () => {
    try {

        const{email, password} = req.body

        const candidate = await User.findOne({email})

        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }



    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так попробуйте ещё раз'})
    }
})

// /api/auth/login
router.post('/login', async (req, res) => {

})


module.exports = router
