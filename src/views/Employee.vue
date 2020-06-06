<template>
    <div>
    <v-row>
        <v-col>
            <div class="mt-2 ml-4">
            <span class="headline">Name: </span>
            <span class="headline">Department: </span>
            </div>
        </v-col>
        <v-col class="text-right">
            <v-btn @click="newEmployee" color="green darken-3" dark>
                <v-icon left>mdi-plus-thick</v-icon>
                <span>New Employee</span>
            </v-btn>
            <search class="d-inline mx-3"></search>
        </v-col>
    </v-row>
    </div>
</template>

<script>
export default {
  components: {
  },

  data: () => ({
    //
  }),

  mounted() {
    //
  },

  methods: {
    newEmployee() {
      this.$router.push({ name: 'addEmployee' })
    },
  }
}
</script>

<style>

</style>