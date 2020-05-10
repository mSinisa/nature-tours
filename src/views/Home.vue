<template>
  <b-container>
    <b-row align-v="center" align-h="around" v-if="getDisplayTours.length > 0">
      <TourCard
        v-for="tour in getDisplayTours"
        :key="tour.id"
        :title="tour.name"
        :imgSrc="tour.image"
        :id="tour.id"
      />
    </b-row>
    <div v-else class="py-5">
      <b-row align-h="center">
        <b-icon-exclamation-diamond
          class="text-info"
          style="width: 120px; height: 120px;"
        >
        </b-icon-exclamation-diamond>
      </b-row>
      <h3 class="my-3">
        No tours found with that criteria. Please try different search
      </h3>
    </div>
    <b-row align-h="center" v-if="getDisplayTours.length > 0" class="my-3">
      <b-pagination
        v-model="currentPage"
        :total-rows="getRows"
        :per-page="perPage"
        @input="paginate(currentPage)"
      >
        <template v-slot:first-text>
          <span class="text-info">First</span>
        </template>
        <template v-slot:prev-text>
          <span class="text-info">Prev</span>
        </template>
        <template v-slot:next-text>
          <span class="text-info">Next</span>
        </template>
        <template v-slot:last-text>
          <span class="text-info">Last</span>
        </template>
      </b-pagination>
    </b-row>
  </b-container>
</template>

<script>
import TourCard from '@/components/TourCard';
import { mapGetters } from 'vuex';
import { BIconExclamationDiamond } from 'bootstrap-vue';

export default {
  name: 'Home',
  components: {
    TourCard,
    BIconExclamationDiamond
  },
  data() {
    return {
      currentPage: 1,
      perPage: 3
    };
  },
  methods: {
    async getData() {
      try {
        await this.$store.dispatch('getData');
      } catch (err) {
        console.log(err);
      }
    },
    paginate(pageNum) {
      this.$store.dispatch('paginate', {
        currentPage: pageNum,
        perPage: this.perPage
      });
    }
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapGetters(['getRows', 'getTours', 'getDisplayTours'])
  }
};
</script>

<style>
ul.pagination {
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2) !important;
}
.page-link {
  color: #17a2b8 !important;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff !important;
  background-color: #17a2b8 !important;
  border-color: #17a2b8 !important;
}
</style>
