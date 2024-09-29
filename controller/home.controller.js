const getHome = (req, res) => {
    res.sendFile('/views/index.html', { root: __dirname + "/../" });
}

module.exports = {
    getHome
};