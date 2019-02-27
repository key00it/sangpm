$("#submit-btn").click(function() {
    if ($('#name').val() == "") {
        swal({
            title: "Error!",
            text: "You need enter your name!",
            icon: "error",
        });
    } else if ($('#email').val() == "") {
        swal({
            title: "Error!",
            text: "You need enter your email!",
            icon: "error",
        });
    } else if ($('#subject').val() == "") {
        swal({
            title: "Error!",
            text: "You need enter your subject!",
            icon: "error",
        });
    } else if ($('#message').val() == "") {
        swal({
            title: "Error!",
            text: "You need enter your message!",
            icon: "error",
        });
    } else {
        swal({
            title: "Success!",
            text: "Done!",
            icon: "success",
        });
    }
});

$("#subcribe-btn").click(function() {
    if ($('#inlineFormInputGroup').val() == "") {
        swal({
            title: "Eror!",
            text: "You need enter your email!",
            icon: "error",
        });
    } else {
        swal({
            title: "Success!",
            text: "Done!",
            icon: "success",
        });
    }
})