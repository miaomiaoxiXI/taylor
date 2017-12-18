var app = angular.module("myApp",['ui.router']);
app.config(function($stateProvider){
    var dangAn = {
        name: 'dangAn',
        url: '/dangAn',
        templateUrl: 'dangAn.html',
    }
    $stateProvider.state(dangAn);
});

$(document).ready(function () {
    $(".items > a").click(function () {
        if($(this).hasClass("current")){
            $(this).next().animate({height:'hide'},500);
            $(this).removeClass("current");
        }else{
        $(this).addClass("current")
            .next().animate({height:'show'},500)
            .parent().siblings().children("a").removeClass("current")
            .next().animate({height:'hide'},500);
        return false;
    }
    });
});

$('.ui.dropdown')
.dropdown()
;