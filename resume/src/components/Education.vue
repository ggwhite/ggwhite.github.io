<template>
  <div class="education">
    <div class="degree">
      <b>{{ degree }}</b>
      <b>{{ start }} - {{ end }}</b>
    </div>
    <b>{{ school }}</b>
  </div>
</template>

<script>
import Description from '@/components/Description.vue'

export default {
    name: "education",
    props: {
      degree: String,
      school: String,
      start: String,
      end: String,
      description: String | Object
    },
    components: {
      Description
    }
}
</script>

<style lang="less" scoped>

.education {

  .degree {

    b {
      margin-right: 20px;
    }
  }

}

</style>

