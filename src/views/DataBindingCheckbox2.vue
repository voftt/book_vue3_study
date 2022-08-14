<template>
  <div>
    <label><input type="checkbox" value="Seoul" v-model="checked"> Seoul</label>
    <label><input type="checkbox" value="Daegu" v-model="checked"> Daegu</label>
    <label><input type="checkbox" value="Jeju" v-model="checked"> Jeju</label>
    <br>
    <span>checked city : {{ checked }} </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: []
    };
  },
};
</script>
