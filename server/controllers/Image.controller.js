const {Superhero,Image} = require('../models');

module.exports.createImage = async (req,res,next) =>
{
try{
    const {params:{id},file:{filename}} = req;
    console.log(req.file); 
    const [rowCount,[updatedsuperhero]] = await Superhero.update({
images:filename
    }, {
   where:{
    id:id
   },returning: true
});
res.status(200).send(updatedsuperhero);   
} catch (error) {
   next(error)
}
}

