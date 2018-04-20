module.exports={
    retrieve:(req,res) => {
        const db = req.app.get('db');
        const userid = req.session.user.id;
        db.get_houses([userid]).then((houses) => {
            if(!req.query.rent){
                res.status(200).send([...houses])            
            }else{
                let filtered = houses.filter((e) => Number(e.desiredrent)>Number(req.query.rent));
                res.status(200).send([...filtered]);
                console.log('filtered:', [...filtered])
            }
        })
    },
    conjure:(req,res) => {
        const db = req.app.get('db');
        const {name,housedesc,address,city,state,zip,img,loan,mort,desiredrent,userid} = req.body;
        db.add_house([name,housedesc,address,city,state,zip,img,loan,mort,desiredrent,userid])
        .then(houses => { res.status(200).send(houses)
        }).catch(err => console.log('OH BOB SAGET: ', err))
    },
    banish:(req,res) => {
        const db = req.app.get('db');
        const propid = parseInt(req.params.id);
        db.delete_house([propid]).then((houses) => {
            console.log('ok');
            res.status(200).send(houses)
        }).catch(err => console.log('SUCK IT TREBEK: ', err))
    }
}