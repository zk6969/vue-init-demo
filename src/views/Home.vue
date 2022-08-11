<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to vue init project"/>
    <date-range-picker :startTime.sync="dataForm.startTime" :endTime.sync="dataForm.endTime" @change="change2"></date-range-picker>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
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
    change2 (val) {
      console.log(val)
    }
  }
}
</script>
