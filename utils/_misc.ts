export function delay (ms: number): Promise<void> {
  return new Promise(re => {
    setTimeout(_ => re(), ms)
  })
}
interface WAIT_OPTIONS {
  timeout?: number,
  checkInterval?: number,
  atLeast?: number
}

export function waitFor (checkCondition: Function, options: WAIT_OPTIONS = {}): Promise<void> {
  const {timeout = 5000, checkInterval = 200, atLeast = 0} = options
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

export function listToMap(list: any[], key: string = 'id'): object {
  if (!list) return {}
  return list.reduce((accum, item, index) => {
    accum[item[key]] = item
    return accum
  }, {})
}

/**
 * 将页面滚动到一个目标位置
 */
export function scrollTo(target: number, speed: number = 1): Promise<void> {
  var position = window.scrollY
  return new Promise(resolve => {
    var timer = setInterval(function () {
      if (Math.abs(target - position) < 5) {
        clearInterval(timer);
        window.scrollTo(0, target);
        resolve()
      }
      position += (target - position) / 10 * speed
      window.scrollTo(0, position)
    }, 16.7)
  })
}

export function scrollIntoView(elem: Element, speed: number, offset: number = 0): Promise<void> {
  const target = elem.getBoundingClientRect().top - offset
  return scrollTo(target, speed)
}


export function copyText (text: string): Promise<string|void> {
  return new Promise((resolve, reject) => {
    if (document.execCommand) {
      let element = document.createElement('span')
      element.textContent = text
      document.body.appendChild(element)
      // @ts-ignore
      if (document.selection) {
        // @ts-ignore
        let range = document.body.createTextRange()
        range.moveToElementText(element)
        range.select()
      } else if (window.getSelection) {
        let range = document.createRange()
        range.selectNode(element)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
      }

      const ret = document.execCommand('copy', false)
      // @ts-ignore
      element.remove ? element.remove() : element.removeNode(true)
      if (ret) resolve(text)
      else reject()
    // @ts-ignore
    } else if (window.clipboardData) {
      // @ts-ignore
      window.clipboardData.setData('text', text)
      resolve(text)
    } else {
      reject()
    }
  })
}

export function isDeviceHorizontal(): boolean {
  const {innerWidth, innerHeight} = window
  return innerWidth / innerHeight > 1
}

export function sprintf(template: string, ...args: any[]): string {
  return template.replace(/%(\d+)/g, function(_,m) {
    return args[--m];
  });
}

export async function getBase64ImageFromUrl(imageUrl: string): Promise<string> {
  var res = await fetch(imageUrl);
  var blob = await res.blob();

  return new Promise((resolve, reject) => {
    var reader  = new FileReader();
    reader.addEventListener("load", function () {
        // @ts-ignore
        resolve(reader.result);
    }, false);

    reader.onerror = () => {
      return reject(this);
    };
    reader.readAsDataURL(blob);
  })
}