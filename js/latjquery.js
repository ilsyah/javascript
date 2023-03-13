// $( document ).ready(function() {
//     console.log("siap!");
// });

$(function() {
    $("#isi").html("coba");

    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("belajar");
    });

    $("#isi").mouseleave(function () { 
        alert("coba");
        console.log("coba");
    });
});

