import { createGlobalStyle } from 'styled-components';

export const GlobleIconfont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1549809173095'); /* IE9 */
  src: url('iconfont.eot?t=1549809173095#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1549809173095') format('woff'),
  url('iconfont.ttf?t=1549809173095') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1549809173095#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;