<template>
  <div class="main-head">
    <b class="name">{{ name }}</b>
    <b class="position">{{ position }}</b>
  </div>
</template>

<script>
export default {
    name: "main-head",
    props: {
      name: String,
      position: String,
    }
}
</script>

<style lang="less" scoped>

.main-head {
    .name {
      font-size: 300%;
      font-weight: bold;
    }

    .position {
      font-size: 150%;
      font-weight: bold;
      color: #888;
      margin-left: 20px;
    }
}

</style>

