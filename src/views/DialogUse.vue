<template>
    <Dialog :visible.sync="visible" :submit="dialogSubmit">
      <h3 slot="title">删除提示</h3>
      你确定删除这个用户吗？
    </Dialog>
  </template>
<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  methods: {
    async dialogSubmit () {
      // 删除操作
      // await this.$http.post('/api/xxxx?id=xxxxx')
      await this.$http.post('/api/queries/raw', {
        p: {
        }
      }).then(result => {
        console.log(result.body.rows)
      }).catch(error => {
        console.dir(error)
      })
      this.$message.success('删除成功！')
      this.$emit('change')
    }
  }
}
</script>
