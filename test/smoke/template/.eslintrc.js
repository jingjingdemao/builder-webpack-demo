// module.exports = {
//   env: {
//     browser: true,
//   },
//   extends: "eslint:recommended",
//   parserOptions: {
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
// };

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  // parser: "babel-eslint",
  parser: '@babel/eslint-parser',
  // plugins: ["import", "react"],
  extends: 'airbnb',
  // ignorePatterns: ['**/*.html', 'webpack.**.js'],
  rules: {
    strict: 'off',
    semi: 'off',
    quotes: ['off'],
    'spaced-comment': ['off', 'always'],
    'no-console': ['off'],
    'react/prop-types': ['off'],
    'import/prefer-default-export': ['off', { target: 'single' }],
    'import/no-extraneous-dependencies': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': ['off'],
    'react/function-component-definition': ['off'],
    'import/extensions': ['off'],
    'react/destructuring-assignment': ['off'],
    // 'jsx-a11y/alt-text': [
    //   2,
    //   {
    //     elements: ['img', 'object', 'area', 'input[type="image"]'],
    //     img: ['Image'],
    //     object: ['Object'],
    //     area: ['Area'],
    //     'input[type="image"]': ['InputImage'],
    //   },
    // ],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'implicit-arrow-linebreak': ['off'],
  },
};

// module.exports = {
//   extends: "airbnb",
//   env: {
//     browser: true,
//     node: true,
//     mocha: true,
//   },
//   rules: {
//     "new-cap": [2, { capIsNewExceptions: ["List", "Map", "Set"] }],
//     "react/no-multi-comp": 0,
//     "import/default": 0,
//     "import/no-duplicates": 0,
//     "import/named": 0,
//     "import/namespace": 0,
//     "import/no-unresolved": 0,
//     "import/no-named-as-default": 2,
//     "comma-dangle": 0, // not sure why airbnb turned this on. gross!
//     indent: [2, 2, { SwitchCase: 1 }],
//     "no-console": 0,
//     "no-alert": 0,
//     "linebreak-style": 0,
//   },
//   plugins: ["react", "import"],
// };
