import express from 'express';
import fetch from 'node-fetch';
import hbs from 'hbs';

var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const statusUrl = process.env.STATUS_DATA_URL || "http://localhost:8000/publishers/status";
  let statusData = {};
  let error = undefined;

  hbs.registerHelper('licenseSnippet', function (license) {
    /* Add more licenses here when needed  */
    if (license.indexOf("https://creativecommons.org/licenses/by/4.0") != -1){
      const template = hbs.compile('<a href="{{license}}"><img src="images/by.png" alt="CC BY 4.0" style="height: 15px" /><br />CC BY 4.0</a>');
      return template({license : license});
    }
  });

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
