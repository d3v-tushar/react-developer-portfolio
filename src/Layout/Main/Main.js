import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Template/Footer";
import Header from "./../../Pages/Template/Header";
import Particles from "react-tsparticles";

const Main = () => {
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            "fullScreen": {
                "zIndex": 1
            },
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "area": 800
                    }
                },
                "color": {
                    "value": "#ff0000",
                    "animation": {
                        "enable": true,
                        "speed": 15,
                        "sync": true
                    }
                },
                "opacity": {
                    "value": 0.5
                },
                "size": {
                    "value": {
                        "min": 0.1,
                        "max": 3
                    }
                },
                "links": {
                    "enable": true,
                    "distance": 100,
                    "color": "#ffffff",
                    "opacity": 0.5,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "outModes": {
                        "default": "out"
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onHover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onClick": {
                        "enable": true,
                        "mode": "push"
                    }
                },
                "modes": {
                    "repulse": {
                        "distance": 100
                    },
                    "push": {
                        "quantity": 4
                    }
                }
            },
            "background": {
                "color": ""
            }
        }}
      />
    </div>
  );
};

export default Main;
