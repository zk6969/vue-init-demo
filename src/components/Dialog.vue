<template>
    <el-dialog v-bind="$attrs">
      <template v-if="$slots.title">
        <slot name="title" slot="title"></slot>
      </template>
      <slot></slot>
      <template slot="footer">
        <el-button @click="close">取 消</el-button>
        <SubmitButton type="primary" :submit="btnSubmit">确 定</SubmitButton>
      </template>
    </el-dialog>
  </template>

<script>
import SubmitButton from '@/components/SubmitButton'
export default {
  name: 'Dialog',
  components: { SubmitButton },
  props: {
    submit: Function
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    async btnSubmit () {
      await this.submit()
      this.close()
    }
  }
}
</script>
