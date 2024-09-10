<template>
  <div class="page">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
export default {
  name: 'HomeView',
  components: {
    Header,
    Main
  },
  data() {
    return {
      name: 'Gabriel',
    };
  },
};
</script>

<style>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>