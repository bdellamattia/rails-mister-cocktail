import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["overrated", "expensive", "out-of-fashion"],
    typeSpeed: 90,
    loop: true
  });

}

// function loadDynamicBannerText2() {
//   new Typed('#banner-typed-text-2', {
//     strings: ["Mojito?", "Manhattan?", "Caïpi?", "Spritz?", "Sex on the beach?"],
//     typeSpeed: 90,
//     loop: true
//   });
// }

export { loadDynamicBannerText, loadDynamicBannerText2 };


