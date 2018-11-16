import LoginAPI from 'api/_login.api.js'

const pages = [
  {permisstion: "user:list", url: '/users'},
  {permisstion: "operation:class-adviser", url: '/operations/class-adviser'},
  {permisstion: "operation:class", url: '/operations/classes'},
  {permisstion: "operation:order", url: '/operations/orders'},
]

let permissionsRegExp = null
export function fetchPermissions () {
  return LoginAPI.getAuth().then(list => {
    permissionsRegExp = new RegExp(`^(${list.join('|')})`)
  })
}

export function hasPermission (pathname) {
  return pages.some(p => new RegExp(`^(${p.url})`).test(pathname) && permissionsRegExp && permissionsRegExp.test(p.permisstion))
}