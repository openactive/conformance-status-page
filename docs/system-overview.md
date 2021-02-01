# System Overview

The Open Active Conformance Status Page is a NodeJS [Express](https://expressjs.com/) web application that renders data from  [Conformance Services](https://github.com/openactive/conformance-services).

## Templates

conformance-status-page uses the [hbs view engine](https://www.npmjs.com/package/hbs). Which uses the [Handlebars](https://handlebarsjs.com/guide/) templating language.

## A Typical request

Apart from the initial page (which requires the fetch to `conformance-services` before it can be responded to) the requests follow this pattern:

1. Page is rendered and sent to client
2. Client side makes HTTP request (using JQuery/AJAX) for a detail on a data item (such as a publisher) via user interaction received
3. conformance-status-page application fetches data from `conformance-services`' [JSON end point](https://github.com/openactive/conformance-services/blob/master/docs/understanding-the-services/stage/http-apis.md)
4. Renders data using template
5. Client side JS adds/updates the rendered result on page

## Client side JS

The client side events are handled by `oa-api-dashboard.js` this processes the asynchronous loading of the server side rendered items.