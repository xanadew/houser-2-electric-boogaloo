module.exports= (req,res,next) => {
    let {user} = req.session;
    if(!user){
        user = {username: '', id: null}
    }
    next();
}