export function delay (ms) {
  return new Promise (re => {
    setTimeout(_ => re(), ms)
  })
}

export function waitFor (checkCondition, {timeout = 5000, checkInterval = 200, atLeast = 0}) {
  return new Promise ((resolve, reject) => {
    setTimeout(reject, timeout)
    setTimeout(async () => {
      while (true) {
        if (checkCondition()) return resolve()
        await delay(checkInterval)
      }
    }, atLeast)
  })
}

export function listToMap(list, key = 'id') {
  if (!list) return {}
  return list.reduce((accum, item, index) => {
    accum[item[key]] = item
    return accum
  }, {})
}

/**
 * 将页面滚动到一个目标位置
 * @param {Number} target 目标位置
 */
export function scrollTo(target, speed = 1) {
  var position = window.scrollY
  return new Promise(resolve => {
    var timer = setInterval(function () {
      if (Math.abs(target - position) < 5) {
        clearInterval(timer);
        timer = null;
        window.scrollTo(0, target);
        resolve()
      }
      position += (target - position) / 10 * speed
      window.scrollTo(0, position)
    }, 16.7)
  })
}

export function scrollIntoView(elem, speed, offset = 0) {
  const target = elem.getBoundingClientRect().top - offset
  return scrollTo(target, speed)
}


export function copyText (text) {
  return new Promise((resolve, reject) => {
    if (document.execCommand) {
      let element = document.createElement('span')
      element.textContent = text
      document.body.appendChild(element)
      if (document.selection) {
        let range = document.body.createTextRange()
        range.moveToElementText(element)
        range.select()
      } else if (window.getSelection) {
        let range = document.createRange()
        range.selectNode(element)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
      }

      const ret = document.execCommand('copy', false, null)
      element.remove ? element.remove() : element.removeNode(true)
      if (ret) resolve(text)
      else reject()
    } else if (window.clipboardData) {
      window.clipboardData.setData('text', text)
      resolve(text)
    } else {
      reject()
    }
  })
}

export function isDeviceHorizontal () {
  const {innerWidth, innerHeight} = window
  return innerWidth / innerHeight > 1
}

export function sprintf(template, ...args) {
  return template.replace(/%(\d+)/g, function(_,m) {
    return args[--m];
  });
}