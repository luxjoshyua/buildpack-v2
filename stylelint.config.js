module.exports = {
  extends: ['stylelint-config-sass-guidelines'],
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['appearance', 'outer-spin-button', 'inner-spin-button'],
      },
    ],
    'selector-class-pattern': null,
    'scss/at-extend-no-missing-placeholder': null,
    'order/properties-alphabetical-order': null,
    'selector-pseudo-element-colon-notation': 'single',
    'max-nesting-depth': [
      3,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
        ignoreAtRules: ['include'],
      },
    ],
    'plugin/selector-bem-pattern': {
      componentName: '[A-Z]+',
      componentSelectors: {
        initial: '^\\.{componentName}(?:-[a-z]+)?$',
        combined: '^\\.combined-{componentName}-[a-z]+$',
      },
      utilitySelectors: '^\\.util-[a-z]+$',
    },
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ["attribute", "class", "id"]
      }
    ]
  },
};
