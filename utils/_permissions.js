let permissionsRegExp = null

export function initPermissions (permissions) {
  permissionsRegExp = new RegExp(permissions.join('|'))
}

export function hasPermission (permission) {
  return permissionsRegExp.test(permission)
}