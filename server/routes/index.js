const {Router} = require ('express');
const multer  = require('multer');
const path = require('path');
const SuperheroController = require('../controllers/Superhero.controller');
const ImageController= require('../controllers/Image.controller');
const {getPowerInstance} = require('../middlewares/Power.mw');
const {getImageInstance} = require('../middlewares/Image.mw');
const pagination = require('../middlewares/pagination.mw');
const router = Router();




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  path.resolve(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}.${file.originalname}`)
    }
  });



  const upload = multer({storage});






const PowerController = require('../controllers/Power.controller');

router.post('/superhero',SuperheroController.createSuperhero);
router.post('/power',PowerController.createPower);  
router.get('/superheros',pagination,SuperheroController.findAll);
router.get('/superhero/:id',SuperheroController.findOnePK);
router.delete('/superhero/:id',SuperheroController.deleteByPK);
router.put('/superhero/:id',SuperheroController.updateSuperhero);
router.post('/superhero/:id',upload.single('avatar'),ImageController.createImage); 



module.exports = router;

