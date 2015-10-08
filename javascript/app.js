$('#signup-form').on('submit', function(event) {
    var pwd = $("input[name=password]").val();
    var pwd2 = $("input[name=password2]").val();
    
    if (pwd.length < 10) {
        alert("Your password should have at least 10 characters");
        event.preventDefault();
    }
    else if (pwd !== pwd2) {
        alert("Your confirm password does not match your password");
        event.preventDefault();
    }
});