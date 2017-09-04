module.exports = {
  type: 'stylesheet',
  stylesheet: {
    rules: [
      {
        type: 'rule',
        selectors: 'p',
        declarations: []
      },
      {
        type: 'rule',
        selectors: 'p .hot',
        declarations: []
      },
      {
        type: 'rule',
        selectors: 'p > a',
        'declarations': []
      },
      {
        type: 'rule',
        selectors: 'p::before',
        declarations: []
      },
      {
        type: 'rule',
        selectors: 'p:after',
        declarations: []
      }
    ]
  }
}