<template>
  <div class="hello">
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">2</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
    </el-row>
    <div class="contain">
      <div class="contain__c1"></div>
      <div class="contain__c1"></div>
      <div class="contain__c1"></div>
      <div class="contain__c1"></div>
      <div class="contain__c1"></div>
      <div class="contain__c1"></div>
    </div>
    <div class='button-bootstrap'>
      <router-link to='bootstraplayout'>
       <button>进入栅格</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<style lang="scss" scoped>
@media (min-width: 991px){
 .grid-content {
   border: 1px solid black;
 }
}
@media (min-width: 768px) and (max-width: 991px){
  .grid-content {
    border:1px solid red;
  }
}
@media (max-width: 768px){
  .grid-content {
    border:1px solid orange;
  }
}
</style>
<style lang="scss" scoped>
@import './static/styles/index.scss';

.hello {
  width: 95%;
  margin: 0 auto;
  border: 1px solid red;
}
.contain {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  @include e(c1) {
    width: 33%;
    height: 100px;
    float: left;
    margin: 2px;
    background-color: yellowgreen;
  }
}

@media (min-width: 930px) {
  .contain__c1 {
    width: 33%;
    height: 100px;
    float: left;
    margin: 1px;
    background-color: yellowgreen;
  }
}
@media (min-width: 620px) and (max-width: 930px) {
  .contain__c1 {
    width: 49%;
    height: 100px;
    float: left;
    margin: 2px;
    background-color: yellowgreen;
  }
}
@media (max-width: 620px) {
  .contain__c1 {
    width: 99%;
    height: 100px;
    float: left;
    margin: 2px;
    background-color: yellowgreen;
  }
}
</style>

