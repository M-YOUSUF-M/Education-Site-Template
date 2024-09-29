const getContact = (req,res)=>{
    res.sendFile('/views/contact.html',{root:__dirname +"/../"});
}

module.exports = getContact;