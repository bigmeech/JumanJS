function getUsers(req, res, next){
  console.log("rendering users");
  res.json({});
}

function createUsers(req, res, next){
  console.log("rendering users");
  res.json({});
}

function deleteUsers(req, res, next){
  res.json({});
}


module.exports = function () {
  return {
    rootPath: '/users',
    routes:[
      {
        path: '/',
        get:getUsers,
        post:createUsers,
        put:createUsers,
        "delete":deleteUsers
      }
    ]
  }
};

