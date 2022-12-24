<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: ""
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  }
});

const { copied, copyHandler } = useCopy();
</script>

<template>
  <details open>
    <summary class="flex">
      <span class="inline-block opacity-50 hover:opacity-70 i-material-symbols-keyboard-arrow-down rotate-270 open-rotate-0" />
      <div>{{ props.filename }}</div>
      <div class="ml-auto flex items-center">
        <span v-show="copied" class="mr-1 text-3 font-400 opacity-70">Copied</span>
        <button
          class="flex items-center border-none cursor-pointer bg-inherit color-inherit opacity-50 hover:opacity-70"
          @click="copyHandler(props.code)"
        >
          <i :class="['inline-block', copied ? 'i-carbon-checkmark color-teal' : 'i-carbon-copy']" />
        </button>
      </div>
    </summary>
    <slot />
  </details>
</template>

<style lang="scss">
.prose {
  details {
    padding: 0;
    border-radius: 0.25rem;
    @apply bg-gray-1 dark:bg-gray-8;
    &[open] {
      span {
        &:first-child {
          transform: rotate(0);
        }
      }
    }
    summary {
      padding: .625rem .75rem;
    }
    pre {
      margin-top: 0;
      padding-top: 0;
      code{
        .line {
          display: block;
          min-height: 1rem;
          @apply font-mono
        }
      }
    }
  }
}
</style>
