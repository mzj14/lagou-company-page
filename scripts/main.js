var groupNum = 4;

function showItems(index){
  for (i = 0; i < groupNum; i++){
    $(".company > li").eq(i).css({display: "none"});
  }
  $(".company > li").eq(index).css({display: "flex"});
}

function changeDisplay(dom, str1, str2){
  dom.css({display: str1});
  var object = dom.next("dd");
  while (object.length > 0){
    object.css({display: str2});
    object = object.next("dd");  
  }
}

$(document).ready(function(){
  var groupOrder = 0;
  showItems(groupOrder);
  /* control the slider */
  
  /*关于事件和动作绑定的规则：
    1.事件的绑定是一次性的，会在网页加载的过程中完成，事件方法的主体必须在绑定时被成功定位，否则事件和动作的绑定失效，而且是永久失效；
    2.事件在绑定时不会检测动作函数，而是在事件发生时执行动作函数，那么函数中jquery对象能否成功定位是随着执行时刻的不同而不同的。*/
  $("#pic-display .left").css({backgroundImage: "none"});
  
  $("#pic-display .right").click(function(){
    if (groupOrder < groupNum - 1)
    {
      groupOrder++;
      $("#pic-display .left").css({backgroundImage: "url(../images/arrow.png)"});
      showItems(groupOrder);
      if (groupOrder == groupNum - 1){
        $(this).css({backgroundImage: "none"});
      }
    }
  });
  
  $("#pic-display .left").click(function(){
    if (groupOrder > 0)
    {
      groupOrder--;
      $("#pic-display .right").css({backgroundImage: "url(../images/arrow.png)"});
      showItems(groupOrder);
      if (groupOrder == 0){
        $(this).css({backgroundImage: "none"});
      }
    }
  });
  
  /* control the hover of element in slider */
  $(".group li .intro").mouseenter(function(e){
    $(this).next(".mask").css({display: "flex"});
  });
  
  
  $(".group li .mask").mouseleave(function(e){
    $(this).css({display: "none"});
  });
  
  /* for drop down menu */
  /* hide elements at the beginning */
  var more = $("#kind .more");
  changeDisplay(more.parent(), "flex", "none");
  
  /* show the elements when click*/
  more.click(function(){
    changeDisplay($(this).parent("dd"), "none", "flex");
  });
  
  /* hide the elements when click*/
  var less = $("#kind .less");
  less.click(function(){
  changeDisplay($(this).closest("dl").find(".more").parent("dd"), "flex", "none");
  });
  
  var checkBox = $("#kind .interview");
  checkBox.click(function(){
    var str = $(this).css("backgroundImage");
    console.log(str);
    if (str.charAt(str.length - 15) == 'u'){
      $(this).css({backgroundImage: "url(../images/box-checked.png)"});
      console.log("1");
    } else {
      $(this).css({backgroundImage: "url(../images/box-unchecked.png)"});
      console.log("2");
    };
  });
  /* turn to all-city page */
  $("#kind .all-city").click(function(){
    window.location.href = "http://www.lagou.com/gongsi/allCity.html";
  });
  
  /* add title property to elements in venture */
  for (i = 0; i < $(".venture .idea").length; i++)
  {
    var object = $(".venture .idea").eq(i);
    object.attr({title: object.text()});
  }
  
  for (i = 0; i < $(".venture .type p").length; i++)
  {
    var object = $(".venture .type p").eq(i);
    object.attr({title: object.text()});
  }
  
  /* fadeIn or fadeOut for the images in footer */
  $("footer li a").hover(function(){
    $(this).prev("img").fadeTo(500, 1);
  },function(){
    $(this).prev("img").fadeTo(200, 0);
  });
});