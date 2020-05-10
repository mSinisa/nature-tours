<template>
  <div>
    <b-col>
      <b-card
        :title="title"
        :img-src="imgSrc"
        style="max-width: 20rem;"
        img-alt="View for the top"
        class="my-3"
        img-top
      >
        <b-card-text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
          nisi!
        </b-card-text>
        <b-button
          v-b-modal="modalId"
          variant="info"
          v-b-tooltip.hover
          title="See more"
        >
          Details
        </b-button>
        <b-modal :id="modalId" title="Details">
          <p class="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            est ullam excepturi optio culpa sit illum eos quis perspiciatis
            quam.
          </p>
        </b-modal>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    modalId() {
      return `modal-${this.id}`;
    }
  }
};
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 191px;
  object-fit: cover;
}
.card-body {
  background: linear-gradient(#dedfdee8, #dfe0e0d5, #d4d4d4dc, #e2e2e2d8),
    url('../../public/leaves.jpg') !important;
  background-size: cover;
}
.card {
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0px 14px 20px 10px rgba(0, 0, 0, 0.315);
}
</style>
