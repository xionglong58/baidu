var context = ["   the more you know", "    xionglong58", " github  ", "  freeCodeCamp"];

$(document).ready(function() {
    var countId = 0;
    // 随机产生颜色
    function getRandomColor() {
        var colorArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        var color = "";
        for (var i = 0; i < 6; i++) {
            color += colorArr[Math.floor(Math.random() * 16)];
        }
        return "#" + color;
    }

    $("#clear").click(function() {
        $(".text-show,.text-show1").html(null);
    });

    function getRandomTop() {
        var top = "";
        top = Math.floor(Math.random() * 100);

        return color + "%";
    }

    $("#clear").click(function() {
        $(".text-show,.text-show1").html(null);
    });

    // 获取show窗口大小
    var showHeight = 0;
    showHeight = $("#show").height();
    // alert(showHeight);
    context.map(item => {
        countId++;
        stringId = countId.toString();
        $(".text-show").append('<div id="' + stringId + '">' + item + "</div>");
        $("#" + stringId).each(function() { $(this).css("top", Math.round(Math.random() * showHeight * 0.9)) });
        $("#" + stringId).each(function() { $(this).css("fontSize", Math.round(Math.random() * 0.1 * showHeight)) });
        $("#" + stringId).each(function() { $(this).css("color", getRandomColor()) });
    });



    function send() {
        $("#send").click(function() {
            countId++;
            stringId = countId.toString();
            $(".text-show1").append('<div id="' + stringId + '">' + $("#control input").val() + "</div>");
            $("#" + stringId).each(function() { $(this).css("top", Math.round(Math.random() * showHeight * 0.9)) });
            $("#" + stringId).each(function() { $(this).css("fontSize", Math.round(Math.random() * 0.1 * showHeight)) });
            $("#" + stringId).each(function() { $(this).css("color", getRandomColor()) });
        });
    }
    send();
});