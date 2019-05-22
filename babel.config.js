module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react',
    '@zeit/next-typescript/babel',
    // 'next/babel',
  ],
  plugins: [
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime',
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
      },
    ],
  ],
}
