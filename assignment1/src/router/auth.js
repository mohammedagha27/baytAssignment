const router = require('express').Router();
const { signup, login } = require('../controllers');
const { authorization, getLoggedData } = require('../middlewares');

router.post('/signup', signup);
router.post('/login', login);
router.get('/isLogged', authorization, getLoggedData);
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ msg: 'logged out' });
});

module.exports = router;
