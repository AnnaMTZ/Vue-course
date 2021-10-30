<template>
  <div class="hello">
    <li>
    <h2>{{ friendName }} {{ isFavorite ? '(Favorite)' : '' }} </h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show"}} Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
  </div>
</template>

<script>
export default {
      // props: ['friendName', 'phoneNumber', 'emailAddress', 'isFavorite'],
      emits: ['toggle-favorite', 'delete'],
      // emits: {
// 'toggle-favorite': function(id) {
//   if (id) {
//     return true;
//   } else {
//     console.warn('Id is missing');
//     return false;
//   }
// }
      // },
      props: {
        id: {
          type: String,
          required: true
        },
        friendName: {
          // here come only specific built-in properties
          type: String,
          required: true
          },
        phoneNumber: {  
          type: String,
          required: true 
          },
        emailAddress: 
        {
          type: String,
          required: true 
        },
        isFavorite: 
        {
          type: Boolean,
          // required: Boolean,
          // is required is false 'default' key can be added, it can also be a function
          default: false,
          // validator: function(value) {
          //   return value === '1' || value === '0';
          // }
        }
      },
  // name: 'FriendContact',
    data() {
    return {
      detailsAreVisible: false,
      // to receive a prop value as an initial value
      // friendIsFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  list-style: none;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
