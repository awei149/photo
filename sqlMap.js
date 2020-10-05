var sqlMap = {
    getValue: 'SELECT * FROM test WHERE id = ?',
    setValue: 'INSERT INTO imgtable(imageID, imageName) VALUES (?, ?)',
    setUserInfo: 'INSERT INTO userInfo(userName, password) VALUES(?, ?)',
    getUserInfo: 'SELECT userName, password FROM userInfo'
  }
  
  module.exports = sqlMap;