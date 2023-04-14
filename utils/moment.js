import moment from 'moment'


export const toHumanFormatterFull = 'YYYY年MM月DD日 HH:mm:ss'
export const toHumanFormatterYMD = 'YYYY年MM月DD日'

export function stringToDate(s, formatter = 'YYYYMMDDHHmm') {
  return moment(s, formatter).toDate()
}
export function dateToString(d, formatter = 'YYYYMMDDHHmm') {
  return moment(d).format(formatter)
}
export function addHours(d, hours, formatter = 'YYYYMMDDHHmm') {
  return moment(d, formatter).add(hours, 'h').format(formatter)
}
export function subHours(d, hours, formatter = 'YYYYMMDDHHmm') {
  return moment(d, formatter).subtract(hours, 'h').format(formatter)
}