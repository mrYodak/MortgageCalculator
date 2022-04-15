<template>
  <v-card>
    <v-card-title>Editing {{ user.name }}</v-card-title>

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
        <v-layout flex justify-space-between>
          <v-btn color="error" @click="$emit('close')" :loading="usersLoading">
            Cancel
          </v-btn>
          <v-btn color="success" @click="submit()" :loading="usersLoading">
            Submit
          </v-btn>
        </v-layout>
      </v-form>
    </v-card-text>
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
  }),

  methods: {
    async submit() {
      try {
        const userUpdate = {
          ...this.user,
          name: this.name,
          maxLoan: this.maxLoan,
          interest: this.interest,
          downPay: this.downPay,
          term: this.term,
        }

        await this.$store.dispatch('users/Update', {
          id: this.user._id,
          data: userUpdate,
        })

        this.$emit('success', userUpdate)
      } catch (error) {
        console.error(error)
        this.$emit('error', { error })
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

  beforeDestroy() {
    this.name = ''
    this.maxLoan = 0
    this.interest = 0
    this.downPay = 0
    this.term = 0
  },
}
</script>
