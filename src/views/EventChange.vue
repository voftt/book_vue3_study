<template>
  <select v-model="selectedValue" @change="changeSelect">
    <option value="Seoul">Seoul</option>
    <option value="Busan">Busan</option>
    <option value="Jeju">Jeju</option>
  </select>
</template>
<script>
export default {
  data() {
    return {
      selectedValue: ''
    };
  },
  methods: {
    changeSelect(){
      alert(this.selectedValue);
    }
  }
};
</script>
