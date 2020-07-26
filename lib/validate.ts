/**
 * Created by advoster on 2020/07/26.
 */

export default class Validate {
  constructor() { }

  /**
   * @param {string} path
   * @returns {Boolean}
   */
  isExternal(path: any): boolean {
    return /^(https?:|mailto:|tel:)/.test(path)
  }

  /**
   * @param {String} str
   * @returns {Boolean}
   */
  validUsername(str: String): boolean {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
  }

  /**
   * @param {string} url
   * @returns {Boolean}
   */
  validURL(url: string): boolean {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
  }

  /**
   * @param {string} str
   * @returns {Boolean}
   */
  validLowerCase(str: string): boolean {
    const reg = /^[a-z]+$/
    return reg.test(str)
  }

  /**
   * @param {string} str
   * @returns {Boolean}
   */
  validUpperCase(str: string): boolean {
    const reg = /^[A-Z]+$/
    return reg.test(str)
  }

  /**
   * @param {string} str
   * @returns {Boolean}
   */
  validAlphabets(str: string): boolean {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
  }

  /**
   * @param {string} email
   * @returns {Boolean}
   */
  validEmail(email: string): boolean {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
  }

  /**
   * @param {any} str
   * @returns {Boolean}
   */
  isString(str: any): boolean {
    if (typeof str === 'string' || str instanceof String) {
      return true
    }
    return false
  }

  /**
   * @param {any} arg
   * @returns {Boolean}
   */
  isArray(arg: any): boolean {
    if (typeof Array.isArray === 'undefined') {
      return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
  }
}