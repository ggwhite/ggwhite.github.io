<template>
  <div class="main-head">
    <b class="name">{{ name }}</b>
    <b class="position">{{ position }}</b>
    <a :href="pdf" alt="Download PDF" class="download"></a>
  </div>
</template>

<script>
export default {
    name: "main-head",
    props: {
      name: String,
      position: String,
      pdf: String,
    }
}
</script>

<style lang="less" scoped>

.main-head {
    b {
      margin-right: 20px;
    }

    .name {
      font-size: 300%;
      font-weight: bold;
    }

    .position {
      font-size: 150%;
      font-weight: bold;
      color: #888;
    }

    .download {
      padding: 5px;
      &:before {
        content: "";
        background-image: url("../assets/icon-download.svg");
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-bottom: -4px;
      }

      @media print {
        display: none;
      }
    }
}

</style>

