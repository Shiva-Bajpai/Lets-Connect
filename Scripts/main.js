
/* 
██╗░░░██╗██╗███╗░░██╗░█████╗░██████╗░
██║░░░██║██║████╗░██║██╔══██╗██╔══██╗
╚██╗░██╔╝██║██╔██╗██║██║░░██║██║░░██║
░╚████╔╝░██║██║╚████║██║░░██║██║░░██║
░░╚██╔╝░░██║██║░╚███║╚█████╔╝██████╔╝
░░░╚═╝░░░╚═╝╚═╝░░╚══╝░╚════╝░╚═════╝░
░░░░░██╗░█████╗░███╗░░██╗░██████╗░██╗██████╗░
░░░░░██║██╔══██╗████╗░██║██╔════╝░██║██╔══██╗
░░░░░██║███████║██╔██╗██║██║░░██╗░██║██║░░██║
██╗░░██║██╔══██║██║╚████║██║░░╚██╗██║██║░░██║
╚█████╔╝██║░░██║██║░╚███║╚██████╔╝██║██████╔╝
░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝╚═════╝░ */
particlesJS("bg", {
    "particles": {
      "number": {
        "value": 480,
        "density": {
          "enable": true,
          "value_area": 150
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.1,
        "width": 0.1
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "left",
        "random": false,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  /* ---- stats.js config ---- */
  
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);