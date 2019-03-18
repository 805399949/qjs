import axios from 'axios'

import {
  baseURL
} from '@/config'

import {
  Spin
} from 'iview'

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  distroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      Spin.hide()
    }
  }
  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
      //请求之前添加操作 如全局的loading
      //Spin.show()
      if (!Object.keys(this.queue).length) Spin.show()
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      this.distroy(url)
      let {
        data,
        status
      } = res
      return {
        data,
        status
      }
    }, error => {
      this.distroy(url)
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
