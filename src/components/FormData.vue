<template>
  <div class="form_data container">
    <div class="title"><h1>Unesite podatke</h1></div>
    <form @submit.prevent="addData">
      <div class="form-group">
        <label for="exampleFormControlInput1">Studij</label>
        <input type="text" v-model="form.studij" class="form-control" id="exampleFormControlInput1" placeholder="Studij npr..Računarstvo" required/>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput2">Kolegij</label>
        <input type="text" v-model="form.kolegij" class="form-control" id="exampleFormControlInput2" placeholder="Kolegij npr..Elektroničko poslovanje" required/>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Profesor</label>
        <select v-model="form.profesor" class="form-control" id="exampleFormControlSelect2" required>
          <option v-bind:key="profesor.value" v-bind:value="profesor.value" v-for="profesor in profesori">
            {{profesor.text}}
          </option>
        </select>
      </div>
      <input type="submit" value="Submit" class="btn" />
    </form>
    <div class="container data">
      <div class="container file_name_data">Dokument</div>
      {{this.$route.query.name}}
    </div>
  </div>
</template>

<script>
//import axios from "../Api.js";
export default {
  name: "FormData",
  props: ["profesori"],
  data() {
    return {
      isLoading: false,
      form: {
        studij: "",
        kolegij: "",
        profesor: null,
      }
    };
  },
  methods: {
    addData() {
      this.isLoading=true;
      const category = this.form.studij + "-" + this.form.kolegij;
      console.log(this.form.profesor);
      
      let data = {
        professor_id: this.form.profesor,
        category: category
      };
    
      this.$emit('submitData',data);
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
.form_data{
  margin-top: 60px;
  box-shadow: 1px 4px 35px -12px rgba(0,0,0,.55);
  background-color: rgba(229,229,229,.17);
  padding: 10px 5px;
  margin-bottom: 60px;
}
.data{
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    padding: 0;
    margin-top:20px;
    margin-bottom: 40px;
}
.file_name_data{
  padding: 0.25rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0,0,0,.18);
  border-bottom: 1px solid rgba(0,0,0,.125);
}
.title h1{
  font-family: "Times New Roman", Times, serif;
  font-style: oblique;
}

</style>