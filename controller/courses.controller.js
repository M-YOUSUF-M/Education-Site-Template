const getCourses = (req,res)=>{
    res.sendFile('/views/courses.html',{root:__dirname + "/../"});
}

module.exports = getCourses;