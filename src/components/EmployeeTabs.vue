<template>
  <v-container>
    <v-tabs background-color="blue darken-4" class="elevation-2" dark>
      <v-tabs-slider></v-tabs-slider>
      <v-tab>PERSONAL INFORMATION</v-tab>
      <v-tab-item>
        <personal-information></personal-information>
      </v-tab-item>
      <v-tab>FAMILY BACKGROUND</v-tab>
      <v-tab-item>
        <family-background></family-background>
      </v-tab-item>
      <v-tab>EDUCATIONAL BACKGROUND</v-tab>
      <v-tab-item>
        <education-background></education-background>
      </v-tab-item>
      <v-tab>CIVIL SERVICE ELIGIBILITY / LICENSES</v-tab>
      <v-tab-item>
        <civil-service-eligibility></civil-service-eligibility>
      </v-tab-item>
      <v-tab>WORK EXPERIENCE</v-tab>
      <v-tab-item>
        <work-experience></work-experience>
      </v-tab-item>
      <v-tab>VOLUNTARY WORK</v-tab>
      <v-tab-item>
        <voluntary-work></voluntary-work>
      </v-tab-item>
      <v-tab>LEARNING AND DEVELOPMENT</v-tab>
      <v-tab-item>
        <learning-development></learning-development>
      </v-tab-item>
      <v-tab>OTHER</v-tab>
      <v-tab-item>
        <other></other>
      </v-tab-item>
      <v-tab>USER</v-tab>
      <v-tab-item>
        <user></user>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
  import PersonalInformation from "./employeeTabs/PersonalInformation.vue";
  import FamilyBackground from "./employeeTabs/FamilyBackground.vue";
  import EducationBackground from "./employeeTabs/EducationBackground.vue";
  import CivilServiceEligibility from "./employeeTabs/CivilServiceEligibility.vue";
  import WorkExperience from "./employeeTabs/WorkExperience.vue";
  import VoluntaryWork from "./employeeTabs/VoluntaryWork.vue";
  import LearningAndDevelopment from "./employeeTabs/LearningAndDevelopment.vue";
  import Other from "./employeeTabs/Other.vue";
  import User from "./employeeTabs/User.vue";

  export default {
    components: {
      'personal-information': PersonalInformation,
      'family-background': FamilyBackground,
      'education-background': EducationBackground,
      'civil-service-eligibility': CivilServiceEligibility,
      'work-experience': WorkExperience,
      'voluntary-work': VoluntaryWork,
      'learning-development': LearningAndDevelopment,
      'other': Other,
      'user': User
    },

    data: () => ({
      //
    }),

    computed: {
      //
    },

    watch: {
      //
    },

    created () {
      //
    },

    methods: {
      //
    },
  }
</script>

<style scoped>
</style>
