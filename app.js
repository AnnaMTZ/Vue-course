const app = Vue.createApp({
    data() {
      return {
        enteredTaskValue: '',
        tasks: [],
        buttonText: '',
        toggleStyle: true
      };
    },
    computed: {
showButtonText() {
    return this.toggleStyle ? 'Hide' : 'Show' 
}
    },
    methods: {
      addTask() {
        this.tasks.push(this.enteredTaskValue)
        this.enteredTaskValue = ''
      },
      hideTaskList() {
        this.toggleStyle = !this.toggleStyle
      }
    }
  });
  
  app.mount('#assignment');
  