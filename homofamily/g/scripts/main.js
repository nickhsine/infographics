"use strict";$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$(document).ready(function(){for(var e=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onLeave"}}),n=document.querySelectorAll("section.scroll-panel"),t=[3,6,9],o=1;o<n.length-2;o++)!function(n){var o=n+1;if($("#slide"+(n+1)+" .content-container").addClass("stay-fixed"),-1===t.indexOf(o)){var a=(new TimelineMax).fromTo("#slide"+o+" .content-container",2,{opacity:0,scale:.8},{opacity:1,scale:1,ease:Sine.easeIn},0).fromTo("#slide"+(o-1)+" .content-container",3,{opacity:.8,scale:.6},{opacity:0,scale:.5,ease:Power4.easeOut},0).to("#slide"+o+" .content-container",3,{css:{opacity:1,scale:1},ease:Quad.easeInOut}).to("#slide"+o+" .content-container .main-img",2,{css:{y:"-50%",scale:1.2},ease:Quad.easeInOut}).to("#slide"+o+" .content-container",2,{css:{opacity:.8,scale:.6},ease:Quad.easeInOut});new ScrollMagic.Scene({triggerElement:"#slide"+o,duration:"150%",triggerHook:"onEnter"}).setPin("#slide"+o).setTween(a).on("start",function(){console.log("#slide"+o),$("#slide"+o+" .content-container").addClass("content-show")}).addTo(e)}}(o);for(var o=0;o<t.length;o++)!function(n){var o=t[n];console.log("curIndex",o);var a=(new TimelineMax).fromTo("#slide"+o+" .content-container",2,{opacity:0,scale:.8},{opacity:1,scale:1,ease:Sine.easeIn},0).fromTo("#slide"+(o-1)+" .content-container",3,{opacity:.8,scale:.6},{opacity:0,scale:.5,ease:Power4.easeOut},0).to("#slide"+o+" .content-container",3,{css:{opacity:1,scale:1},ease:Quad.easeInOut}).to("#slide"+o+" .content-container .sub-group, #slide"+o+" h2",2,{css:{y:"-20%",scale:.9},ease:Quad.easeInOut}).to("#slide"+o+" .content-container",1,{css:{opacity:.8,scale:1},ease:Quad.easeInOut});new ScrollMagic.Scene({triggerElement:"#slide"+o,duration:"150%",triggerHook:"onEnter"}).setPin("#slide"+o).setTween(a).on("start",function(){console.log("#slide"+o),$("#slide"+o+" .content-container").addClass("content-show")}).addTo(e)}(o);$("#slide14 .content-container").addClass("stay-fixed");var a=(new TimelineMax).fromTo("#slide14 .content-container",2,{opacity:0,scale:.8},{opacity:1,scale:1,background:"#FFC543",ease:Sine.easeIn},0).fromTo("#slide13 .content-container",2,{opacity:.25,scale:.5},{opacity:0,scale:.5,ease:Power4.easeOut},0).to("#slide14 .content-container",3,{css:{opacity:1,scale:1},ease:Quad.easeInOut}).to("#slide14 .content-container .main-img-overlay",2,{css:{y:"50%",scale:1.3,opacity:.6},ease:Quad.easeInOut}).to("#slide14 .content-container",1,{css:{opacity:0,background:"white"},ease:Quad.easeInOut});new ScrollMagic.Scene({triggerElement:"#slide14",duration:"260%",triggerHook:"onLeave"}).setPin("#slide-end").setTween(a).on("start",function(){$("#slide14 .content-container").addClass("content-show")}).addTo(e)});