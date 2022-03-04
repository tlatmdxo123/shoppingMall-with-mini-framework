# 미니 프레임워크로 쇼핑몰 사이트 만들기

## 프로젝트 개요

타입스크립트로 프락시 패턴과 가상돔을 활용하여 자체 프레임워크를 만들고 이를 활용하여 쇼핑몰 페이지를 구현하는 프로젝트입니다.  
환경설정과 프레임워크의 원리를 이해하고 학습하는데 프로젝트 목적이 있습니다.

## 환경 설정

👉 참조 : https://ui.toast.com/fe-guide/ko_BUNDLER

### 웹팩

- production과 dev환경설정을 분리
- `babel-loader` : typescript와 jsx문법 처리
- `css-loader & style-loader` : 스타일링 처리
- `HtmlWebpackPlugin` : html을 자동으로 생성하여 번들링된 자바스크립트 파일 추가

### 바벨

- `@babel/preset-typescript` : 타입스크립트를 자바스크립트로 컴파일
- `@babel/plugin-transform-react-jsx` : 가상돔을 편리하게 구현하기 위해 jsx를 object로 변환

```javascript
/**@jsx h*/

//from
const a = <li className="item">item</li>;

//to
const a = h("li", { className: "item" }, "item");
```
