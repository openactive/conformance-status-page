import express from 'express';
import fetch from 'node-fetch';

var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

  const statusUrl = "http://localhost:8000/publishers/status";
  let statusData = {};
  let error = undefined;

  try {
    let res = await fetch(statusUrl);
    if (!res.ok){
      throw Error(res.status +" : "+ res.statusText);
    }

    statusData = await res.json();

  } catch(err) {
    error = err;
  }

  res.render('index', {
    statusData: statusData,
    error: error,
   });
});


export default router;
