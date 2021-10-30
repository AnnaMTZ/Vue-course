<template>
  <div id="app">
    <!-- <FriendContact/> -->
    <header>
    <h1>My Friends</h1>
    </header>
   <!-- <new-friend @add-contact="addContact"></new-friend> -->
   <user-data @add-info="addData"></user-data>
    <!-- <friend-contact
    v-for="friend in friends" :key="friend.id"
    :id="friend.id"
    :friend-name="friend.name"
    :phone-number="friend.phone"
    :email-address="friend.email"
    :is-favorite="friend.isFavorite"
    @toggle-favorite="toggleFavoriteStatus"
    @delete="deleteContact"
    ></friend-contact> -->
<!-- //v-bind is used if the prop type is Boolean, is used to set non-string values-->

    <!-- <friend-contact 
    friend-name="Julie Jones"
    phone-number="9876554321"
    email-address="julie@localhost.com"

    >
    </friend-contact> -->
    <!-- <NewComponent/> -->
    <active-user
    v-for="info in infos" :key="info.id"
    :id="info.id"
    :entered-name="info.name"
    :entered-age="info.age"
    >
    </active-user>
    <!-- <ActiveUser/> -->
  </div>
</template>

<script>
// import FriendContact from './components/FriendContact.vue'
// import NewComponent from './components/NewComponent.vue'
// import NewFriend from './components/NewFriend.vue'
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'

export default {
  data() {
    return {
      friends: [
  // {
  //   id:'manuel',
  //   name: 'Manuel Lorenz',
  //   phone: '123456789',
  //   email: 'manuel@localhost.com',
  //   isFavorite: false
  // },
  //  {
  //   id:'julie',
  //   name: 'Julie Jones',
  //   phone: '987654321',
  //   email: 'julie@localhost.com',
  //   isFavorite: true

  // },
],
infos: []
    }
  },
  name: 'App',
  components: {
    ActiveUser,
    UserData
    // FriendContact,
    // NewComponent,
    // NewFriend
  },
  methods:{
  addData(name, age) {
      const newInfo = {
    // id: new Date().toISOString(),
    name: name,
     age: +age
  };
  this.infos.push(newInfo);
      },

//     // friendID can have any name, it will take this.id from in a component
//     // toggleFavorite() {
//     //   this.$emit('toggle-favorite', this.id);
//     // }
//     // this.id will be accepted as a first parameter of toggleFavoriteStatus
// toggleFavoriteStatus(friendID) {
// const identifiedFriend = this.friends.find(friend => friend.id === friendID);
// identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
//     },
//     addContact(name, phone, email) {
//       const newFriendContact = {
//     id: new Date().toISOString(),
//     name: name,
//     phone: phone,
//     email: email,
//     isFavorite: false
//   };
//   this.friends.push(newFriendContact);
//       },
//       deleteContact(friendID) {
// this.friends = this.friends.filter(friend => friend.id !== friendID)
//       }
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
