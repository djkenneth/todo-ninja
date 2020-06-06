<template>
  <v-card flat tile>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field label="Agency Employee ID" type="text" outlined dense></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Last Name" outlined dense></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="First Name" outlined dense></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Name Extension" outlined dense></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Middle Name" outlined dense></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Group" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Birth Date" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Place of Birth" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Age" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Gender" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Civil Status" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Blood type" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Citizenship" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Citizenship By" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Dual Citizen Country" outlined dense></v-text-field>
        </v-col>
      </v-row>
      <div class="text-center">RESIDENTIAL ADDRESS</div>
      <v-row>
        <v-col cols="4">
          <v-text-field label="House/Block/Lot Number" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Street" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Subdivision / Village" outlined dense></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Barangay" outlined dense></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="City / Municipality" outlined dense></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Province" outlined dense></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Zipcode" outlined dense></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Height" suffix="meters(m)" outlined dense></v-text-field>
          <v-row>
            <v-col>
              <v-text-field suffix="feet(ft)" outlined dense></v-text-field>
            </v-col>
            <v-col>
              <v-text-field suffix="inches(in)" outlined dense></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Weight" suffix="Kilograms(kg)" outlined dense></v-text-field>
          <v-row>
            <v-col>
              <v-text-field suffix="pounds(lbs)" outlined dense></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="text-center">PERMANENT ADDRESS</div>
      <v-row>
        <v-col cols="4">
          <v-text-field label="House/Block/Lot Number" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Street" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Subdivision / Village" outlined dense></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Barangay" outlined dense></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="City / Municipality" outlined dense></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Province" outlined dense></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Zipcode" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="GSIS ID Number" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="PAG-IBIG Number" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="PHILHEALTH Number" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="SSS Number" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="TIN Number" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Telephone Number" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Mobile Number" outlined dense></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Email Address" outlined dense></v-text-field>
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