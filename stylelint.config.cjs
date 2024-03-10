module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-prettier', 'stylelint-scss'],
  rules: {
    'prettier/prettier': true,
    'selector-max-id': 1,
    'max-nesting-depth': [
      7,
      {
        ignoreAtRules: ['each', 'media', 'supports', 'include'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
    'selector-max-compound-selectors': 7,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'value-keyword-case': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'import-notation': null,
    'font-family-no-missing-generic-family-keyword': null,
    'function-no-unknown': null,
    'scss/operator-no-newline-after': null,
    'media-feature-range-notation': 'prefix',
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
}
