import barba from '@barba/core';
import { delay, pageTransition, workIndexAnimation } from "./modules/transitions.js";
import regeneratorRuntime from "regenerator-runtime";

barba.init({
  sync: false,
  transitions: [{
    name: 'swipe-transition',
    async leave(data) {
      const done = this.async();
      pageTransition();
      await delay(500);
      window.scrollTo(0, 0);
      done();
    },
    async enter(data) { 
      workIndexAnimation(); 
    }
  }]
});

document.addEventListener('DOMContentLoaded', function() {
  workIndexAnimation();
}, false);