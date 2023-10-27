function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function showConPass() {
    var x = document.getElementById("confirmPass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
// $(".reveal").on('click',function() {
//     var $pwd = $(".pwd");
//     if ($pwd.attr('type') === 'password') {
//         $pwd.attr('type', 'text');
//     } else {
//         $pwd.attr('type', 'password');
//     }
// });