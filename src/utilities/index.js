export const validateInput = (conf, val) => {
  if (!conf) {
    return ''
  } 
  if (conf.maxLength && val.length > conf.maxLength) {
    return `El tamaño debe ser maximo ${conf.maxLength}`
  }
  if (conf.pattern && !conf.pattern.test(val)) {
    return conf.patternMessage
  }
  if (conf.equal && val != conf.equal.value) {
    return conf.equal.message
  } 
  return ''
}