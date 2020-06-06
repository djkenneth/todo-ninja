<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent scrollable :max-width="options.width">
      <template v-slot:activator="{ on }">
        <v-btn color="blue darken-4" dark v-on="on">
          <v-icon left>mdi-account-search</v-icon>
          <span>search</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title :color="options.color" class="headline">Search Employee</v-card-title>
        <v-card-text>
          <v-card flat>
            <v-card-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="desserts" :search="search" :items-per-page="5"></v-data-table>
          </v-card>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-4" dark @click="dialog = false">Agree</v-btn>
          <v-btn color="red darken-2" dark @click="dialog = false">Disagree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        search: '',
        options: {
          color: 'blue',
          width: '900'
        },

        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
        ],
      }
    },
  }
</script>


<style>
</style>