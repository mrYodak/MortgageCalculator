<template>
  <v-list-item class="user-row elevation-2">
    <v-layout row align-content-center justify-space-between pa-3>
      <div class="d-flex flex-column align-start pl-1">
        {{ user.name }} with {{ user.interest }}% annual interest for
        {{ user.term }}
        months
        <div class="d-flex">
          Max: {{ user.maxLoan }}$ Downpay: {{ user.downPay }}%
        </div>
      </div>
      <div class="d-flex align-center">
        <v-btn
          @click="openEditModal()"
          class="accent bright--text align-self-center"
          icon
          :loading="usersLoading"
        >
          <v-icon>mdi-calculator</v-icon>
        </v-btn>
      </div>
    </v-layout>

    <!-- <modal :show="showAddModal" @close="toggleAddModal">
      <template v-slot:modal-header>Edit User</template>
      <template v-slot:modal-body>
        <edit-user-form
          :user="user"
          @add-user-success="toggleAddModal(false)"
          @add-user-error="toggleAddModal(false)"
          @close="toggleAddModal"
        />
      </template>
    </modal> -->
  </v-list-item>
</template>

<script>
import { loadingStates } from '../../../mixins/loading-state'
import { ModalService } from '../../../services/modal.service'
import CalculatorForm from '../CalculatorForm.vue'

export default {
  name: 'UserListRow',
  mixins: [loadingStates],

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    showAddModal: false,
    showConfirmModal: false,
  }),

  methods: {
    toggleAddModal(show) {
      this.showAddModal = !!show
    },

    openEditModal() {
      ModalService.openGenericModal(CalculatorForm, { user: this.user })
    },
  },
}
</script>
