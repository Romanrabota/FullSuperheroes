const MAX_LIMIT = 5;

module.exports  = async (req,res,next) =>
{
try{

    req.pagination={
    limit:5,
    offset:0
    }
    


next();
} catch (error) {
   next(error)
}
}