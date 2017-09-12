module.exports = function (source) {
  /**
   * 清除空格
   */
  function trim(str) {
    return str ? str.replace(/^\s+|\s+$/g, '') : ''
  }
  /**
   * 对 source 起始 match 正则，
   * 并如果失败返回 undefined，
   * 如果成功返回对应正则，并从源清除掉被匹配的字符串
   */
  function match(re) {
    var m = re.exec(source)
    if (!m) return
    var str = m[0]
    source = source.slice(str.length)
    return m
  }

  /**
   * 匹配区块开始
   */
  function open() {
    return match(/^{\s*/)
  }

  /**
   * 匹配区块结束
   */
  function close() {
    return match(/^}/)
  }

  /**
   * 匹配起始所有空格
   */
  function whitespace() {
    match(/^\s*/)
  }

  /**
   * 匹配选择器，想想怎么匹配选择器比较好？
   */
  function selector() {
    let m = match(/^[^{]+/)
    if (!m) return
    return trim(m[0])
  }

  /**
   * 组装声明
   */
  function declaration() {
    //let prop = match(/^[\w-]+[^:]\b/)
    let prop = match(/^\*?[\w-_]+[\w-_0-9]/)
    if (!prop) return

    // :
    if (!match(/^:\s*/)) throw new Error("property missing ':'")

    //let val = match(/^[\w]+[^;]\b/)
    let val = match(/^[^;]+/)


    var ret = {
      type: 'declaration',
      property: trim(prop[0]),
      value: val ? trim(val[0]) : ''
    }

    // ;
    match(/^[;\s]*/)

    return ret
  }

  /**
   * 组装声明列表
   */
  function declarations() {
    let decls = []
    
    if (!open()) throw new Error("missing '{'");

    // declarations
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl)
      }
    }

    if (!close()) throw new Error("missing '}'");
    return decls
  }

  /**
   * 组装规则
   */
  function rule() {
    var sel = selector();

    if (!sel) throw new Error('selector missing')

    return {
      type: 'rule',
      selectors: sel,
      declarations: declarations()
    }
  }

  /**
   * 组装规则列表
   */
  function rules() {
    let node
    let rules = []
    // 清除 source 起始空格
    whitespace()
    while (source.length && source.charAt(0) != '}' && (node = rule())) {
      if (node !== false) {
        rules.push(node)
      }
    }
    return rules
  }

  /**
   * 组装样式对象
   */
  function stylesheet() {
    var rulesList = rules()
    
    return {
      type: 'stylesheet',
      stylesheet: {
        rules: rulesList
      }
    }
  }

  return stylesheet()
}