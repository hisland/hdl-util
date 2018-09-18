export function listToMapByKeyValue(list, key) {
  let rs = {}
  list.forEach(vv => {
    rs[vv[key]] = vv
  })
  return rs
}

export function removeFromList(list, item) {
  const index = list.indexOf(item)
  if (index !== -1) list.splice(index, 1)
}

export function prefix0(val1, len = 2) {
  let val2 = val1 + ''
  while (val2.length < len) {
    val2 = '0' + val2
  }
  return val2
}

export function dotn(val, nn = 2) {
  let num = val - 0
  return num ? num.toFixed(nn) : val ? val : 0
}

function __formatNumber(str, len = 3) {
  const strLength = str.length
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

export function formatPrice(val, decimalLen = 2, commaLen = 3) {
  let num = val - 0,
    isNegative = num < 0
  if (!isNaN(num)) {
    num = num.toFixed(decimalLen)
    const dotRest = num.slice(-(decimalLen + 1))
    const integer = num.slice(isNegative ? 1 : 0, -(decimalLen + 1))
    return (isNegative ? '-' : '') + __formatNumber(integer, commaLen) + dotRest
  } else {
    return val ? val : 0
  }
}

export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

export function floorNumber(input) {
  return typeof input === 'number' ? Math.floor(input) : input
}

export function timeMDHm(input) {
  if (input) {
    const mm = moment(input)
    return mm.isValid() ? mm.format('MM-DD HH:mm') : input
  }
  return 'no time'
}
