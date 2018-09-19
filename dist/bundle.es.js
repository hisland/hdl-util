// copy from https://github.com/isaacs/core-util-is
// transform to ES6

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg)
  }
  return objectToString(arg) === '[object Array]'
}

function isBoolean(arg) {
  return typeof arg === 'boolean'
}

function isNull(arg) {
  return arg === null
}

function isNullOrUndefined(arg) {
  return arg == null
}

function isNumber(arg) {
  return typeof arg === 'number'
}

function isString(arg) {
  return typeof arg === 'string'
}

function isSymbol(arg) {
  return typeof arg === 'symbol'
}

function isUndefined(arg) {
  return arg === void 0
}

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]'
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null
}

function isDate(d) {
  return objectToString(d) === '[object Date]'
}

function isError(e) {
  return objectToString(e) === '[object Error]' || e instanceof Error
}

function isFunction(arg) {
  return typeof arg === 'function'
}

function isPrimitive(arg) {
  return (
    arg === null ||
    typeof arg === 'boolean' ||
    typeof arg === 'number' ||
    typeof arg === 'string' ||
    typeof arg === 'symbol' || // ES6 symbol
    typeof arg === 'undefined'
  )
}

function objectToString(o) {
  return Object.prototype.toString.call(o)
}

const { isBuffer } = Buffer;

function listToMapByKeyValue(list, key) {
  let rs = {};
  list.forEach(vv => {
    rs[vv[key]] = vv;
  });
  return rs
}

function removeFromList(list, item) {
  const index = list.indexOf(item);
  if (index !== -1) list.splice(index, 1);
}

function prefix0(val1, len = 2) {
  let val2 = val1 + '';
  while (val2.length < len) {
    val2 = '0' + val2;
  }
  return val2
}

function dotn(val, nn = 2) {
  let num = val - 0;
  return num ? num.toFixed(nn) : val ? val : 0
}

function __formatNumber(str, len = 3) {
  const strLength = str.length;
  if (strLength <= len) {
    return str
  } else {
    return (
      __formatNumber(str.substr(0, strLength - len)) +
      ',' +
      str.substr(strLength - len)
    )
  }
}

function formatPrice(val, decimalLen = 2, commaLen = 3) {
  let num = val - 0,
    isNegative = num < 0;
  if (!isNaN(num)) {
    num = num.toFixed(decimalLen);
    const dotRest = num.slice(-(decimalLen + 1));
    const integer = num.slice(isNegative ? 1 : 0, -(decimalLen + 1));
    return (isNegative ? '-' : '') + __formatNumber(integer, commaLen) + dotRest
  } else {
    return val ? val : 0
  }
}

const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
};

function floorNumber(input) {
  return typeof input === 'number' ? Math.floor(input) : input
}

function ceilNumber(input) {
  return typeof input === 'number' ? Math.ceil(input) : input
}

function timeMDHm(input) {
  if (input) {
    const mm = moment(input);
    return mm.isValid() ? mm.format('MM-DD HH:mm') : input
  }
  return 'inputNonTime'
}

export { isArray, isBoolean, isNull, isNullOrUndefined, isNumber, isString, isSymbol, isUndefined, isRegExp, isObject, isDate, isError, isFunction, isPrimitive, isBuffer, listToMapByKeyValue, removeFromList, prefix0, dotn, formatPrice, formatTime, floorNumber, ceilNumber, timeMDHm };
