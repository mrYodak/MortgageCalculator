<template>
  <v-card>
    <v-card-title class="primary bright--text">Add New Bank</v-card-title>

    <v-card-text>
      <v-form>
        <v-text-field v-model="name" label="Bank Name" />
        <v-text-field v-model="maxLoan" type="number" label="Loan Max" />
        <v-text-field v-model="term" type="number" label="Term (months)" />
        <v-slider
          v-model="downPay"
          min="0"
          max="50"
          :label="`Down Payment ${downPay}%`"
          thumb-label
        />
        <v-slider
          v-model="interest"
          min="0"
          max="40"
          :label="`Annual Interest ${interest}%`"
          thumb-label
        />
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn color="error" @click="$emit('close')" :loading="usersLoading">
        Cancel
      </v-btn>

      <v-spacer />

      <v-btn color="success" @click="submit()" :loading="usersLoading">
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { loadingStates } from '../../mixins/loading-state'

export default {
  name: 'NewUserForm',
  mixins: [loadingStates],
  /*
  data: () => ({
    name: '',
    maxLoan: 10000,
    interest: 10,
    email: '',
  }),
*/
  data: () => ({
    name: '',
    maxLoan: 10000,
    interest: 10,
    downPay: 0,
    term: 12,
  }),

  methods: {
    async submit() {
      try {
        //const newUser = { name: this.name, age: this.age, email: this.email }
        const newUser = {
          name: this.name,
          maxLoan: this.maxLoan,
          interest: this.interest,
          downPay: this.downPay,
          term: this.term,
        }
        await this.$store.dispatch('users/Add', newUser)

        this.$emit('success', newUser)
      } catch (error) {
        console.error(error)
        this.$emit('error', { error })
      }
    },
  },
}
</script>
