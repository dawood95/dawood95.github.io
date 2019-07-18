<template>
<div id="app">
  <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">

  <section class="hero">
    <div class="hero-body">
    <div class="container">
        <p class="title has-text-weight-light is-size-2">Sheik Dawood</p>
        <p class="subtitle has-text-grey is-size-5">Researcher + Engineer</p>
        <div class="buttons">
          <a class="button is-white" href="mailto:dawood95@gmail.com?Subject=Hello!">
            <span class="icon is-large has-text-grey-dark">
              <i class="fas fa-2x fa-envelope"></i>
            </span>
          </a>
          <a class="button is-white" href="https://github.com/dawood95" target="_blank">
            <span class="icon is-large has-text-grey-dark">
              <i class="fab fa-2x fa-github"></i>
            </span>
          </a>
          <a class="button is-white" href="https://www.linkedin.com/in/dawood95" target="_blank">
            <span class="icon is-large has-text-grey-dark">
              <i class="fab fa-2x fa-linkedin"></i>
            </span>
          </a>
          <a class="button is-light has-text-medium" href="/Sheik Dawood.pdf" target="_blank">
            Resume
          </a>
        </div>
        <br/>
        <About/>
        <br/>
        <Projects/>
    </div>
    </div>
    <div class="hero-foot container">
      <p class="is-size-7 has-text-grey">Last updated 07/17/2019</p>
    </div>
  </section>
</div>
</template>

<script>
//import Navbar from '@/components/Nav.vue';
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue';

export default {
  name: 'app',
  components: {
    About,
    Projects
  }
}
</script>

<style lang="sass">
  @import './assets/theme.sass'
</style>
