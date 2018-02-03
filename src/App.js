import React, { Component } from 'react';
import './App.css';
import QuoteMachine from './QuoteMachine';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          params= { {
            "particles": {
              "number": {
                "value": 43,
                "density": {
                  "enable": true,
                  "value_area": 631.3181133058181
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 2,
                  "color": "#999999"
                },
                "polygon": {
                  "nb_sides": 8
                },
                "image": {
                  "src": "",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.6413648243462086,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0,
                  "sync": false
                }
              },
              "size": {
                "value": 2,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 4,
                  "size_min": 0.3,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 38,
                "color": "#30CE91",
                "opacity": 0.4,
                "width": 1.7637532669520732
              },
              "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 1262.6362266116362,
                  "rotateY": 552.4033491425909
                }
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 97.4492654761615,
                  "line_linked": {
                    "opacity": 0.15629755764500713
                  }
                },
                "bubble": {
                  "distance": 158.35505639876246,
                  "size": 2,
                  "duration": 0.2,
                  "opacity": 0,
                  "speed": 3
                },
                "repulse": {
                  "distance": 81.2077212301346,
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
          }}
        />
        <QuoteMachine />
      </div>
    );
  }
}

export default App;
