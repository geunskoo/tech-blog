const path = require('path');

module.exports = {
  entry: './src/index.ts', // 프로젝트의 진입점 파일
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript 파일에 대한 정규표현식
        use: 'ts-loader', // ts-loader 사용
        exclude: /node_modules/, // node_modules 디렉토리는 제외
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // 파일 확장자 지정
  },
  output: {
    filename: 'bundle.js', // 번들된 파일 이름
    path: path.resolve(__dirname, 'dist'), // 번들된 파일이 저장될 경로
  },
};
