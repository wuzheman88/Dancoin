<template>
  <el-container>
    <el-header>
      <div v-loading="isLoading">
        <el-row>
          <el-col :span="2" :offset="10">
            <el-button type="main" style="width:100%" @click="testCalPower">算力测试</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="main" style="width:100%" @click="login">登录</el-button>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-aside width="200px">
    </el-aside>
    <el-main>
      <nuxt />
    </el-main>
    <div class="input-shoot">
      <el-input type="text" v-model="content">
        <el-button @click="onShoot" slot="append">发布</el-button>
      </el-input>
    </div>
    <canvas ref="dan_canvas" class="edit-modal">
        您的浏览器太旧了，推荐升级至弹幕浏览器
    </canvas>
  </el-container>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  /* -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%; */
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.input-shoot {
  z-index: 101;
  position: absolute;
  top: 40px;
  left: 35%;
  width: 30%;
}

.edit-modal {
  /* background: #000; */
  /* width: 100%; */
  /* height: 100%; */
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  /* opacity: 0.5; */
  /* filter: Alpha(opacity=50); */
  z-index: 100;
}
</style>

<script>
import { Barrage } from '~/components/barrage.js'

export default {
  data () {
    return {
      content: '',
      barrage: null,
      isLoading: false
    }
  },
  methods: {
    testCalPower: async function () {
      this.isLoading = true
      // alert('isTesting....')
    },
    login: function () {

    },
    onShoot: function () {
      let validContent = this.content.trim()
      if (validContent.length > 0) {
        this.barrage.shoot(validContent)
        this.content = ''
      }
    }
  },
  mounted: function () {
    let canvas = this.$refs.dan_canvas
    canvas.width = document.documentElement.clientWidth
    canvas.height = document.documentElement.clientHeight
    let barrage = new Barrage(canvas);
    barrage.draw();
    const textList = ['弹幕', '666', '233333333',
      'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
      'Angular', '测试弹幕效果', '弹幕', '666', '233333333',
      'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
      'Angular', '测试弹幕效果', '弹幕', '666', '233333333',
      'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
      'Angular', '测试弹幕效果'
    ];

    textList.forEach((t) => {
      barrage.shoot(t);
    })

    this.barrage = barrage
  }
}
</script>

