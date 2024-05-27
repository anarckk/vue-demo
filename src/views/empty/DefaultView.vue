<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "../../components/HelloWorld.vue";
</script>

<template>
  <div class="fbody">
    <div class="fapp">
      <header>
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />

        <div class="wrapper">
          <HelloWorld msg="You did it!" />

          <nav>
            <RouterLink to="/default/">Home</RouterLink>
            <RouterLink to="/default/about">About</RouterLink>
          </nav>
        </div>
      </header>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.fbody {
  min-height: calc(100vh - 40px);
}

@media (min-width: 1024px) {
  .fbody {
    display: flex;
    place-items: center;
  }
}

.fapp {
  margin: 0 auto;
  font-weight: normal;
  padding: 2rem;
}

@media (min-width: 1024px) {
  .fapp {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

header {
  line-height: 1.5;
  max-height: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
