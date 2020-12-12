var connection = require('./connection.js');



function addQuestionMark(num) {
    const arr = [];
  
    for (let i = 0; i < num; i += 1) {

      arr.push('?');

    }
    return arr.toString();
  }
  

const orm = {
    selectAll(tableInput, cb) {
      const queryString = `select * from ${tableInput};`;
      connection.query(queryString, (err, result) => {
        if (err) throw err;
        cb(result);
      });
    },

    updateOne(table, columnValue, condition, cb) {
        const queryString = `
            update ${table} 
            set ${columnValue}
            where id = ?
          `;
    
        connection.query(
          queryString, [condition], (err, result) => {
            if (err) throw err;
            cb(result);
          },
        );
      },



    insertOne(table, column, value, cb) {
      const queryString = `
      insert into ${table} (${column.toString()})
      values (${addQuestionMark(value.length)})
      `;
      console.log(queryString);
  
      connection.query(
        queryString, value, (err, result) => {
          if (err) throw err;
          cb(result);
        },
      );
    },


    
    delete(table, condition, cb) {
      const queryString = `
          delete from ${table} 
          
          where id = ?
        `;
      console.log(queryString);
  
      connection.query(
        queryString, condition, (err, result) => {
          if (err) throw err;
          cb(result);
        },
      );
    },
  };
  
  module.exports = orm;