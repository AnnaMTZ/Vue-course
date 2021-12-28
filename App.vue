<template>
  <div>
    <the-header></the-header>
    <!-- slotProps needs to be used with the router -->
    <router-view v-slot="slotProps">
      <!-- </transition> is used to add animations -->
    <transition name="route" mode="out-in"> 
      <!-- :is="slotProps.Component - will dynamically load the component set by the router-->
      <component :is="slotProps.Component"></component>
    </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  }, created() {
    this.$store.dispatch('tryLogin');
  }, 
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    } 
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px)
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px)
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>