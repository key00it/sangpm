// $("#send-mess").validate({
//     rules: {
//         name: {
//             required: true,
//             minlength: 4
//         } ,
//         email: {
//             required: true,
//             email: true
//         },
//         subject: "required",
//         message: "required",
//     },
//     messages: {
//         name: "Please enter your name",
//         ten: "Vui lòng nhập tên",
//         diachi: {
//             required: "Vui lòng nhập địa chỉ",
//             minlength: "Địa chỉ quá ngắn"
//         }
//     }
// });

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