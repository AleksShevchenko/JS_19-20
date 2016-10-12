$(document).ready(function() {

 $(".slider").each(function () { // обрабатываем каждый слайдер
  
  var obj = $(this);

  $(obj).append("<div class='nav'></div>");
  
  $(obj).find("li").each(function () {
   	
   	$(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
   	$(this).addClass("slider"+$(this).index());

  });

  $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
 
 });
});

function sliderJS (obj, sl) { // slider function

 var ul = $(sl).find("ul"); // находим блок
 var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
 var step = $(bl).width(); // ширина объекта

 $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
};


$(document).on("click", ".slider .nav span", function() { // slider click navigate

 var sl = $(this).closest(".slider"); // находим, в каком блоке был клик

 $(sl).find("span").removeClass("on"); // убираем активный элемент
 $(this).addClass("on"); // делаем активным текущий
 var obj = $(this).attr("rel"); // узнаем его номер
 sliderJS(obj, sl); // слайдим

 return false;

});

// ======================Accordeon======================

$(document).ready(function() {

 var accordion = $('.accordion__button');
 var panel = $('.accordion__panel');
 var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
accordion.removeClass('active');
panel.removeClass('show');

        $(this).addClass('active');
        $(this).next('.accordion__panel').addClass('show');
       
  }
}




// ====================loDash==================================

var newInfo = localStorage.getItem('myData');
var myInfo = JSON.parse(newInfo);
console.log("Массив объектов из DATA JSON", myInfo);

var skills  = [];
myInfo.forEach(function (people) {
    skills = _.concat(skills, people.skills);
    skills = _.uniq(skills);
    skills = _.sortBy(skills);
  });

var name = [];
myInfo.forEach(function (people) {
    name = _.sortBy(myInfo, 'friends.length');
    name = _.map(name, 'name');
})

var friends = [];
myInfo.forEach(function (people) {
    friends = _.flattenDeep(_.map(myInfo, 'friends'));
    friends = _.uniq(_.map(friends, 'name'));
    friends = _.sortBy(friends);
})

/*results*/
console.log('skills =', skills);
console.log('name =', name);
console.log('friends =', friends);








});



