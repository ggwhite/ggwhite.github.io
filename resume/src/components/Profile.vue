<template>
  <div class="profile">
    <div class="photo">
      <div>
        <img :src="photo" />
      </div>
    </div>

    <p class="title">
      <b>Personal Info</b>
    </p>
    <div>
      <span class="fa fa-phone-square"></span>
      {{ phone }}
    </div>
    <div>
      <a :href="_email">
        <span class="fa fa-envelope"></span>
        {{ email }}
      </a>
    </div>
    <div>
      <a :href="github" target="_blank">
        <span class="fa fa-github-square"></span>
        {{ github | url }}
      </a>
    </div>
    <div>
      <a :href="linkedin" target="_blank">
        <span class="fa fa-linkedin-square"></span>
        {{ linkedin | url }}
      </a>
    </div>

    <p class="title">
      <b>Programming</b>
    </p>
    <div v-for="(libs, lang) in programming" :key="lang+libs" class="lang">
      <label>{{ lang }}</label>
      <ul class="libs">
        <li v-for="lib in libs" class="lib" :key="lang+lib">{{ lib }}</li>
      </ul>
    </div>

    <p class="title">
      <b>Tools</b>
    </p>
    <div v-for="(libs, lang) in tools" :key="lang+libs" class="lang">
      <label>{{ lang }}</label>
      <ul class="libs">
        <li v-for="lib in libs" class="lib" :key="lang+lib">{{ lib }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
    name: "profile",
    props: {
      photo: String,
      phone: String,
      email: String,
      github: String,
      linkedin: String,
      programming: Object,
      tools: Object,
    },
    computed: {
      _email: function(){
        return "mailto:" + this.email
      }
    },
    filters: {
      url: function(val){
        val = val.replace("http://", "")
        val = val.replace("https://", "")
        return val
      }
    }
}
</script>

<style lang="less" scoped>

.profile {
    padding: 10px;

    .fa {
      margin-right: 10px;
    }

    div {
      margin-bottom: 10px;
    }

    a {
      color: #555;
      text-decoration-line: none;

      &:hover {
        color: #AAA;
        text-decoration-line: none;
      }
    }

    .photo {
      display: none;
      text-align: center;
      padding: 5px;

      @media (min-width: 768px) {
        display: block;
      }
      
      div {
        width: 175px;
        margin: 0 auto;
        border-radius: 10px;
        overflow: hidden;
        padding: 10px;
        border: 2px solid;
        box-shadow: 1px 1px 5px;

        img {
          width: 150px;
          margin: 0 auto;
          border-radius: 10px;
        }
      }
    }

    .title {
      font-size: 120%;
      border-bottom: 1px solid #AAA;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .lang {
      margin-bottom: 5px;


      label {
        font-weight: bold;
        margin-bottom: 2px;
      }

      .libs {
        list-style-type: none;
        margin-bottom: 0;
        padding-left: 0;

        .lib {
          display: inline-block;
          padding: 1px 7px;
          margin: 5px;
          border: 1px solid;
          border-radius: 7px;
          box-shadow: #D7D7D7 1px 2px 2px;
        }
      }

    }
}

</style>

