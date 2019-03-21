// import HttpRequest from '@/lib/axios'
// const axios = new HttpRequest()
// export default axios

import HttpRequest from '@/lib/axios'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios
