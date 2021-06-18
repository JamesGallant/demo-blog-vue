<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="/">
        <img alt="company logo" src="@/assets/icon.png" />
      </b-navbar-brand>
      <b-navbar-brand href="/">
        <h1>Jimmy's code club</h1>
      </b-navbar-brand>
      <b-navbar-nav id="nav-links-right" class="ml-auto">
        <b-nav-item to="/" active> Home </b-nav-item>
        <b-nav-item to="#" active> Blog </b-nav-item>
        <b-nav-item to="/about" active> About </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nav-links-right {
  padding-right: 5em;
  font-size: 25px;
}
</style>
