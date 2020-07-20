import express from 'express';
import fetch from 'node-fetch';
import hbs from 'hbs';

var router = express.Router();

const conformServerUrl = process.env.CONFORMANCE_SERVER_URL || "http://localhost:8000";
/* GET home page. */
router.get('/', async function(req, res, next) {
  let statusData = {};
  let error = undefined;

  const statusUrl = conformServerUrl + '/publishers/status'

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
    console.warn(err);
  }

  res.render('index', {
    statusData: statusData,
    statusUrl: statusUrl,
    error: error,
   });
});


router.get('/details_snippet/publisher/:publisherId', async function(req, res, next) {
  let error = undefined;

  const publisherDetailsUrl = conformServerUrl + '/publisher/'+req.params.publisherId;
  let publisherDetails;

  try {
    let res = await fetch(publisherDetailsUrl);
    if (!res.ok){
      throw Error(res.status +" : "+ res.statusText);
    }

    publisherDetails = await res.json();

  } catch(err) {
    error = err;
    console.warn(err);
  }

  res.render('publisher_detail', {
    publisherDetails: publisherDetails,
    publisherDetailsUrl: publisherDetailsUrl,
    error: error,
    layout: null,
   });

});

export default router;
