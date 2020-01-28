<template>
  <div class="form_input">
    <form @submit.prevent="submitFile">
      <b-form-file
        v-model="file"
        :state="Boolean(file)"
        size="lg"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

      <input type="submit" value="Submit" class="btn" />
    </form>
    <tile v-if="isLoading" v-bind:loading="isLoading"></tile>
  </div>
</template>

<script>
import axios from "../Api";
export default {
  /*
      Defines the data used by the component
    */
  name: "InputFile",
  data() {
    return {
      file: null,
      isLoading: false
    };
  },

  methods: {
    /*
        Submits the file to the server
      */
    submitFile() {
      if (this.file) {
        this.isLoading = true;
        axios
          .post("/document/file", this.file, {
            headers: {
              "Content-Type": "application/octet-stream",
              mojheadr: "dasasad"
            }
          })
          .then(res => {
            console.log(res);
            this.isLoading = false;
            this.$router.push(
              `data?id=${res.data.id}&name=${this.file.name}&extension=${this.file.type}`
            );
          })
          .catch(function() {
            console.log("FAILURE!!");
        });
      }
    }
  }
};
</script>

<style scoped>
form {
  display: block;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  background-color: #004379;
  color: #ffff;
  flex: 2;
}
.form_input {
  margin-top: 160px;
  margin-bottom: 20px;
}
</style>