<template>
  <div>
  <v-row>
    <v-col>
      <h2 class="ml-4">Add New Employee</h2>
    </v-col>
    <v-col class="text-right">
      <search class="d-inline mr-3"></search>
    </v-col>
  </v-row>
  <employee-tabs></employee-tabs>
  </div>
</template>

<script>
import EmployeeTabs from "../components/EmployeeTabs.vue";

export default {
  components: {
    'employee-tabs': EmployeeTabs
  }
}
</script>

<style>

</style>