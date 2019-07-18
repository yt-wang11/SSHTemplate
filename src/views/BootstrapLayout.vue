<template>
  <div>
    <div class='edition-heart'>
      <div class='container'>
        <div class="row user-list">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 user">1</div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 user">2</div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 user">3</div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 user">4</div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 user">5</div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 user">6</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.edition-heart {
  border: 1px solid red;
  margin: 0 auto;
  overflow: hidden;
}
.row {
  margin: 0 auto;
  .user {
    // border: 1px solid blueviolet;
    background-color: blue;
  }
}
@media (min-width: 992px) {
  .col-lg-3 {
    max-width: 23%;
    margin-right: 2.66%;
    padding: 0;
    &:nth-child(4){
     margin-right: 0;
   }
  }
}
</style>
