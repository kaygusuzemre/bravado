var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'bravado'
})

connection.connect()

connection.query(
  `
  CREATE TABLE IF NOT EXISTS category (
    name varchar(255) NOT NULL,
    creationDate date NOT NULL,
    content varchar(255) NOT NULL,
    PRIMARY KEY (name)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`,
  function(error, results, fields) {
    if (error) throw error
    console.log('category ✔ ')
  }
)

connection.query(
  `
CREATE TABLE IF NOT EXISTS challenge (
  id int(10) NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  content varchar(255) NOT NULL,
  startDate date NOT NULL,
  finishDate date NOT NULL,
  goal int(11) NOT NULL,
  categoryName varchar(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`,
  function(error, results, fields) {
    if (error) throw error
    console.log('challenge ✔ ')
  }
)
connection.query(
  `
CREATE TABLE IF NOT EXISTS comment (
  id int(10) NOT NULL AUTO_INCREMENT,
  body varchar(255) NOT NULL,
  userId int(10) NOT NULL,
  challengeId int(10) NOT NULL,
  date DATE NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`,
  function(error, results, fields) {
    if (error) throw error
    console.log('comment ✔ ')
  }
)
connection.query(
  `
CREATE TABLE IF NOT EXISTS reward (
  userRewardId int(10) NOT NULL,
  challengeRewardId int(10) NOT NULL,
  submissionId int(10) NOT NULL,
  date date NOT NULL,
  PRIMARY KEY (userRewardId,challengeRewardId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`,
  function(error, results, fields) {
    if (error) throw error
    console.log('reward ✔ ')
  }
)
connection.query(
  `
CREATE TABLE IF NOT EXISTS submission (
  id int(10) NOT NULL AUTO_INCREMENT,
  challengeId int(10) NOT NULL,
  userId int(10) NOT NULL,
  rate int(11) NOT NULL,
  content varchar(255) NOT NULL,
  approvedByUserId int(10) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`,
  function(error, results, fields) {
    if (error) throw error
    console.log('submission ✔ ')
  }
)
connection.query(
  `
CREATE TABLE IF NOT EXISTS user (
  id int(10) NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  surname varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  age int(10) NOT NULL,
  gender enum('male','female') NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`,
  function(error, results, fields) {
    if (error) throw error
    console.log('user ✔ ')
  }
)

connection.end()
