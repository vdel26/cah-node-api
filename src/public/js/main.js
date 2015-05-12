$(function() {
  function generateCombination() {
    $.get('/api/question')
      .done(function(data) {
        $('#b').text(data);
      });
    $.get('/api/answer')
      .done(function(data) {
        $('#w').text(data);
      })
  }
  $('#generate').click(function(e) {
    generateCombination();
  });
  generateCombination();
})
