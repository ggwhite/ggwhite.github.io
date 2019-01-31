<template>
  <div class="project">
    <div class="name">
      <label>{{ name }}</label>
      <label>{{ start }} - {{ end }}</label>
    </div>
    <description :description="description"></description>
  </div>
</template>

<script>
import Description from '@/components/Description.vue'

export default {
    name: "project",
    props: {
      name: String,
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

.project {

  .name {
    font-weight: bold;
    text-align: left;

    label {
      margin-right: 20px;
    }
  }

}

</style>

