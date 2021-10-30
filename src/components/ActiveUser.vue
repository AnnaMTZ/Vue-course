  <template>
    <div class="activeUser">
   <!-- <h2>{{ enteredName }}</h2>
   <h3>{{ enteredAge }}</h3> -->
   <ul class='newList'>
       <li>
           <strong>Name</strong>
           {{ enteredName }}
       </li>
       <li>
           <strong>Age</strong>
           {{ enteredAge }}
       </li>
   </ul>
    </div>
</template>

<script>
export default {
props: ['enteredName', 'enteredAge']
}
</script>

<style scoped>

li {
    list-style: none;
}

</style>