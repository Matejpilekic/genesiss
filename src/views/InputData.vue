<template>
  <div>
    <tile v-if="isLoading" v-bind:loading="isLoading"></tile>
    <FormData v-bind:profesori="profesori" v-on:submitData="submit" />
    <div>
      <b-modal v-model="modalShow" ref="my-modal" hide-footer title="Using Component Methods">
        <div class="d-block text-center">
          <h3>Uspijesno ste dodali dokument u dosier profesora!</h3>
          <b-button @click="hideModal">Ok</b-button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import FormData from "../components/FormData";
import axios from "../Api";

export default {
  name: "Home",
  components: {
    FormData
  },
  data() {
    return {
      id: this.$route.query.id,
      file_name: this.$route.query.name,
      file_extension_mime: this.$route.query.extension,
      profesori: [],
      modalShow: false,
      isLoading:false
    };
  },
  created() {
    axios
      .get("/professor/list")
      .then(res => {
        //this.profesori=res.data
        res.data.forEach(element => {
          var profesorData = {
            value: element.id,
            text: element.title + " " + element.name + " " + element.surname
          };
          this.profesori.push(profesorData);
        });
      })
      .catch(err => console.log(err));
  },
  methods: {
    submit(form_data) {
      this.isLoading=true;
      const extension = this.file_name.split(".");
      let last = extension.length - 1;
      let data = {
        document_name: this.file_name,
        file_extension: extension[last],
        professor_id: form_data.profesor,
        category: form_data.category
      };

      axios
        .post(`/document/file/${this.id}`, data)
        .then(res => {
          console.log(res);
          if(res.status==200){
            this.modalShow=true;
            this.isLoading=false;
          }
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    },
    hideModal(){
      this.$router.push('/');
    }
  }
};
</script>