const path=require('path');
const Career=require('../models/Career');

exports.addPlayer = async (req,res,next)=>{
    const newPlayer={
        name: req.body.name,
        birthday: req.body.birthday,
        url: req.body.url,
        birthplace: req.body.birthplace,
        career: req.body.career,
        matches: req.body.matches,
        score: req.body.score,
        fifties: req.body.fifties,
        centuries: req.body.centuries,
        wickets: req.body.wickets,
        average: req.body.average,
    }
    Career.create(newPlayer)
        .then(result=>{
            res.status(200).json(newPlayer);
        })
        .catch(err=>console.log(err));
};

exports.getPlayerByName = async (req,res,next)=>{
    const playerName=req.body.searchPlayerName;
    const details=await Career.findAll({where:{name:playerName}})
    res.status(200).json(details);
};

exports.getPlayerById = async (req,res,next)=>{
    const playerId=req.body.searchPlayerId;
    const details=await Career.findAll({where:{id:playerId}})
    res.status(200).json(details);
}

exports.deletePlayer = async (req,res,next)=>{
    const playerId=req.params.playerId;
    Career.findByPk(playerId)
        .then(player=>{
            player.destroy();
        })
        .catch(err=>console.log(err));
    res.status(200).json({message:'player deleted!'});
};

exports.connectFrontend = async(req, res) => {
    res.sendFile(path.join(__dirname,'..', 'public','html', 'frontend.html'));
};

exports.connectPlayerInfo = async(req, res) => {
    res.sendFile(path.join(__dirname,'..', 'public','html', 'result.html'));
};