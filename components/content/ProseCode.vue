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
    <summary class="flex color-gray dark:color-gray-3">
      <span class="inline-block opacity-70 i-material-symbols-keyboard-arrow-down rotate-270" />
      <div>{{ props.filename }}</div>
      <button
        class="ml-auto p-0 flex items-center border-none w-4 h-4 cursor-pointer bg-inherit color-inherit opacity-70"
        :disabled="copied"
        @click="copyHandler(props.code)"
      >
        <i :class="['inline-block', copied ? 'i-carbon-checkmark color-teal-6 dark:color-teal' : 'i-carbon-copy']" />
      </button>
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
