import styled from 'styled-components';
import recommnedsPng from '../../../static/images/recommends.png'

export const HotRecommedsHeader = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  background: url(${recommnedsPng}) no-repeat;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;
  a.title {
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    text-decoration: none;
    color: #333;
  }
  .tab {
    float: left;
    margin: 10px 0 0 20px;
    font-size: 12px;
    a {
      color: #666;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    span {
      margin: 0 10px;
      color: #ccc;
      &.hide {
        display: none;s
      }
    }
  }
  .more {
    float: right;
    margin-top: 9px;
    a {
      font-size: 12px;
      color: #666;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    .more-icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background: url(${recommnedsPng}) no-repeat;
      background-position: 0 -240px;
    }
  }
`;

