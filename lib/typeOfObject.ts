import { globalReplace } from './common'

export function typeOfObject(obj: any): String {
  let reStr = ''
  if (obj) {
    const objTypeStr = Object.prototype.toString.call(obj)
    // const newObjTypeStr = globalReplace(objTypeStr, '\[|\]', '')

    const newObjTypeStr = objTypeStr.replace(/\[|\]/g, '')

    const arr = newObjTypeStr.split(' ')
    if (arr.length === 2) {
      reStr = arr[1]
    }
  }
  return reStr
}
