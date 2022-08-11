<template>
    <el-date-picker
      v-bind="$attrs"
      v-model="date"
      :value-format="valueFormat"
      :type="type"
      @change="change"
      v-on="$listeners"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
    >
    </el-date-picker>
  </template>
<script>
export default {
  name: 'DateRangePicker',
  props: {
    type: {
      // datetimerange
      type: String,
      default: 'daterange'
    },
    startTime: [Number, String, Date],
    endTime: [Number, String, Date],
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd HH:mm:ss'
    },
    startPlaceholder: {
      type: String,
      default: '开始日期'
    },
    endPlaceholder: {
      type: String,
      default: '结束日期'
    }
  },

  data () {
    return {
      date: ''
    }
  },

  watch: {
    startTime: 'watchDateChangeHandler',
    endTime: 'watchDateChangeHandler'
  },

  created () {
    this.watchDateChangeHandler()
  },

  methods: {
    change (val) {
      let startTime = ''
      let endTime = ''
      if (val && Array.isArray(val)) {
        startTime = val[0]
        endTime = val[1]
      }

      this.$emit('update:startTime', startTime)
      this.$emit('update:endTime', endTime)
      this.$emit('change')
    },

    watchDateChangeHandler () {
      const { startTime, endTime } = this
      if ((startTime === 0 || startTime) && endTime) {
        this.date = [startTime, endTime]
        console.log(this.date)
      } else {
        this.date = null
      }
    }
  }
}
</script>
