$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault();
    const name = $("#yourName").val();
    const address1 = $("#street").val();
    const address2 = $("#city").val();

  });
});