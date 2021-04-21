export const CONFIG = {
  FILTER: {
    ORDER: {
      ASC: {
        ID: 'asc'
      },
      DESC: {
        ID: 'desc'
      }
    }
  }
}

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

export const filter = (array, conf, options, optionAttr, searchAttr) => {
  let techsFilt = JSON.parse(JSON.stringify(array))
  if (!Number.isNaN(Number.parseFloat(conf.option)) && conf.option >= 0 && conf.option < options.length) {
    techsFilt = techsFilt.filter((item) => {
      return item.attrs[optionAttr] === options[conf.option].label
    })
  }
  if (conf.search) {
    techsFilt = techsFilt.filter((item) => {
      const i = item.attrs[searchAttr]
                  .toString()
                  .toLowerCase()
                  .indexOf(
                      conf.search
                      .toString()
                      .toLowerCase()
                  )
      return 0 <= i
    })
  }
  if (conf.order === CONFIG.FILTER.ORDER.ASC.ID) {
    techsFilt = techsFilt.sort((a, b) => {
      const aLabel = a.attrs[searchAttr]
      const bLabel = b.attrs[searchAttr]
      if(aLabel < bLabel) { return -1; }
      if(aLabel > bLabel) { return 1; }
      return 0;
    })
  } else if (conf.order === CONFIG.FILTER.ORDER.DESC.ID) {
    techsFilt = techsFilt.sort((a, b) => {
      const aLabel = a.attrs[searchAttr]
      const bLabel = b.attrs[searchAttr]
      if(aLabel > bLabel) { return -1; }
      if(aLabel < bLabel) { return 1; }
      return 0;
    })
  }
  if(techsFilt.length === 0) {
    techsFilt = JSON.parse(JSON.stringify(array))
  }
  return techsFilt
}