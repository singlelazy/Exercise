<template>
  <div class="hello">
    <ul>
        <router-link tag='li' :to="{name:'yellow'}">
          黄香蕉
        </router-link>
        <router-link tag='li' :to="{name:'red'}">
          红苹果
        </router-link>
        <router-link tag='li' :to="{name:'orange'}">
          橙橙子
        </router-link>
        <router-view></router-view>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.active{
  background: blue;
}
</style>
