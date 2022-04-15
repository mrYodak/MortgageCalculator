<template>
  <div class="page-content">
    <v-layout justify-space-between align-content-center column>
      <v-layout justify-space-between align-content-center>
        <h2>Calculator</h2>
      </v-layout>
      <the-banks-list class="mt-5" />
    </v-layout>
  </div>
</template>

<script>
import TheBanksList from '../components/Users/TheBanksList/TheBanksList.vue'
import { loadingStates } from '../mixins/loading-state'

export default {
  name: 'CalcPage',
  mixins: [loadingStates],

  components: {
    TheBanksList,
  },

  data: () => ({
    // showAddModal: false,
  }),

  methods: {
    // toggleAddModal(show) {
    //   this.showAddModal = !!show
    // },
  },
}
</script>

<style></style>
