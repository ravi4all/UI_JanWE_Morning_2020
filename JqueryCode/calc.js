$(document).ready(function () {
    $("button").on("click", function() {
        let opr = $(this).html();
        let f_num = $("#box_1").val();
        let s_num = $("#box_2").val();
        let expression = f_num + opr + s_num;
        let result = eval(expression);
        $("#box_3").val(result);
    });
});