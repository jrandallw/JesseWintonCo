import barba from '@barba/core';
import { delay, pageTransition, workIndexAnimation } from "./modules/transitions.js";
import regeneratorRuntime from "regenerator-runtime";

barba.init({
  sync: true,
  transitions: [{
    name: 'swipe-transition',
    async leave(data) {
      const done = this.async();
      pageTransition();
      await delay(1000);
      done();
    },
    async enter(data) { 
      workIndexAnimation(); 
    }
  }]
});