$(document).ready(function() {
    // Load destinations from the server
    $.ajax({
      url: 'localhost:3000/destinations',
      method: 'GET',
      success: function(response) {
        // Initialize autocomplete for 'from' input field
        $('#from').autocomplete({
          source: response
        });
  
        // Initialize autocomplete for 'to' input field
        $('#to').autocomplete({
          source: response
        });
      },
      error: function() {
        console.log('Failed to load destinations.');
      }
    });
  });
  