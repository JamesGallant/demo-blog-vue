<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">
        <img alt="company logo" src="@/assets/logo2.png" id="logo" />
      </b-navbar-brand>
      <b-navbar-brand href="/">
        <h1>James Gallant</h1>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="nav-links-right" class="ml-auto">
          <b-nav-item to="/" active> Home </b-nav-item>
          <b-nav-item to="/blog" active> Blog </b-nav-item>
          <b-nav-item to="/about" active> About </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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

/* This is new*/
#nav-links-right {
  padding-right: 5em;
  font-size: 25px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #f9d241;
    }
  }
}
#logo {
  display: block;
  max-width: 100px;
  max-height: 100px;
  width: auto;
  height: auto;
}
</style>
