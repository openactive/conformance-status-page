# conformance-status-page
Web application displaying data availability and profile conformity of OpenActive endpoints

Using `node` version `13.9`. Project uses standard `express-generator` conventions.

# Install

`$ npm install`

# Run the app (developer)

`$ npm run start-dev `

# Run the app (production)

`$ npm run start`

# Configuration

## Environment variables

* `CONFORMANCE_SERVER_URL` the url to the root of the [conformance services](https://github.com/openactive/conformance-services) server. For example " https://conformance-services.herokuapp.com". Note **no trailing slash** on the URL.
*  `PORT` the web server port


# Heroku for production

## Initial Setup

Create a new app in the "Europe" region.

Go to "Settings" and "Reveal Config Vars".

Add a Config var and value named `CONFORMANCE_SERVER_URL` for the corresponding Environment variable.

Do a deploy. If you link your GitHub account you can press a button in the web interface to do this, or you set up the heroku CLI tool. 
Either is fine.

That's it!

## Updating app

Deploy the latest code.

If you link your GitHub account you can press a button in the web interface to do this, or you set up the heroku CLI tool. 
Either is fine.


