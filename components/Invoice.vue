<template>
  <nuxt-link class="invoice flex" :to="{ name: 'Invoice-invoiceId', params: { invoiceId: invoice.invoiceId } }">
    <div class="left flex lg">
      <span class="tracking-number">#{{ invoice.invoiceId }}</span>
      <span class="due-date">{{ invoice.paymentDueDate }}</span>
      <span class="person">{{ invoice.clientName }}</span>
    </div>
    <div class="right flex lg">
      <span class="price">${{ invoice.invoiceTotal }}</span>
      <div
        class="status-button flex"
        :class="{ paid: invoice.invoicePaid, draft: invoice.invoiceDraft, pending: invoice.invoicePending }"
      >
        <span v-if="invoice.invoicePaid">Paid</span>
        <span v-if="invoice.invoiceDraft">Draft</span>
        <span v-if="invoice.invoicePending">Pending</span>
      </div>
      <div class="icon">
        <img src="@/assets/icon-arrow-right.svg" alt="arrow right icon" />
      </div>
    </div>
    <div class="d-sm-block d-md-none d-lg-none">
      <div class="top-invoice">
        <div class="row">
          <div class="col-6">
            <span class="tracking-number">#{{ invoice.invoiceId }}</span>
          </div>
          <div class="col-6 text-right">
            <span class="person">{{ invoice.clientName }}</span>
          </div>
        </div>
      </div>
      <div class="bottom-invoice">
        <div class="row">
          <div class="col-6">
            <span class="due-date">{{ invoice.paymentDueDate }}</span>
            <span class="price">${{ invoice.invoiceTotal }}</span>
          </div>
          <div class="col-6 text-right">
            <div
              class="status-button"
              :class="{ paid: invoice.invoicePaid, draft: invoice.invoiceDraft, pending: invoice.invoicePending }"
            >
              <span v-if="invoice.invoicePaid">Paid</span>
              <span v-if="invoice.invoiceDraft">Draft</span>
              <span v-if="invoice.invoicePending">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Invoice',
  props: {
    invoice: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.invoice {
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 20px 30px;
  background-color: #1e2139;

  span {
    font-size: 13px;
  }

  .left {
    align-items: center;
    flex-basis: 60%;
    gap: 16px;

    span {
      flex: 1;
    }

    .tacking-number {
      text-transform: uppercase;
    }
  }

  .right {
    gap: 16px;
    flex-basis: 40%;
    align-items: center;

    .price {
      flex: 1;
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
