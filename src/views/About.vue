<template>
  <div class="about">
    <el-form ref="form" :model="dataForm" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" v-model="dataForm.username"></el-input>
      </el-form-item>
      <el-form-item>
        <SubmitButton type="primary" :submit="formSubmit">提 交</SubmitButton>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataForm: {
        username: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ]
      }
    }
  },
  methods: {
    validate () {
      return this.$refs.form.validate()
    },
    async formSubmit () {
      // 表单验证
      await this.validate()
      // 提交表单数据
      // await this.$http.post('/api/xxxx', this.dataForm)
      await this.$http.post('/api/queries/raw', {
        p: {
        }
      }).then(result => {
        console.log(result.body.rows)
      }).catch(error => {
        console.dir(error)
      })
      console.log('post')
      this.$message.success('提交成功！')
      // this.$router.back()
    }
  }
}
</script>
