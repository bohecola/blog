<template>
  <div class="records">
    <div
      v-for="(posts, year) of records"
      :key="year"
      class="record">
      <!-- 年份 -->
      <div class="record-year">{{ year }}</div>
      <!-- 列表 -->
      <post-list
        :key="year"
        :posts="posts"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: records } = useAsyncData('records', () => $fetch('/api/records'));
</script>

<style lang="scss" scoped>
.record {
  position: relative;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }

  &-year {
    position: absolute;
    top: -5.5rem;
    left: -2.25rem;
    font-size: 8.5rem;
    font-weight: 500;
    color: rgba($color: #999, $alpha: 0.2);
    z-index: -1;
  }
}
</style>