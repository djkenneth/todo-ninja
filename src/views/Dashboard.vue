<template>
  <v-container>
    <img src="@/assets/logo.png" alt="" />
    <v-expansion-panels multiple>
      <v-expansion-panel>
        <v-expansion-panel-header class="blue darken-4 white--text">Personal Information</v-expansion-panel-header>
        <v-divider></v-divider>
        <v-expansion-panel-content class="mt-3 font-weight-bold">
          <div>Agency Employee ID:</div>
          <div>Last Name:</div>
          <div>First Name: Name Extension:</div>
          <v-row>
            <v-col>
              <div>Date Of Birth:</div>
              <div>Place Of Birth:</div>
              <div>Sex:</div>
              <div>Civil Status:</div>
              <div>Height:</div>
              <div>Weight:</div>
              <div>Blood Type:</div>
              <div>GSIS ID Number:</div>
              <div>PAG-IBIG ID Number:</div>
              <div>PHILHEALTH Number:</div>
              <div>SSS Number:</div>
              <div>TIN Number:</div>
            </v-col>
            <v-col>
              <div>Citizenship:</div>
              <div>Dual Citizenship:</div>
              <div>Residential Address:</div>
              <div>Permanent Address:</div>
              <div>Telephone Number:</div>
              <div>Mobile Number:</div>
              <div>Email Address:</div>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="blue darken-4 white--text">Family Background</v-expansion-panel-header>
        <v-divider></v-divider>
        <v-expansion-panel-content class="mt-3 font-weight-bold">
          <v-row>
            <v-col>
              <div>Mother</div>
              <div>Maiden Name:</div>
              <div>Last Name:</div>
              <div>First Name: Name Extension:</div>
              <div>Middle Name:</div>
            </v-col>
            <v-col>
              <div>Father</div>
              <div>Last Name:</div>
              <div>First Name: Name Extension:</div>
              <div>Middle Name:</div>
            </v-col>
          </v-row>
          <v-divider class="line"></v-divider>
          <v-row>
            <v-col>
              <div>Spouse</div>
              <div>Last Name:</div>
              <div>First Name: Name Extension:</div>
              <div>Middle Name:</div>
            </v-col>
            <v-col>
              <div>Spouse Occupation</div>
              <div>Employer/Business Name:</div>
              <div>Business Address:</div>
              <div>Telephone Number:</div>
            </v-col>
          </v-row>
          <div>Children:</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="blue darken-4 white--text">Educational Background</v-expansion-panel-header>
        <v-divider></v-divider>
        <v-expansion-panel-content class="mt-3 font-weight-bold">
          <v-data-table :headers="educationHeaders" :items="education"></v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="blue darken-4 white--text">Civil Service Eligibility</v-expansion-panel-header>
        <v-divider></v-divider>
        <v-expansion-panel-content class="mt-3 font-weight-bold">
          <v-data-table :headers="civilHeaders" :items="civil"></v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="blue darken-4 white--text">Work Experience</v-expansion-panel-header>
        <v-divider></v-divider>
        <v-expansion-panel-content class="mt-3 font-weight-bold">
          <v-data-table :headers="workHeaders" :items="work"></v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="blue darken-4 white--text"
          >Voluntary Work or Involvement in Civic/Non-Governemnt/People/VoluntaryOrganizations</v-expansion-panel-header
        >
        <v-divider></v-divider>
        <v-expansion-panel-content class="mt-3 font-weight-bold">
          <v-data-table :headers="voluntaryHeaders" :items="voluntary"></v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="blue darken-4 white--text"
          >Learning and Development Interventions/Training Programs Attended</v-expansion-panel-header
        >
        <v-divider></v-divider>
        <v-expansion-panel-content class="mt-3 font-weight-bold">
          <v-data-table :headers="learningHeaders" :items="learning"></v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="blue darken-4 white--text">Other Information</v-expansion-panel-header>
        <v-divider></v-divider>
        <v-expansion-panel-content class="mt-3 font-weight-bold">
          <v-row>
            <v-col>
              <div>Skill:</div>
              <div>Recognitions</div>
              <div>Memberships:</div>
              <div>Affiliated Third:</div>
              <div>Affiliated Fourth:</div>
              <div>Found Guilty:</div>
              <div>Criminally Charged:</div>
              <div>Criminally Charged Date:</div>
              <div>Criminally Charged Status:</div>
              <div>Convicted:</div>
              <div>Separated Service:</div>
            </v-col>
            <v-col>
              <div>Candidate:</div>
              <div>Resigned:</div>
              <div>Immigrant:</div>
              <div>Indigenous:</div>
              <div>Disabled:</div>
              <div>Solo:</div>
              <div>Government ID Type:</div>
              <div>Government ID Number:</div>
              <div>Issued Date:</div>
              <div>Issued Place:</div>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="blue darken-4 white--text">References</v-expansion-panel-header>
        <v-divider></v-divider>
        <v-expansion-panel-content class="mt-3 font-weight-bold">
          <v-data-table :headers="referenceHeaders" :items="reference"></v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import ProductListOne from "@/components/ProductListOne.vue";
// import ProductListtwo from "@/components/ProductListTwo.vue";

export default {
  data: () => ({
    educationHeaders: [
      { text: "Level", align: "left", value: "level" },
      { text: "School Name", value: "school_name" },
      { text: "Course", value: "course" },
      { text: "Attended", value: "attended" },
      { text: "Graduated", value: "graduated" },
      { text: "Highest Level", value: "highest_level" },
      { text: "Year Geaduate", value: "year_graduate" },
      { text: "Honors", value: "honors" },
    ],
    education: [],

    civilHeaders: [
      { text: "Type", align: "left", value: "type" },
      { text: "Rating", value: "rating" },
      { text: "Date Conferment", value: "date_conferment" },
      { text: "Place Conferment", value: "place_conferment" },
    ],
    civil: [],

    workHeaders: [
      { text: "Position", align: "left", value: "position" },
      { text: "Date", value: "date" },
      { text: "Company", value: "company" },
      { text: "Salary", value: "salary" },
      { text: "Pay Grade", value: "pay_grade" },
      { text: "Status Of Appointment", value: "status_of_appointment" },
    ],
    work: [],

    voluntaryHeaders: [
      { text: "Organization", align: "left", value: "organization" },
      { text: "Date", value: "date" },
      { text: "Number of Hours", value: "number_hours" },
      { text: "Position", value: "position" },
      { text: "Nature Of Work", value: "nature_work" },
    ],
    voluntary: [],

    learningHeaders: [
      { text: "Program", align: "left", value: "program" },
      { text: "Date", value: "date" },
      { text: "Number of Hours", value: "number_hours" },
    ],
    learning: [],

    referenceHeaders: [
      { text: "Name", align: "left", value: "name" },
      { text: "Address", value: "address" },
      { text: "Telephone", value: "telephone" },
    ],
    reference: [],
  }),
};
</script>

<style scoped>
.line {
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.12);
}
</style>
