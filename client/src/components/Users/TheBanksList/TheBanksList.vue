<template>
  <div>
    <v-list rounded flat two-line class="transparent">
      <bank-list-row v-for="user in users" :key="user._id" :user="user" />
    </v-list>
  </div>
</template>

<script>
import BankListRow from './BankListRow.vue'

export default {
  name: 'TheUsersList',

  components: {
    BankListRow,
  },

  data: () => ({
    // users: [],
  }),

  computed: {
    users() {
      return this.$store.getters['users/Users'] || []
    },
  },

  methods: {
    fetchUsers() {
      this.$store.dispatch('users/GetAll')
    },
  },

  mounted() {
    this.fetchUsers()
  },
}
</script>
