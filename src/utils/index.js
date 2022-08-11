const _toString = Object.prototype.toString

export function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/** 正整数 */
export const intergerRE = /^\d*$/

/** 小数、包含正整数、开头只能为一个零 */
export const decimalRE = /^(0|[1-9]\d*)(\.\d*)?$/
