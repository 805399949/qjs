export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return
  let i = -1
  let len = arr.length
  while (++i < len) {
    let item = arr[i]
    fn(item, i, arr)
  }
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
  let len = Math.min(arr1.length, arr2.length)
  let i = -1
  let res = []
  while (++i < len) {
    const item = arr2[i]
    if (arr1.indexOf(item) > -1) res.push(item)
  }
  return res
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1)
}

/**
 * @param {String|Number} value 要验证的字符串或数值
 * @param {*} validList 用来验证的列表
 */
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

/**
 * @param {Number} timeStamp 判断时间戳格式是否是毫秒
 * @returns {Boolean}
 */
const isMillisecond = timeStamp => {
  const timeStr = String(timeStamp)
  return timeStr.length > 10
}

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} currentTime 当前时间时间戳
 * @returns {Boolean} 传入的时间戳是否早于当前时间戳
 */
const isEarly = (timeStamp, currentTime) => {
  return timeStamp < currentTime
}

/**
 * @param {Number} num 数值
 * @returns {String} 处理后的字符串
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 */
const getHandledValue = num => {
  return num < 10 ? '0' + num : num
}

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} startType 要返回的时间字符串的格式类型，传入'year'则返回年开头的完整时间
 */
const getDate = (timeStamp, startType) => {
  const d = new Date(timeStamp * 1000)
  const year = d.getFullYear()
  const nowYear = new Date().getFullYear()
  const month = getHandledValue(d.getMonth() + 1)
  const nowMonth = new Date().getMonth()
  const date = getHandledValue(d.getDate())
  const hours = getHandledValue(d.getHours())
  const minutes = getHandledValue(d.getMinutes())
  const second = getHandledValue(d.getSeconds())
  let resStr = ''
  // if (startType === 'year') resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second
  if (startType === 'year') resStr = parseInt(nowYear) - parseInt(year) + '年前'
  else resStr = parseInt(nowMonth) - parseInt(month) + '月前'
  // else resStr = month + '-' + date + ' ' + hours + ':' + minutes
  return resStr
}

/**
 * @param {String|Number} timeStamp 时间戳
 * @returns {String} 相对时间字符串
 */
export const getRelativeTime = timeStamp => {
  // 判断当前传入的时间戳是秒格式还是毫秒
  const IS_MILLISECOND = isMillisecond(timeStamp)
  // 如果是毫秒格式则转为秒格式
  if (IS_MILLISECOND) Math.floor(timeStamp /= 1000)
  // 传入的时间戳可以是数值或字符串类型，这里统一转为数值类型
  timeStamp = Number(timeStamp)
  // 获取当前时间时间戳
  const currentTime = Math.floor(Date.parse(new Date()) / 1000)
  // 判断传入时间戳是否早于当前时间戳
  const IS_EARLY = isEarly(timeStamp, currentTime)
  // 获取两个时间戳差值
  let diff = currentTime - timeStamp
  // 如果IS_EARLY为false则差值取反
  if (!IS_EARLY) diff = -diff
  let resStr = ''
  const dirStr = IS_EARLY ? '前' : '后'
  // 少于等于59秒
  if (diff <= 59) resStr = diff + '秒' + dirStr
  // 多于59秒，少于等于59分钟59秒
  else if (diff > 59 && diff <= 3599) resStr = Math.floor(diff / 60) + '分钟' + dirStr
  // 多于59分钟59秒，少于等于23小时59分钟59秒
  else if (diff > 3599 && diff <= 86399) resStr = Math.floor(diff / 3600) + '小时' + dirStr
  // 多于23小时59分钟59秒，少于等于29天59分钟59秒
  else if (diff > 86399 && diff <= 2623859) resStr = Math.floor(diff / 86400) + '天' + dirStr
  // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
  else if (diff > 2623859 && diff <= 31567859 && IS_EARLY) resStr = getDate(timeStamp)
  else resStr = getDate(timeStamp, 'year')
  return resStr
}

/**
 * @returns {String} 当前浏览器名称
 */
export const getExplorer = () => {
  const ua = window.navigator.userAgent
  const isExplorer = (exp) => {
    return ua.indexOf(exp) > -1
  }
  if (isExplorer('MSIE')) return 'IE'
  else if (isExplorer('Firefox')) return 'Firefox'
  else if (isExplorer('Chrome')) return 'Chrome'
  else if (isExplorer('Opera')) return 'Opera'
  else if (isExplorer('Safari')) return 'Safari'
}

/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 */
export const hasKey = (obj, key) => {
  if (key) return key in obj
  else {
    let keysArr = Object.keys(obj)
    return keysArr.length
  }
}

/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1)
  const keysArr2 = Object.keys(obj2)
  if (keysArr1.length !== keysArr2.length) return false
  else if (keysArr1.length === 0 && keysArr2.length === 0) return true
  /* eslint-disable-next-line */
  else return !keysArr1.some(key => obj1[key] != obj2[key])
}

/**
 * 是否是null或者undefined
 *
 * @param {} v 参数
 *
 * @return {boolean}
 */
export function isUndef(v) {
  return v === null || v === undefined;
}

/**
 * 对于数字进行format操作
 */
export function _format(number) {
  if (number < 0) {
    return number;
  } else if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }
}

/**
 * 日期格式化
 *
 * @param {Date|Number} v UTC+08:00
 * @param {String} format 格式内容
 *
 * @return {string} 经过format的日期数据
 */
export function dateFormat(v, format) {
  const type = typeof v;
  if (isUndef(v) || (type !== 'number' && !(v instanceof Date)) || v === '') {
    return v;
  }
  // 使用默认的format
  if (!format) {
    format = 'Y-m-d';
  }
  if (typeof v === 'number') {
    v = new Date(v - 8 * 3600000);
  } else {
    v = new Date(v.valueOf() - 8 * 3600000);
  }

  format = format.replace('Y', v.getUTCFullYear());
  format = format.replace('m', _format(v.getUTCMonth() + 1));
  format = format.replace('d', _format(v.getUTCDate()));
  format = format.replace('H', _format(v.getUTCHours()));
  format = format.replace('i', _format(v.getUTCMinutes()));
  format = format.replace('s', _format(v.getUTCSeconds()));

  return format;
}

//获取字符串长度（汉字算两个字符，字母数字算一个）
const getByteLen = function (val) {
  var len = 0;
  for (var i = 0; i < val.length; i++) {
    var a = val.charAt(i);
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    } else {
      len += 1;
    }
  }
  return len;
}
// 只要键盘一抬起就验证编辑框中的文字长度，最大字符长度可以根据需要设定
export const checkLength = (str, textareaId, showLengthId, length) => {
  var maxChars = length; //最多字符数     
  var curr = maxChars - getByteLen(str);
  if (curr > 0) {
    document.getElementById(showLengthId).innerHTML = curr.toString();
  } else {
    document.getElementById(showLengthId).innerHTML = '0';
    document.getElementById(textareaId).readOnly = true;
  }
}

//淡入淡出底层共用  
export const iBase = {  
  Id: function(name){  
      return document.getElementById(name);  
  },  
  //设置元素透明度,透明度值按IE规则计,即0~100  
  SetOpacity: function(ev, v){  
      ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;  
  }  
}  

// js模拟jq淡入效果
export const fadeIn = (iBase, elem, speed, opacity) => {
  /*
   * 参数说明
   * elem==>需要淡入的元素
   * speed==>淡入速度,正整数(可选)
   * opacity==>淡入到指定的透明度,0~100(可选)
   */

  speed = speed || 20;
  opacity = opacity || 100;
  //显示元素,并将元素值为0透明度(不可见)
  elem.style.display = "block";
  iBase.SetOpacity(elem, 0);
  //初始化透明度变化值为0
  var val = 0;
  //循环将透明值以5递增,即淡入效果
  let fn = () => {
    iBase.SetOpacity(elem, val);
    val += 5;
    if (val <= opacity) {
      setTimeout(fn(), speed);
    }
  };
  fn()
}

//淡出效果(含淡出到指定透明度)  
export const fadeOut = (iBase, elem, speed, opacity) => {
  /*  
   * 参数说明  
   * elem==>需要淡入的元素  
   * speed==>淡入速度,正整数(可选)  
   * opacity==>淡入到指定的透明度,0~100(可选)  
   */
  speed = speed || 20;
  opacity = opacity || 0;
  //初始化透明度变化值为0  
  var val = 100;
  //循环将透明值以5递减,即淡出效果  
  let fn = () => {
    iBase.SetOpacity(elem, val);
    val -= 5;
    if (val >= opacity) {
      setTimeout(fn(), speed);
    } else if (val < 0) {
      //元素透明度为0后隐藏元素  
      elem.style.display = 'none';
    }
  };
  fn()
}
