function getUsers(req, res, next){
    console.log("rendering users");
    res.render('base');
}

module.exports = function () {
    return {
        rootPath: '/users',
        routes:[
            {
                path: '/',
                get:getUsers
            }
        ]
    }
};