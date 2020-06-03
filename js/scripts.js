$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const name = $("input#favname").val();
    const dob = $("#favdob").val();
    const color = $("#favcolor").val();
    const season = $("#favseason").val();
    const pet = $("input:radio[name=pet]:checked").val();
  });


});

