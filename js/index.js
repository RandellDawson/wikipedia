$(document).ready(function () {
  var displayResults = function displayResults(results) {
    var newArrayDataOfOjbect = Object.values(results);
    console.log(newArrayDataOfOjbect);


    var resultsHTML = '';
    for (var i = 0; i < results[1].length; i++) {
      resultsHTML += '<div class="result" data-url="' + results[3][i] + '">';
      resultsHTML += '<div class="title">' + results[1][i] + '</div>';
      resultsHTML += '<div class="summary">' + results[2][i] + '</div>';
      resultsHTML += '</div>';
    }
    $('#results').html(resultsHTML);
  };

  var doIt = function doIt(event) {
    var searchBox = $('#searchBox').val();
    var theUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&generator=search&exsentences=1&exintro=1&explaintext=1&gsrnamespace=0&exlimit=max&gsrwhat=text&gsrlimit=10&format=json&gsrsearch=' + searchBox;
    if (searchBox === '') $('#results').html('');
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&limit=10&search=' + searchBox,
      // url: theUrl,  
      // dataType: 'json',
      type: 'POST',
      headers: { 'Api-User-Agent': 'Randell Dawson FCC Wiki Viewer/1.0' },
      success: displayResults });

  };

  $('#results').html('');
  $(this).on('keyup', doIt);

  $(document).on({
    mouseenter: function mouseenter() {
      $(this).addClass('zoom');
    },
    mouseleave: function mouseleave() {
      $(this).removeClass('zoom');
    },
    click: function click() {
      window.open($(this).attr('data-url'));
    } },
  "div.result");

});