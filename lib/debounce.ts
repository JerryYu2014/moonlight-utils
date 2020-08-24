
/**
 * 防抖（debounce）：不管事件触发频率多高，
 * 一定在事件触发n秒后才执行。
 * 如果你在一个事件触发的 n 秒内又触发了这个事件，
 * 就以新的事件的时间为准，n秒后才执行，
 * 总之，触发完事件 n 秒内不再触发事件，n秒后再执行。
 * 
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func: Function, wait: number, immediate: boolean): any {
  let timeout: any, args: any, context: any, timestamp: any, result: any

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args: any) {
    // context = this
    context = debounce
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
