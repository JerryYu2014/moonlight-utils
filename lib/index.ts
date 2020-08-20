/**
 * Created by advoster on 2020/07/26.
 */

// import Pinyin from './pinyin';
// import ToTree from './totree';
// import Validate from './validate';

// export default class MoonlightUtils {
//   private tt: ToTree;
//   private py: Pinyin;
//   private vd: Validate;

//   private static _instance: MoonlightUtils;

//   constructor() {
//     this.tt = new ToTree();
//     this.py = new Pinyin();
//     this.vd = new Validate();
//   }

//   public static getInstance(): MoonlightUtils {
//     if (!this._instance) {
//       this._instance = new MoonlightUtils;
//     }
//     return this._instance;
//   }

//   public toTree(data: any, idName: any, pidName: any, nameName: any, valueName: any): any {
//     return this.tt.toTree(data, idName, pidName, nameName, valueName);
//   }

//   public isExternal(path: any): boolean {
//     return this.vd.isExternal(path);
//   }

//   public add(a: number, b: number): number {
//     return a + b;
//   }

//   public makePy(str: String, extractFirst: boolean): String {
//     return this.py.makePy(str, extractFirst);
//   }
// }

// export { Pinyin, ToTree, Validate };

export * from './pinyin';
export * from './totree';
export * from './validate';
export * from './clipboard';
// export * from './v-dialog-drag';
export * from './typeOfObject';
export * from './common';
export * from './EsEnum';
export * from './deepclone';
