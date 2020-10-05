const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');
const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

module.exports = {
  getValue(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getValue;
      connection.query(sql, [id], (err, result) => {
        res.json(result);
        connection.release();
      });
    });
  },
  setValue(req, res, next) {
    console.log(req.body);
    var imageID = req.body.imageID;
    var imageName = req.body.imageName;
    // console.log(imageName);
    // console.log(imageID);
    console.log(typeof imageID);
    console.log(typeof imageName);
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValue;
      console.log("111");
      connection.query(sql, [imageID, imageName], (err, result) => {
        console.log("222");
        res.json(result);
        console.log("333");
        connection.release();
        console.log("444");
      });
    });
  },
  setUserInfo(req, res, next){
    var userName = req.body.userName;
    var password = req.body.password;
    console.log(userName);
    console.log(password);
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setUserInfo;
      connection.query(sql,[userName,password],(err, result) => {
        res.json(result);
        connection.release();
      });
    });
  },
  getUserInfo(req, res, next) {
    var username = req.query.username;
    var password = req.query.password;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getUserInfo;
      connection.query(sql, [username,password], (err, result) => {
        res.json(result);
        connection.release();
      });
    });
  },
}; 