$(function() {
  // initiate ScrollMagic
  let controller = new ScrollMagic.Controller();

  let scene1 = new ScrollMagic.Scene({
    triggerElement: '#scene-1',
    triggerHook: 'onLeave',
    offset: 200
  })
  // .setPin("#scene-1")
  .setVelocity("#scene-1 .blurred-image", {opacity: 1}, {duration: 500, easing: "linear"})
  .addTo(controller);

});
