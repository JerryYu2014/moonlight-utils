/**
 * Created by advoster on 2020/07/26.
 */

// export default class ToTree {
//   constructor() { }

//   /**
//   * 将平级数据转换为树结构数据（适用于来自同一个表的数据，即idName的数据不重复）
//   * @param {any} data 平级数组数据
//   * @param {any} idName 唯一id 名称
//   * @param {any} pidName 父级id 名称
//   * @param {any} nameName 自定义输出键名称
//   * @param {any} valueName 自定义输出值名称
//   */
//   toTree(data: any, idName: any, pidName: any, nameName: any, valueName: any): any {
//     const result: any = [];
//     if (!Array.isArray(data)) {
//       return result;
//     }
//     data.forEach((item) => {
//       delete item.children;
//     })
//     var map: any = {};
//     data.forEach((item) => {
//       // 深拷贝，该方式将使该转换方法失效
//       // map[item[idName]] = JSON.parse(JSON.stringify(item));
//       // 浅拷贝,将对 item 的引用传递给 map
//       map[item[idName]] = item;
//     })
//     data.forEach((item) => {
//       // 深拷贝，该方式将使该转换方法失效
//       // var parent = JSON.parse(JSON.stringify(map[item[pidName]]));
//       // 浅拷贝,将对 map 的引用传递给 parent
//       var parent = map[item[pidName]];
//       if (parent) {
//         // 利用了浅拷贝的引用传递，最终 data 中的 item 将会改变
//         (parent.children || (parent.children = [])).push(
//           nameName && valueName ? Object.assign(item, { label: item[nameName], id: item[valueName] }) : item);
//       } else {
//         result.push(
//           nameName && valueName ? Object.assign(item, { label: item[nameName], id: item[valueName] }) : item);
//       }
//     })
//     return result;
//   }
// }

/**
* 将平级数据转换为树结构数据（适用于来自同一个表的数据，即idName的数据不重复）
* @param {any} data 平级数组数据
* @param {any} idName 唯一id 名称
* @param {any} pidName 父级id 名称
* @param {any} nameName 自定义输出键名称
* @param {any} valueName 自定义输出值名称
*/
export function toTree(data: any, idName: any, pidName: any, nameName: any, valueName: any): any {
  const result: any = [];
  if (!Array.isArray(data)) {
    return result;
  }
  data.forEach((item) => {
    delete item.children;
  })
  var map: any = {};
  data.forEach((item) => {
    // 深拷贝，该方式将使该转换方法失效
    // map[item[idName]] = JSON.parse(JSON.stringify(item));
    // 浅拷贝,将对 item 的引用传递给 map
    map[item[idName]] = item;
  })
  data.forEach((item) => {
    // 深拷贝，该方式将使该转换方法失效
    // var parent = JSON.parse(JSON.stringify(map[item[pidName]]));
    // 浅拷贝,将对 map 的引用传递给 parent
    var parent = map[item[pidName]];
    if (parent) {
      // 利用了浅拷贝的引用传递，最终 data 中的 item 将会改变
      (parent.children || (parent.children = [])).push(
        nameName && valueName ? Object.assign(item, { label: item[nameName], id: item[valueName] }) : item);
    } else {
      result.push(
        nameName && valueName ? Object.assign(item, { label: item[nameName], id: item[valueName] }) : item);
    }
  })
  return result;
}
