function getEmailHomePage (email) {
  const m = [
    {
      regExp: /@163.com$/,
      url: 'mail.163.com'
    },
    {
      regExp: /@126.com$/,
      url: 'mail.126.com'
    },
    {
      regExp: /@qq.com$|@vip.qq.com$|@foxmail.com$/,
      url: 'mail.qq.com'
    },
    {
      regExp: /@gmail.com$/,
      url: 'mail.google.com'
    },
    {
      regExp: /@sohu.com$/,
      url: 'mail.sohu.com'
    },
    {
      regExp: /@tom.com$/,
      url: 'mail.tom.com'
    },
    {
      regExp: /@vip.sina.com$/,
      url: 'vip.sina.com'
    },
    {
      regExp: /@sina.com.cn$|@sina.com$/,
      url: 'mail.sina.com.cn'
    },
    {
      regExp: /@yahoo.com.cn$|@yahoo.cn$/,
      url: 'mail.cn.yahoo.com'
    },
    {
      regExp: /@21cn.com$/,
      url: 'mail.21cn.com'
    },
    {
      regExp: /@hotmail.com$/,
      url: 'hotmail.com'
    },
    {
      regExp: /@sogou.com$/,
      url: 'mail.sogou.com'
    },
    {
      regExp: /@139.com$/,
      url: 'mail.10086.cn'
    },
    {
      regExp: /@188.com$/,
      url: '188.com'
    },
    {
      regExp: /@189.cn$/,
      url: 'webmail15.189.cn/webmail'
    },
    {
      regExp: /@wo.com.cn$/,
      url: 'mail.wo.com.cn/smsmail'
    },
    {
      regExp: /@yeah.net$/,
      url: 'yeah.net'
    },
    {
      regExp: /@eyou.com$/,
      url: 'eyou.com'
    },
    {
      regExp: /@outlook.com$/,
      url: 'outlook.com'
    },
    {
      regExp: /@aol.com$/,
      url: 'mail.aol.com'
    },
    {
      regExp: /@icloud.com$|@me.com$/,
      url: 'icloud.com/#mail'
    },
    {
      regExp: /@live.com$/,
      url: 'live.com'
    },
    {
      regExp: /@comcast.com$/,
      url: 'login.comcast.net'
    },
    {
      regExp: /@ymail.com$/,
      url: 'ymail.com'
    },
    {
      regExp: /@att.net$/,
      url: 'att.net'
    },
    {
      regExp: /@sbcglobal.net$/,
      url: 'att.com/my/#/login'
    },
    {
      regExp: /@bellsouth.net$/,
      url: 'bellsouth.net'
    },
    {
      regExp: /@verizon.net$/,
      url: 'verizon.net'
    },
    {
      regExp: /@cox.net$/,
      url: 'webmail.cox.net'
    },
    {
      regExp: /@rocketmail.com$/,
      url: 'overview.mail.yahoo.com'
    },
    {
      regExp: /@charter.net$/,
      url: 'charter.net'
    },
    {
      regExp: /@aim.com$/,
      url: 'aim.com'
    },
  ]
  let i = m.length - 1
  while (i--) {
    const s = m[i]
    if (s.regExp.test(email)) return s.url
  }
}

export default getEmailHomePage