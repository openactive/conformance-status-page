$(function() {

  $(".datasets-table").tablesorter({
    theme : "bootstrap",
    sortList: [[0,0]],
    headers: { 5: {sorter: false}, 7: {sorter: false}},
    widthFixed: true,

    // widget code contained in the jquery.tablesorter.widgets.js file
    // use the zebra stripe widget if you plan on hiding any rows (filter widget)
    // the uitheme widget is NOT REQUIRED!
    widgets : [ "filter", "columns", "zebra" ],

    widgetOptions : {
      // using the default zebra striping class name, so it actually isn't included in the theme variable above
      // this is ONLY needed for bootstrap theming if you are using the filter widget, because rows are hidden
      zebra : ["even", "odd"],

      // class names added to columns when sorted
      columns: [ "primary", "secondary", "tertiary" ],

      // reset filters button
      filter_reset : ".reset",

      // extra css class name (string or array) added to the filter element (input or select)
      filter_cssFilter: [
        'form-control',
        'form-control',
        'form-control custom-select', // select needs custom class names :(
        'form-control',
        'form-control',
        'form-control',
        'form-control'
      ]

    }
  });

  $('.summary-modals div.modal').each(function(){
    $(this).on('show.bs.modal ', function (e) {
      var url = '/summary/' + $(this).attr('data-dataset-key');
      var bodyElement = $(this).find('div.modal-body');
      var isEmpty = true;
      isEmpty = ($(bodyElement).children()[0].className != 'container');
      if (isEmpty){
        $.ajax({ url: url, method: 'GET', 
          success: function(body){ bodyElement.html(body); }
        });  
      }
    });
  });

});
