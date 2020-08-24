
import { cleanArray } from './common';

/**
 * @param {Object} json
 * @returns {string}
 */
export function param(json: any): string {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url: string) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  )
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url: string) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj: any = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * 通过键名获取 url 中 query string 的值
 * 
 * @param key 键名
 */
export function getQueryValueByKey(key: string) {
  const arr = window.location.hash.split("?");
  if (arr.length > 1) {
    const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
    const r = arr[1].substr(0).match(reg);
    if (r != null) {
      return decodeURI(r[2]);
    }
  }
  return null;
}
