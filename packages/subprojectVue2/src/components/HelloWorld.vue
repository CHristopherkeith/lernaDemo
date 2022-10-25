<template>
  <div class="hello">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-button type="primary">hello</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
$color: #d88fd8;
.hello {
  background-color: $color;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
