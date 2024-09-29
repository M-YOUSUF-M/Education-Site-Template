const getsubmited = (req,res)=>{
    res.sendFile('views/submited.html',{root:__dirname + "/../"});
}

module.exports = getsubmited;