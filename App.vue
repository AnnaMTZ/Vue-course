<template>
<div>
  <div class="container">
    <users-list></users-list>
  </div>
    <div class="container">
      <div class="block" :class="{animate: animatedBlock}"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">

      <!-- transition - a built-in vue component to control appearence and animation -->
      <!-- name="para" - a custom prefix to be able to use with  .para-enter-active (to/from) -->

      <!-- the events (hooks) below are always emitted with transition template -->
      <transition name="para" 
      :css="false" 
        @before-enter="beforeEnter" 
        @enter="enter" 
        @after-enter="afterEnter" 
        @before-leave="beforeLeave" 
        @leave="leave"
        @after-leave="afterLeave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
        > 

        <p v-if="paraIsVisible">This is only sometimes visible.....</p>
      </transition>
      <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>
    
    <!-- !!! an exception when it is possible to use more than two elements in a built-in 'transition' component - when only one child is added to the DOM at the same time -->
   
      <div class="container"> 
        <transition name="fade-button" mode="out-in">
          <button @click="showUsers" v-if="!usersareVisible">Show Users</button>
          <button @click="hideUsers" v-else>Hide Users</button>
         </transition>
      </div>
   

      <base-modal @close="hideDialog" :open="dialogIsVisible">
        <p>This is a test dialog!</p>
        <button @click="hideDialog">Close it!</button>
      </base-modal>

    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </div>
</template>  

<script>
import UsersList from './components/UsersList.vue'
export default {
  components: {
    UsersList
  },
  data() {
    return { 
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersareVisible: false,
      enterInterval: null,
      leaveInterval: null
      };
  },
  methods: {
    // methods used in a built-in <transition name='para'> component
    // el is an argument which is added automatically by vue, el - an element on which the animation runs
    beforeEnter(el) {
      console.log('before enter')
      console.log(el)
      el.style.opacity = 0;
    },

    beforeLeave(el) {
      console.log('before leave')
       console.log(el)
    },

    enter(el, done) {
      console.log('enter')
      console.log(el)
      let round = 1;
      this.enterInterval =  setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 10) {
          // ? The clearInterval() method clears a timer set with the setInterval() method.
          clearInterval(this.enterInterval);
          done();
        }
      }, 20)
    },

    afterEnter(el) {
      console.log('after enter')
      console.log(el)
      el.style.opacity = 1;
    },

    // leave(el) {
    //   console.log('leave')
    //   console.log(el)
    // },


        leave(el, done) {
      console.log('leave')
      console.log(el)
      let round = 1;
     this.leaveInterval =  setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 10) {
          // ? The clearInterval() method clears a timer set with the setInterval() method.
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20)
    },

    afterLeave(el) {
      console.log('after leave')
      console.log(el)
    },

    enterCancelled(el) {
      console.log(el)
      clearInterval(this.enterInterval)
    },

    leaveCancelled(el) {
      console.log(el)
      clearInterval(this.leaveInterval)
    },

    ///////////////////////////////

    showUsers() {
      this.usersareVisible = true;
    },

    hideUsers() {
      this.usersareVisible = false;
    },
    
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 1s ease-in-out; */
 
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

      /* .animate {
     transform: translateX(-150px); 
        animation: slide-fade .3s ease-out forwards;
      } */

 /* classes for built-in <transition>. Vue will add them by default at different times when the elements will be added to DOM for the first time*/
/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

 /* .v-enter-active {
   transition: all 0.3s ease-out;
 } */

/* using animations */
 /* .v-enter-active {
   animation: slide-scale 0.3s ease-out;
 } */

/* named animations */
        /* .para-enter-active {
          animation: slide-scale 0.3s ease-out;
        } */


 /* .v-enter-to {
   opacity: 1;
   transform: translateY(0)
 } */

 /* .v-leave-from {
   opacity: 1;
   transform: translateY(0)
 } */

 /* .v-leave-active {
   transition: all 0.3s ease-in;
 } */





/* using animations */
      /* .para-leave-active {
        animation: slide-scale 0.3s ease-out;
      } */

/* .v-leave-to {
    opacity: 0;
  transform: translateY(30px);
}

.v-enter-active {
  animation: slide-scale 0.3s ease-out;
} */




        /* .fade-button-enter-from, 
        .fade-button-leave-to {
          opacity: 0;
        }

        .fade-button-enter-active {
          transition: opacity 0.3s ease-out;
        }

        .fade-button-leave-active {
          transition: opacity 0.3s ease-in;
        }

        .fade-button-enter-to,
        .fade-button-leave-from {
          opacity: 1;
        } */



@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translate(-120) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
 
</style>