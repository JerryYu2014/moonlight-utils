
export default class EsEnum {
  constructor(arr) {
    const typeArr = [];

    if (!Array.isArray(arr)) {
      throw Error('arr is not an array!');
    }

    arr.forEach(element => {
      if (!element.key || (Number.isNaN(element.value) && !element.value)) {
        return;
      }
      // 保存key值组成的数组，方便A.getName(value)类型的调用
      typeArr.push(element.key);
      // 根据key生成不同属性值，以便A.B.value类型的调用
      this[element.key] = element;
    });

    // 保存源数组
    this.arr = arr;
    this.typeArr = typeArr;
  }

  /**
   * 根据key得到对象
   * @param {*} key 
   */
  valueOf(key) {
    return this.arr[this.typeArr.indexOf(key)];
  }

  /**
   * 根据key获取value值
   * @param {*} key 
   */
  getValueByKey(key) {
    const prop = this.valueOf(key);
    if (!prop) {
      throw Error(`No enum constant${key}`);
    }
    return prop.value;
  }

  /**
   * 返回源数组
   */
  getValues() {
    return this.arr;
  }
}

// 使用方式
// const ResourceStatusEnum = new EsEnum([
//     { key: '未审核', value: 0 },
//     { key: '启用', value: 1 },
//     { key: '审核未通过', value: 2 },
//     { key: '停用', value: 3 },
// ]);

// console.log(ResourceStatusEnum.未审核.value);
// console.log(ResourceStatusEnum.valueOf('启用'));
// console.log(ResourceStatusEnum.getCodeByKey('启用'));
// console.log(ResourceStatusEnum.getValues());