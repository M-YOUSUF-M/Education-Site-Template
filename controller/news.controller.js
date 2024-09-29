const getNews = (req,res)=>{
    res.sendFile('/views/blog.html',{root:__dirname + "/../"});
}

module.exports = getNews;