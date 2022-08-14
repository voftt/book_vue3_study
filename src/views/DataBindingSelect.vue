<template>
  <div>
    <select v-model="city">
      <option value="02">Seoul</option>
      <option value="053">Daegu</option>
      <option value="064">Jeju</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      city: "064",
    };
  },
};
</script>
