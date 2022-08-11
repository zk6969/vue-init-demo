<template>
    <el-button v-bind="$attrs" :loading="loading" @click="click">
      <slot></slot>
    </el-button>
  </template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    // 提交函数、
    submit: {
      type: Function,
      require: true
    }
  },
  data () {
    return {
      loading: false
    }
  },

  methods: {
    async click () {
      try {
        this.loading = true
        await this.submit()
      } finally {
        console.log('finaly')
        this.loading = false
      }
    }
  }
}
</script>
