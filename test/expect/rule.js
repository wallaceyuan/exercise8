module.exports = {
  type: 'stylesheet',
  stylesheet: {
    rules: [
      {
        type: 'rule',
        selectors: '.hot',
        declarations: [
          {
            type: 'declaration',
            property: 'color',
            value: 'red'
          },
          {
            type: 'declaration',
            property: 'text-align',
            value: 'center'
          }
        ]
      }
    ]
  }
}