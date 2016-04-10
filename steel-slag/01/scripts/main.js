"use strict";function enbaleSmoothScroll(){$('a[href*="#chapter"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("body").animate({scrollTop:e.offset().top},800),!1}})}function initMap(){var e=new google.maps.StyledMapType(styles,{name:"Styled Map"}),t={zoom:12,draggable:!0,scrollwheel:!1,center:new google.maps.LatLng(22.8702492,120.4703258),mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}};map=new google.maps.Map(document.getElementById("map"),t),map.mapTypes.set("map_style",e),map.setMapTypeId("map_style"),map.setOptions({styles:styles,mapTypeControl:!1});var a="images/layer_agriculture.svg",o="images/layer_specific_agriculture.svg",n="images/layer_mountain.svg",r="images/layer_contour.svg",i={north:23.0079,south:22.7462,east:120.679,west:120.2666},l={opacity:.9};tapWaterLayer=new google.maps.Data,tapWaterLayer.loadGeoJson("assets/TWQPROT.json"),tapWaterLayer.setStyle({fillColor:"#c7997d",strokeWeight:0,opacity:.25}),tapWaterLayer.setMap(map),groundwaterLayer=new google.maps.Data,groundwaterLayer.loadGeoJson("assets/GWREGION.json"),groundwaterLayer.setStyle({fillColor:"#9cb5bc",strokeWeight:0,opacity:.25}),groundwaterLayer.setMap(map),agricultureOverlay=new google.maps.GroundOverlay(a,i,l),agricultureOverlay.setMap(map),specificOverlay=new google.maps.GroundOverlay(o,i,l),specificOverlay.setMap(map),mountainOverlay=new google.maps.GroundOverlay(n,i,l),mountainOverlay.setMap(map),contourOverlay=new google.maps.GroundOverlay(r,i,l),contourOverlay.setMap(map);var s=new google.maps.Marker({position:new google.maps.LatLng(22.949986,120.516294),title:"旗山污染場址",icon:"images/map-icon.png",animation:google.maps.Animation.DROP});s.setMap(map)}function setToggle(e,t){e?t.setMap(map):t.setMap(null)}function setAgricultureToggle(){agricultureOn=!agricultureOn,setToggle(agricultureOn,agricultureOverlay)}function setSpecificToggle(){specificOn=!specificOn,setToggle(specificOn,specificOverlay)}function setMountainToggle(){mountainOn=!mountainOn,setToggle(mountainOn,mountainOverlay)}function setTapWaterToggle(){tapWaterOn=!tapWaterOn,setToggle(tapWaterOn,tapWaterLayer)}function setGroundWaterToggle(){groundwaterOn=!groundwaterOn,setToggle(groundwaterOn,groundwaterLayer)}var ANIMATION={fadeInUp:{opacity:[1,0],translateY:[0,"100%"]}};$(document).ready(function(){function e(){var e=$("#environment-slider");$(".carousel-inner .item:first").hasClass("active")?(e.find(".left-btn").attr("src","images/left_btn.svg"),e.find(".right-btn").attr("src","images/right_btn_active.svg")):$(".carousel-inner .item:last").hasClass("active")?(e.find(".left-btn").attr("src","images/left_btn_active.svg"),e.find(".right-btn").attr("src","images/right_btn.svg")):(e.find(".left-btn").attr("src","images/left_btn_active.svg"),e.find(".right-btn").attr("src","images/right_btn_active.svg"))}var t=!1;$('[data-toggle="tooltip"]').tooltip(),$(".burger-icon").click(function(){t=!t,t?($(".nav-container").show(),$(".burger-icon").addClass("open")):($(".nav-container").hide(),$(".burger-icon").removeClass("open"))});var a=$(".nav-icon").width();$(".nav-icon").css({"min-height":a+"px"});var o=new ScrollMagic.Controller;enbaleSmoothScroll();new ScrollMagic.Scene({triggerElement:"#chapter-intro",triggerHook:"onLeave",duration:"100%"}).setClassToggle("#btn-banana","active").addTo(o),new ScrollMagic.Scene({triggerElement:"#chapter-middle",triggerHook:"onEnter",offset:100,duration:"100%"}).setClassToggle("#btn-satellitemap","active").setVelocity("#chapter-middle .blurred-image",{opacity:1},{duration:500,easing:"linear"}).addTo(o),new ScrollMagic.Scene({triggerElement:"#chapter-truck",triggerHook:"onEnter",offset:100,duration:"100%"}).setClassToggle("#btn-truck","active").addTo(o),new ScrollMagic.Scene({triggerElement:"#chapter-bottom",triggerHook:"onLeave",offset:"50%"}).setVelocity("#chapter-bottom .blurred-image",{opacity:1},{duration:500,easing:"linear"}).addTo(o),new ScrollMagic.Scene({triggerElement:"#scene-4",triggerHook:"onLeave",offset:10}).addTo(o),new ScrollMagic.Scene({triggerElement:"#g-soil",triggerHook:"onEnter",offset:0}).setVelocity("#g-soil",{translateX:0},{duration:0,complete:function(){$(".soil-bottom").velocity(ANIMATION.fadeInUp,{delay:100,duration:300}),$(".soil-middle").velocity(ANIMATION.fadeInUp,{delay:100,duration:600}),$(".soil-top").velocity(ANIMATION.fadeInUp,{delay:100,duration:1e3}),$(".soil-tree").velocity(ANIMATION.fadeInUp,{delay:100,duration:1200})}}).addTo(o),new ScrollMagic.Scene({triggerElement:"#scene-google-map",triggerHook:"onLeave",offset:"50%"}).addTo(o);$(".carousel").carousel({interval:2e3}),$(".carousel").bcSwipe({threshold:50}),$("#environment-slider").on("slid.bs.carousel",e),$(".nav-icon").mouseover(function(){var e=this.id;switch($(".nav-description").velocity({top:$(this).position().top,opacity:1},{easing:"easeInSine",duration:300}),e){case"btn-banana":$("#nav-hover-id").text("1"),$("#nav-title").text("旗山香蕉樹旁的爐碴");break;case"btn-satellitemap":$("#nav-hover-id").text("2"),$("#nav-title").text("農地淪陷事件簿");break;case"btn-truck":$("#nav-hover-id").text("3"),$("#nav-title").text("清走怎麼這麼難？");break;case"btn-government":$("#nav-hover-id").text("4"),$("#nav-title").text("中央出來面對！");break;case"btn-rocks":$("#nav-hover-id").text("5"),$("#nav-title").text("爐碴家族圖鑑");break;case"btn-protester":$("#nav-hover-id").text("6"),$("#nav-title").text("大家都驚死，只有她往前衝")}}),$(".nav-icon").mouseout(function(){$(".nav-description").velocity("stop",!0),$(".nav-description").velocity({opacity:0},{easing:"easeInSine",duration:50})}),$(".birdview-slider").css({height:.7*$(".birdview-img-box").height(),transform:"translate(0,"+.15*$(".birdview-img-box").height()+"px)"});var n=$("#ex4").slider({reversed:!0});n.slider("setValue",20),$("#ex4").change(function(){console.log("birdviewSlider",n.slider("getValue"))})});var styles=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]}],map=void 0,agricultureOverlay=void 0,specificOverlay=void 0,mountainOverlay=void 0,contourOverlay=void 0,tapWaterLayer=void 0,groundwaterLayer=void 0,agricultureOn=!0,specificOn=!0,mountainOn=!0,contourOn=!0,tapWaterOn=void 0,groundwaterOn=void 0;