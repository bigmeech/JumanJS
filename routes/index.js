function getIndex(req, res, next){
    console.log("rendering users");
    res.render('base');
}

module.exports = function () {
    return {
        rootPath: '/',
        routes:[
            {
                path: '/',
                get:getIndex
            }
        ]
    }
};