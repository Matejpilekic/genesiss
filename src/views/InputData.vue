<template>
  <div>
    <tile v-if="isLoading" v-bind:loading="isLoading"></tile>
    <FormData v-bind:profesori="profesori" v-on:submitData="submit" />
    <div>
      <b-modal v-model="modalShow" ref="my-modal" hide-footer title="Poruka">
        <div class="d-block text-center">
          <h3>Uspiješno ste dodali dokument u profesorov dosier!</h3>
          <b-button @click="hideModal">Ok,povratak na početak</b-button>
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
      isLoading: false
    };
  },
  created() {
    axios
      .get("/professor/list")
      .then(res => {
        res.data.forEach(element => {
          var profesorData = {
            value: element.id,
            text: element.title + " " + element.name + " " + element.surname
          };
          this.profesori.push(profesorData);
        });
      })
      .catch(err => console.log(err.message));
  },
  methods: {
    submit(form_data) {
      console.log(form_data.professor_id);
      this.isLoading = true;
      const extension = this.file_name.split(".");
      let last = extension.length - 1;
      let data = {
        document_name: this.file_name,
        file_extension: extension[last],
        professor_id: form_data.professor_id,
        category: form_data.category
      };

      axios
        .post(`/document/file/${this.id}`, data)
        .then(res => {
          if (res.status == 200) {
            this.modalShow = true;
            this.isLoading = false;
          }
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    },
    hideModal() {
      this.$router.push("/");
    }
  }
};
</script>