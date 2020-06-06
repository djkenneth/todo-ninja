<template>
  <v-card flat tile>
    <v-container>
      <v-row>
        <v-col cols="6">
          <div>Mother</div>
          <v-text-field label="Last Name" outlined dense></v-text-field>
          <v-row>
            <v-col cols="8" class="pr-0">
              <v-text-field label="First Name" outlined dense></v-text-field>
            </v-col>
            <v-col cols="4" class="pl-0">
              <v-text-field label="Name Extension" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-text-field label="Middle Name" outlined dense></v-text-field>
          <v-text-field label="Occupation" outlined dense></v-text-field>
          <v-text-field label="Maiden Name" outlined dense></v-text-field>
        </v-col>
        <v-col cols="6">
          <div>Father</div>
          <v-text-field label="Last Name" outlined dense></v-text-field>
          <v-row>
            <v-col cols="8" class="pr-0">
              <v-text-field label="First Name" outlined dense></v-text-field>
            </v-col>
            <v-col cols="4" class="pl-0">
              <v-text-field label="Name Extension" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-text-field label="Middle Name" outlined dense></v-text-field>
          <v-text-field label="Occupation" outlined dense></v-text-field>
        </v-col>
        <v-col cols="6">
          <div>Spouse</div>
          <v-text-field label="Last Name" outlined dense></v-text-field>
          <v-row>
            <v-col cols="8" class="pr-0">
              <v-text-field label="First Name" outlined dense></v-text-field>
            </v-col>
            <v-col cols="4" class="pl-0">
              <v-text-field label="Name Extension" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-text-field label="Middle Name" outlined dense></v-text-field>
          <v-text-field label="Occupation" outlined dense></v-text-field>
        </v-col>
        <v-col>
          <div>Business</div>
          <v-text-field label="Employer / Business Name" outlined dense></v-text-field>
          <v-text-field label="Business Address" outlined dense></v-text-field>
          <v-text-field label="Telephone Number" outlined dense></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>