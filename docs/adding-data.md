# Adding more data

To add more data to conformance-status-page:

1. Add the data required to an existing or new JSON endpoint on the `conformance-services` web server module.
2. Add a route to the `routes` module that fetches the data from `conformance-services`.
3. Add a view to render the data

Optionally if data is to be loaded in-page:

4. Add a handler on the client side JS `oa-api-dashboard.js` that calls the new route and adds the result to the page
