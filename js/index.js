$(document).ready(function () {
  // Popup form animation
  $(".signup_btn").on("click", function (e) {
    e.preventDefault();

    $(".landing").addClass("fade");
    setTimeout(function () {
      $(".landing").addClass("out");
      $(".signup_popup").addClass("active");
    }, 50);
  });

  // GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
  });

  gsap.from(
    ".hero_banner img",
    {
      scrollTrigger: ".hero_section",
      duration: 0.5,
      opacity: 0,
      scale: "1.2",
    },
    0
  );
  gsap.from(
    ".item.half",
    {
      scrollTrigger: ".grid_box",
      duration: 0.5,
      x: "-100",
      stagger: 0.1,
    },
    0
  );
  gsap.from(
    ".item.down",
    {
      scrollTrigger: ".grid_box",
      duration: 0.5,
      y: "100",
    },
    0
  );
  gsap.from(
    ".item.right",
    {
      scrollTrigger: ".grid_box",
      duration: 0.5,
      x: "100",
    },
    0
  );
  gsap.from(
    ".grid_wrapp .item",
    {
      scrollTrigger: ".grid_wrapp",
      duration: 0.5,
      opacity: 0,
      y: "30",
      stagger: 0.2,
    },
    0
  );
});
