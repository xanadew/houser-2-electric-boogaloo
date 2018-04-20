module.exports={
    login:(req,res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.get_user([username, password]).then((user) => {
            if(user[0]) {
                req.session.user = {id: user[0].userid, 
                        username: user[0].username};
                res.status(200).send(req.session.user);
            }else{
                console.log('nope');
                res.status(500).send()
            }
        }).catch(err => res.status(500).send(err));
    },
    register:(req,res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        console.log('user shit: ',username, password);
        db.create_user([username, password]).then((user) => {
            req.session.user = {id: user[0].userid,
                                username: user[0].username}
            res.status(200).send(req.session.user);
        }).catch(err => res.status(500).send('shit.',err));
    },
    logout:(req,res) => {
        req.session.destroy();
        res.status(200).send('WE OUT');
    }
}