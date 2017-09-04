module.exports = {
  type: 'stylesheet',
  stylesheet: {
    rules: [
      {
        type: 'rule',
        selectors: '.kv',
        declarations: [
          {
            type: 'declaration',
            property: 'background',
            value: 'rgba(255, 255, 255, 0.5)'
          },
          {
            type: 'declaration',
            property: '*background',
            value: '#fff'
          },
          {
            type: 'declaration',
            property: 'color',
            value: 'brown'
          },
          {
            type: 'declaration',
            property: 'font-size',
            value: '13px'
          },
          {
            type: 'declaration',
            property: 'transform',
            value: 'rotate(7deg)'
          },
          {
            type: 'declaration',
            property: 'font-family',
            value: 'arial'
          }
        ]
      }
    ]
  }
}