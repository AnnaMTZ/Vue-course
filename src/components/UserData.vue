<template>
    <div class="userData">
   <form @submit.prevent="addInfo">
      <div>
        <label>Name</label>
        <input type="text" v-model='enteredName'>
      </div>
      <div>
        <label>Age</label>
        <input type="tel" v-model="enteredAge">
      </div>
      <div>
        <button>Add Contact</button>
      </div>
    </form>
    </div>
</template>

<script>
export default {
  emits: ['add-info'],
data() {
    return {
        enteredName: '',
        enteredAge: ''
    }
  },
  methods: {
    addInfo() {
      this.$emit('add-info',
      this.enteredName,
      this.enteredAge
      );
    }
  }
}
</script>

<style scoped>

</style>
