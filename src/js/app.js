import barba from '@barba/core';
import { gsap } from 'gsap';
//import { delay, pageTransition, contentAnimation } from "./modules/transitions.js";
import regeneratorRuntime from "regenerator-runtime";

barba.init({
  transitions: [{
    name: 'opacity-transition',
    async leave(data) {
      // const done = this.async();
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        delay: 1, opacity: 0
      });
    }
  }]
});