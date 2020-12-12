var express = require('express');
var burgers = require('../models/burgers');

const router = express.Router();


router.get('/', (req, res) => {

  burgers.select((result) => {

    var burgerObject = {

      burgers: result,
    };
    
    


    res.render('index', burgerObject);
  });
});


router.post('/api/burgers', (req, res) => {
  console.log(req.body);
  burgers.create(['burger_name'], [req.body.burger], (result) => {
    res.json({ id: result.insertId });
  });
});



router.put('/api/burgers/:id', (req, res) => {
  


  burgers.update(req.params.id, (result) => {
    
    if (result.rowsModified === 0) {
      
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete('/api/burgers/delete/:id', (req, res) => {
  burgers.delete(req.params.id, (result) => {
    console.log(result);
    if (result.rowsModified === 0) {
      
      return res.status(404).end();
    }
    res.status(200).end();
  });
});



module.exports = router;
