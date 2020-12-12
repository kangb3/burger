var orm = require('../config/orm');


var burger = {

  select(cb) {

    orm.selectAll('burgers', (res) => {
      cb(res);
    });
  },
  update(burgerId, cb) {

    orm.updateOne('burgers', 'devoured = NOT devoured', burgerId, (res) => {
      cb(res);

    });
  },

  create(column, value, cb) {

    orm.insertOne('burgers', column, value, (res) => {

      cb(res);

    });
  },

  delete(burgerId, cb) {

    orm.delete('burgers', burgerId, (res) => {
      cb(res);
      
    });
  },
};



module.exports = burger;