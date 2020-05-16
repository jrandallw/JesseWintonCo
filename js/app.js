import barba from '@barba/core';
import 'babel-polyfill';
import { delay, pageTransition, workIndexAnimation } from "./modules/transitions.js";

barba.init({
  transitions: [{
    name: 'work-index',
    async leave(data) {
      const done = this.async();
      pageTransition();
      await delay(1000);
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