<template>
  <div>
    <label><input type="radio" v-bind:value="radioValue1" v-model="picked">Seoul</label>
    <label><input type="radio" v-bind:value="radioValue2" v-model="picked">Daegu</label>
    <label><input type="radio" v-bind:value="radioValue3" v-model="picked">Jeju</label>
    <br>
    <span> 선택한 지역 : {{ picked }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picked: '',
      radioValue1: '서울',
      radioValue2: '대구',
      radioValue3: '제주',
   };
  }
}
</script>
