import styled from 'styled-components';
import enterNewPng from '../../static/images/foot_enter_new.png';
import enterTtPng from '../../static/images/foot_enter_tt.png';

export const FooterWrapper = styled.div`
  position: relative;
  height: 148px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
`;

export const FooterContent = styled.div`
  width: 980px;
  margin: 0 auto;
`;

export const FooterCopy = styled.div`
  float: left;
  width: 520px;
  padding-top: 15px;
  line-height: 24px;
  font-size: 12px;
  .link {
    a {
      color: #999;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .line {
      margin: 0 8px 0 10px;
      color: #c2c2c2;
    }
  }
  .right {
    color: #666;
    .sep {
      margin-right: 14px;
    }
    a {
      color: #666;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .conntact {
    color: #666;
    .sep {
      margin-right: 14px;
    }
    a {
      color: #666;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const FooterEnter = styled.ul`
  float: right;
  width: 330px;
  margin-top: 21px;
  .unit {
    float: left;
    width: 60px;
    height: 70px;
    margin-left: 30px;
    text-align: center;
    color: #666;
    &:first-child {
      margin-left: 0;
    }
    a.logo {
      display: block;
      float: none;
      width: 50px;
      height: 45px;
      margin: 0 auto;
      background: url(${enterNewPng}) no-repeat;
      background-size: 110px 450px;
      &.logo-auth {
        background-position: -63px -101px;
      }
      &.logo-musician {
        background-position: 0 0;
      }
      &.logo-reward {
        background-position: -60px -50px;
      }
      &.logo-cash {
        background-position: 0 -101px;
      }
    }
    .tt {
      display: inline-block;
      margin: 5px 5px 0;
      width: 52px;
      height: 14px;
      background: url(${enterTtPng}) no-repeat;
      background-size: 180px 100px;
      &.tt-auth {
        background-position: -1px -91px;
      }
      &.tt-musician {
        background-position: 0 0;
      }
      &.tt-reward {
        background-position: 0 -54px;
      }
      &.tt-cash {
        background-position: -1px -72px;
      }
    }
  }
`;