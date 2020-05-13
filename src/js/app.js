import barba from '@barba/core';
import { gsap } from "gsap";
import regeneratorRuntime from "regenerator-runtime";
import { delay, pageTransition, contentAnimation } from "./modules/transitions.js";

barba.init({
  sync: true,

  transitions: [{

    async leave(data) {
      const done = this.async();
      pageTransition();
      await delay(1000);
      done();
    },

    async enter(data) {
      contentAnimation();
    },

    async once(data) {
      contentAnimation();
    }

  }]
});