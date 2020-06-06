<template>
  <v-card>
    <v-container>
      <v-data-table :headers="headers" :items="desserts" :items-per-page="5">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-dialog v-model="dialog" persistent scrollable max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="blue darken-4" dark class="mb-2" v-on="on">Add Education</v-btn>
              </template>
              <v-card>
                <v-card-title class="grey lighten-3">
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.level"
                        label="Level"
                        dense
                        outlined
                        required
                        :error-messages="levelErrors"
                        @input="$v.editedItem.level.$touch()"
                        @blur="$v.editedItem.level.$touch()"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.school"
                        label="School"
                        dense
                        outlined
                        required
                        :error-messages="schoolErrors"
                        @input="$v.editedItem.school.$touch()"
                        @blur="$v.editedItem.school.$touch()"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.course"
                        label="Course"
                        dense
                        outlined
                        required
                        :error-messages="courseErrors"
                        @input="$v.editedItem.course.$touch()"
                        @blur="$v.editedItem.course.$touch()"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.attendedFrom"
                        label="Attended From"
                        dense
                        outlined
                        required
                        :error-messages="attendedFromErrors"
                        @input="$v.editedItem.attendedFrom.$touch()"
                        @blur="$v.editedItem.attendedFrom.$touch()"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.attendedTo"
                        label="Attended To"
                        dense
                        outlined
                        required
                        :error-messages="attendedToErrors"
                        @input="$v.editedItem.attendedTo.$touch()"
                        @blur="$v.editedItem.attendedTo.$touch()"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.graduate"
                        label="Graduate"
                        dense
                        outlined
                        :error-messages="graduateErrors"
                        @input="$v.editedItem.graduate.$touch()"
                        @blur="$v.editedItem.graduate.$touch()"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.highestLevel"
                        label="Highest Level"
                        dense
                        outlined
                        required
                        :error-messages="highestLevelErrors"
                        @input="$v.editedItem.highestLevel.$touch()"
                        @blur="$v.editedItem.highestLevel.$touch()"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.honors"
                        label="Honors"
                        dense
                        outlined
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.yearGraduated"
                        label="Year Graduated"
                        dense
                        outlined
                        required
                        :error-messages="yearGraduatedErrors"
                        @input="$v.editedItem.yearGraduated.$touch()"
                        @blur="$v.editedItem.yearGraduated.$touch()"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="grey lighten-3 py-3">
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-4" dark :loading="loading4" :disabled="loading4" @click="save">
                  Save
                  <template v-slot:loader>
                    <span class="custom-loader">
                      <v-icon light>cached</v-icon>
                    </span>
                  </template>
                  </v-btn>
                  <v-btn color="red darken-2" dark @click="close">Cancel</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
          <v-icon color="blue darken-4" small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>

          <v-dialog v-model="deleteDialog" persistent max-width="450">
            <template v-slot:activator="{ on }">
              <v-icon color="red darken-4" small v-on="on">mdi-delete</v-icon>
            </template>
            <v-card>
              <v-card-title class="grey lighten-3 py-3">
                <span class="headline font-weight-bold">Delete</span>
              </v-card-title>
              <v-card-text>
                <div class="mt-4 pr-2">
                  <v-icon color="red darken-2" size="50" class="float-left mx-4">mdi-alert-circle</v-icon>
                  <p class="subtitle-1">Are you sure you want to delete this item?</p>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="deleteDialog = false">Cancel</v-btn>
                <v-btn color="red darken-2" dark @click="deleteItem(item)">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
export default {
  validations: {
    editedItem: {
      level: { required },
      school: { required },
      course: { required },
      attendedFrom: { required },
      attendedTo: { required },
      graduate: { required },
      highestLevel: { required },
      yearGraduated: { required }
    },
  },
  data: () => ({
    dialog: false,
    headers: [
      { text: "Level", value: "level" },
      { text: "School", value: "school" },
      { text: "Course", value: "course" },
      { text: "Attended From", value: "attendedFrom" },
      { text: "Attended To", value: "attendedTo" },
      { text: "Graduate", value: "graduate" },
      { text: "Highest Level", value: "highestLevel" },
      { text: "Honors", value: "honors" },
      { text: "Year Graduated", value: "yearGraduated" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      level: null,
      school: null,
      course: null,
      attendedFrom: null,
      attendedTo: null,
      graduate: null,
      highestLevel: null,
      honors: null,
      yearGraduated: null
    },
    defaultItem: {
      level: null,
      school: null,
      course: null,
      attendedFrom: null,
      attendedTo: null,
      graduate: null,
      highestLevel: null,
      honors: null,
      yearGraduated: null
    },
    deleteDialog: false,
    loading4: false,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Education" : "Edit Education";
    },

    levelErrors() {
      const errors = []
      if (!this.$v.editedItem.level.$dirty) return errors
      !this.$v.editedItem.level.required && errors.push('Level is required.')
      return errors
    },

    schoolErrors() {
      const errors = []
      if (!this.$v.editedItem.school.$dirty) return errors
      !this.$v.editedItem.school.required && errors.push('School is required.')
      return errors
    },

    courseErrors() {
      const errors = []
      if (!this.$v.editedItem.course.$dirty) return errors
      !this.$v.editedItem.course.required && errors.push('Course is required.')
      return errors
    },

    attendedFromErrors() {
      const errors = []
      if (!this.$v.editedItem.attendedFrom.$dirty) return errors
      !this.$v.editedItem.attendedFrom.required && errors.push('Attended From is required.')
      return errors
    },

    attendedToErrors() {
      const errors = []
      if (!this.$v.editedItem.attendedTo.$dirty) return errors
      !this.$v.editedItem.attendedTo.required && errors.push('Attended To is required.')
      return errors
    },

    graduateErrors() {
      const errors = []
      if (!this.$v.editedItem.graduate.$dirty) return errors
      !this.$v.editedItem.graduate.required && errors.push('Graduate is required.')
      return errors
    },

    highestLevelErrors() {
      const errors = []
      if (!this.$v.editedItem.highestLevel.$dirty) return errors
      !this.$v.editedItem.highestLevel.required && errors.push('Highest Level is required.')
      return errors
    },

    yearGraduatedErrors() {
      const errors = []
      if (!this.$v.editedItem.yearGraduated.$dirty) return errors
      !this.$v.editedItem.yearGraduated.required && errors.push('Year Graduated is required.')
      return errors
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.desserts = [];
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      this.desserts.splice(index, 1);
      this.deleteDialog = false;
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      // if (this.editedIndex >= 8) {
      //   Object.assign(this.desserts[this.editedIndex], this.editedItem);
      // } else {
      //   this.desserts.push(this.editedItem);
      // }
      this.$v.$touch();
      if (this.$v.$invalid) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        // do your submit logic here
        setTimeout(() => {
          this.desserts.push(this.editedItem);
        }, 500)
      }
      this.close();
      // this.$v.$reset();
    },
  }
};
</script>

<style scoped>
.v-dialog > .v-card > .v-card__text {
  padding: 0 24px;
}

.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>