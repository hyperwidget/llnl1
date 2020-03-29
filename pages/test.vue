<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Free" icon="github-circle">
        HI
        <a href="https://github.com/buefy/buefy">
          GitHub test
        </a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">
        No other internal dependency
      </card>
    </div>
    <card>
      <img :src="cat" />
    </card>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  },
  async fetch({ store, params }) {
    await store.dispatch('demo/fetchCat')
  },
  computed: {
    cat() {
      return this.$store.state.demo?.cat
    }
  }
}
</script>
