import React, { useRef, useEffect, useState } from "react";
import "./Animation.css";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import useSocket, { socket } from "../../utils/socket/socketService";
import { ReactComponent as AnimationSVG } from "./mainSVG.svg";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, Physics2DPlugin);

const Animation = ({ planeStatus }) => {
  /** Holding socket received data in plane state */

  /** Socket DOM Reference  */
  const svgRef = useRef(null);

  /** Socket Data connection - Start */

  const gameStatus = planeStatus
  /** Socket Data connection - End */

  /** Timelines Reference to control - Start */
  const timelineOneRef = useRef(null);
  const timelineTwoRef = useRef(null);
  const timelineThreeRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  /** Timelines Reference to control - Start */

  /** Setting time scale of animation to half of it - Start */
  gsap.globalTimeline.timeScale(0.5);
  /** Setting time scale of animation to half of it - End */

  /** Timeline Creation, Partical creation and animation, accessing svg to animate - Start */
  useEffect(() => {
    const svgElement = svgRef.current;
    const linePath = svgElement.querySelector(".linePath");
    const pContainer = svgElement.querySelector(".pContainer");
    const headCircle = svgElement.querySelector("#headCircle");
    const head = svgElement.querySelector(".head");
    const elementsToHide = document.querySelectorAll(
      "#circ, #cross, #heart, #star"
    );
    elementsToHide.forEach((element) => {
      gsap.set(element, { opacity: 0 }); // Set opacity to 0
    });

    /** Particle Creation - Start  */
    const colors = [
      "#E8F6F8",
      "#ACE8F8",
      "#F6FBFE",
      "#A2CBDC",
      "#B74551",
      "#5DBA72",
      "#910B28",
      "#446D39",
    ];
    const particleShapes = ["#circ", "#cross", "#heart"];
    const maxParticles = 10;

    const createParticle = (x, y) => {
      const shape =
        particleShapes[Math.floor(Math.random() * particleShapes.length)];
      const particle = svgElement.querySelector(shape).cloneNode(true);
      particle.setAttribute(
        "fill",
        colors[Math.floor(Math.random() * colors.length)]
      );
      particle.setAttribute("class", "particle");
      svgElement.appendChild(particle);

      gsap.set(particle, {
        x: x,
        y: y,
        transformOrigin: "50% 50%",
        scale: gsap.utils.random(0.5, 3, 0.001, true),
        opacity: 1,
      });

      gsap.to(particle, {
        duration: 1,
        opacity: 1,
        physics2D: {
          velocity: 100 + 100 * Math.random(),
          angle: gsap.utils.random(-220, 220),
          gravity: gsap.utils.random(500, 1000),
        },
        scale: 0,
        rotation: gsap.utils.random(-123, 360),
        ease: "power1",
        onComplete: () => particle.remove(),
      });
    };
    /** Particle Creation - End  */

    /** Timeline Creation - Start */
    const timelineOne = gsap.timeline({
      paused: true,
      repeat: 0,
      delay: 0,
      onStart: () => {
        if (!animationPlayed) {
          setAnimationPlayed(true);
        }
        console.log("on start animation played : ", animationPlayed);
      },
      onComplete: () => {
        console.log("Animation played : ", animationPlayed);
      },
    });
    timelineOne
      .fromTo(
        linePath,
        { drawSVG: "0%" },
        { duration: 2, drawSVG: "100%", ease: "fade" },
        0
      )
      .to(
        [headCircle, head],
        {
          duration: 2,
          motionPath: { path: linePath, autoRotate: false },
          ease: "fade",
        },
        0
      );

    const timelineTwo = gsap.timeline({
      paused: true,
      repeat: 0,
      delay: 0,
    });

    timelineTwo.to(
      pContainer,
      {
        duration: 2,
        motionPath: { path: linePath, autoRotate: false },
        ease: "fade",
      },
      0
    );

    const timelineThree = gsap.timeline({
      paused: true,
      delay: 0,
      repeat: 0,
      onUpdate: () => {
        const x = gsap.getProperty(pContainer, "x");
        const y = gsap.getProperty(pContainer, "y");
        for (let i = 0; i < maxParticles / 10; i++) {
          createParticle(x, y);
        }
      },
      onComplete: () => {
        console.log("finished t 3 playing");
      },
    });

    timelineThree.to(pContainer, {
      duration: 250,
    });

    timelineOneRef.current = timelineOne;
    timelineTwoRef.current = timelineTwo;
    timelineThreeRef.current = timelineThree;
    /** Timeline Creation - End */
  }, [animationPlayed]);
  /** Timeline Creation, Partical creation and animation, accessing svg to animate - End */

  /** Timeline controls - Start */

  useEffect(() => {
    const timelineOne = timelineOneRef.current;
    const timelineTwo = timelineTwoRef.current;
    const timelineThree = timelineThreeRef.current;

    if (timelineOne && timelineTwo && timelineThree) {
      if (gameStatus == 1) {
        if (!animationPlayed) {
          timelineOne.play();
          timelineTwo.play();
          timelineThree.play();
        } else if (animationPlayed) {
          timelineOne.restart();
          timelineTwo.restart();
          timelineThree.restart();
        }
      } else if (gameStatus == 2) {
        timelineOne.pause();
        timelineTwo.pause();
      }
    }
    return () => {
      // Clean up function to handle component unmounting or state changes
      if (timelineThree) {
        timelineThree.kill(); // Ensure timelineThree is killed on unmount or state change
      }
    };
  }, [gameStatus]);
  /** Timeline controls - End */

  /** Show / Hide elements as per game status - Start */
  useEffect(() => {
    const svgElement = svgRef.current;
    const linePath = svgElement.querySelector(".linePath");
    const headCircle = svgElement.querySelector("#headCircle");
    const head = svgElement.querySelector(".head");
    const lineBackground = svgElement.querySelector(".lineBackground");

    if (gameStatus == 0) {
      gsap.set(head, { x: 0 });
      gsap.set([headCircle, linePath, lineBackground], {
        opacity: 0,
      });
    } else if (gameStatus == 1) {
      gsap.set([headCircle, linePath, head, lineBackground], {
        opacity: 1,
      });
    } else if (gameStatus == 2) {
      gsap.set([headCircle, head, lineBackground], {
        opacity: 1,
      });
      // gsap.set(linePath, { drawSVG: "100%", opacity: 1 });
    }
  }, [gameStatus]);
  /** Show / Hide elements as per game status - End */
  return (
    <div className="canvas" >
      <AnimationSVG ref={svgRef} />
      {gameStatus == 0 && (
        <div className="progress-container" >
          <div className="progress-bar"></div>
        </div>
      )}
    </div>
  );
};

export default Animation;
