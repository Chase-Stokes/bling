$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault();
    const name = $("#yourName").val();
    const address1 = $("#street").val();
    const address2 = $("#city").val();
    $(".yourName").text(name);
    $(".street").text(address1);
    $(".city").text(address2);
    $("#output").show();

  });
});