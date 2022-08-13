<template>
  <div class="pagination mt-6">
    <button v-if="showNext" w-10 mr-1 @click="next"> + </button>
    <button v-if="showPrevious" w-10 @click="previous"> - </button>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Pagination } from "~/types";

const emit = defineEmits(["currentChange"]);

const props = defineProps({
  pagination: Object as PropType<Pagination>,
  page: Number,
  size: Number,
  total: Number
});

// 总页数
const pageCount = computed(() => Math.ceil(props.total / props.size));

// 显示下一页
const showNext = computed(() => props.page < pageCount.value);

// 显示上一页
const showPrevious = computed(() => props.page > 1);

// 上一页
function previous() {
  emit("currentChange", props.page - 1);
}

// 下一页
function next() {
 emit("currentChange", props.page + 1);
}
</script>

<style lang="scss">
.pagination {
  button {
    cursor: pointer;
    outline: none;
  }
}
</style>
