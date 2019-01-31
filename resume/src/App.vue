<template>
  <div id="app">
    <div id="nav">
      <div id="links">
        <router-link to="/">Home</router-link>
        <router-link to="/resume/en">Resume(English)</router-link>
        <router-link to="/resume/zh-tw">Resume(Chinese)</router-link>
      </div>
      <div id="social">
        <a :href="_email" class="email"></a>
        <a :href="github" class="github" target="_blank"></a>
        <a :href="linkedin" class="linkedin" target="_blank"></a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      email: "eddy6868@msn.com",
      github: "https://github.com/ggwhite",
      linkedin: "https://linkedin.com/in/white-chang",
    }
  },
  computed: {
    _email: function(){
      return "mailto:" + this.email
    }
  }
}
</script>


<style lang="less">

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #555;
  padding-bottom: 20px;
}

#nav {
  position: relative;

  &:after {
    content: "";
    background-color: #555;
    background-image: url(assets/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 85%;
    opacity: 0.05;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  
  height: 400px;
  padding: 30px;
  margin-bottom: 20px;

  #links {
    // display: none;

    a {
      display: inline-block;
      padding: 10px 15px;
      font-weight: bold;
      color: #555;

      &:hover {
        padding: 7px 12px;
        border: 3px solid;
        text-decoration: none;
      }

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  #social {
    background-color: #5de4a7;
    margin: 0 auto;
    padding: 10px;
    border-radius: 30px;
    display: inline-block;
    position: absolute;
    top: 35px;
    right: 30px;
  }

  .email {
    padding: 5px;
    &:before {
      content: "";
      background-image: url("assets/icon-email.svg");
      background-size: contain;
      background-repeat: no-repeat;
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 10px;
      margin-bottom: -4px;
    }
  }

  .github {
      padding: 5px;
      &:before {
        content: "";
        background-image: url("assets/icon-github.svg");
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-bottom: -4px;
      }
    }

    .linkedin {
      padding: 5px;
      &:before {
        content: "";
        background-image: url("assets/icon-linkedin.svg");
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-bottom: -4px;
      }
    }

  @media print {
    display: none;
  }

}

</style>
