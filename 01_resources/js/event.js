$(document).ready(function() {
      document.write(5 + 6);
      $('#result').load('resume.html', function() {
          alert("loaded");
      });
  });s
