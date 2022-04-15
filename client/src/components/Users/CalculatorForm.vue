<template>
  <v-card>
    <v-card-title>Calculating mortgage in {{ user.name }}</v-card-title>
    <v-card-text>
      <v-form>
        <p>
          for {{ user.term }} months with {{ this.interest }}% annual interest
        </p>
        <p>Maximum loan is {{ user.maxLoan }}$</p>
        <v-text-field v-model="loan" type="number" label="Wanted Loan" />
        <p>
          Minimum down payment is ({{ user.downPay }}%)
          {{ (user.downPay / 100) * this.loan }}$
        </p>
        <v-text-field v-model="down" type="number" label="Down Payment" />
        <v-layout flex justify-space-between>
          <v-btn color="error" @click="$emit('close')" :loading="usersLoading">
            Cancel
          </v-btn>
          <v-btn color="success" @click="calculateLoan()">Calculate</v-btn>
        </v-layout>
      </v-form>
    </v-card-text>
    <v-card raised="True">
      <v-card-title>{{ this.res }}</v-card-title>
    </v-card>
  </v-card>
</template>

<script>
import { loadingStates } from '../../mixins/loading-state'

export default {
  name: 'EditUserForm',
  mixins: [loadingStates],

  props: {
    user: {
      type: Object,
      require: true,
    },
  },

  data: () => ({
    name: '',
    maxLoan: 10000,
    interest: 10,
    downPay: 0,
    term: 12,
    loan: 0,
    down: 0,
    res: 'Here will be result...',
  }),

  methods: {
    calculateLoan() {
      let dollarPay = (this.downPay / 100) * this.loan
      if (this.loan <= 0) {
        this.res = "You don't need a loan for that"
      } else if (this.loan > this.maxLoan) {
        this.res = 'Loan is higher than available'
      } else if (this.down < dollarPay) {
        this.res = 'Higher downpayment required'
      } else {
        let monthInt = this.interest / 1200
        let result =
          this.loan / this.term +
          ((this.loan - this.downPay) *
            monthInt *
            ((1 + monthInt) ^ this.term)) /
            (((1 + monthInt) ^ this.term) - 1)
        this.res = 'Your monthly payment would be ' + Math.ceil(result) + ' $'
      }
    },
  },

  mounted() {
    this.name = this.user.name
    this.maxLoan = this.user.maxLoan
    this.interest = this.user.interest
    this.downPay = this.user.downPay
    this.term = this.user.term
  },
}
</script>
