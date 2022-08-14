<template>
  <nav>
    <router-link to="/">Home</router-link> ||
    <router-link to="/about">About</router-link> ||
    <nav>
      <router-link to="/databinding">Data Binding</router-link> ||
      <router-link to="/databindinghtml">Data Binding Html</router-link> ||
      <router-link to="/databindinginputtext"
        >Data Binding Input Text</router-link
      >
      ||
      <router-link to="/databindinginputtext"
        >Data Binding Input Number</router-link
      >
      ||
      <router-link to="/databindingtextarea">Data Binding Textarea</router-link
      >||
      <router-link to="/databindingselect">Data Binding Select</router-link>||
      <router-link to="/databindingcheckbox">Data Binding Checkbox</router-link>||
      <router-link to="/databindingcheckbox2">Data Binding Checkbox2</router-link> ||
      <router-link to="/databindingcheckbox2">Data Binding Radio</router-link> ||
      <router-link to="/databindinglist">Data Binding List</router-link>
      <nav>
        <router-link to="/eventclick">Event Click</router-link> ||
        <router-link to="/eventclick">Watch</router-link> ||
        <router-link to="/eventclick">Watch2</router-link>
      </nav>
    </nav>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
