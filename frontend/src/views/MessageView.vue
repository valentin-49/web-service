<template>
  <form onsubmit="return false;" @click="created()">
    <div>
      <label for="message">Message</label>
      <input type="text" id="message" name="message" v-model="message.content">
      <label for="author">Author</label>
      <input type="text" id="author" name="author" v-model="message.author">
    </div>
    <div>
      <button type="submit">Valider</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: {
        content: null,
        author: null
      }
    }
  },
  methods: {
    created() {
      axios.post('http://localhost:3000/message', JSON.stringify(this.message), {headers: {'Content-Type': 'application/json'}})
          .then(() => {
            this.$router.push('/ajout_client_confirme')
          })
          .catch(() => {
          })
    }
  }

}
</script>

<style>

</style>