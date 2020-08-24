
/**
 * 节流（throttle）:不管事件触发频率多高，只在单位时间内执行一次。
 * 
 * @param event 
 * @param time 
 */
export function throttle(event: Function, time: number) {
  let pre = 0;
  let timer: any = null;
  return function (...args: any) {
    if (Date.now() - pre > time) {
      clearTimeout(timer);
      timer = null;
      pre = Date.now();
      // event.apply(this, args);
      event.apply(throttle, args);
    } else if (!timer) {
      timer = setTimeout(() => {
        // event.apply(this, args);
        event.apply(throttle, args);
      }, time);
    }
  }
}
