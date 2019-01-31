<template>
  <div class="experience">
    <div class="position">{{ position }}</div>
    <div class="period">{{ start }} - {{ end }}</div>
    <div class="company">{{ company }}</div>
    <description :description="description"></description>
  </div>
</template>

<script>
import Description from '@/components/Description.vue'

export default {
    name: "experience",
    props: {
      company: String,
      position: String,
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

.experience {

  display: grid;
  grid-template-areas: "position period"
                       "company company"
                       "desc desc";
  grid-template-columns: 1fr 200px;

  .position {
    font-size: 120%;
    font-weight: bold;
    text-align: left;
    grid-area: position;
  }

  .company {
    grid-area: company;
    font-weight: bold;
  }

  .period {
    grid-area: period;
    font-weight: bold;
    text-align: right;
  }

  .description {
    grid-area: desc;
    margin-top: 10px;
  }

}

</style>

