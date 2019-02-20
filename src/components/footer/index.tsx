import * as React from 'react';
import {
  FooterWrapper,
  FooterContent,
  FooterCopy,
  FooterEnter
} from './style'

const Footer = () => {

  const [link] = React.useState([
    {name: '关于网易', url: '//music.163.com/about'},
    {name: '客户服务', url: '//help.mail.163.com/service.html'},
    {name: '服务条款', url: '//music.163.com/html/web2/service.html'},
    {name: '网站导航', url: '//sitemap.163.com'}
  ]);
  
  const [enter] = React.useState([
    {url: '//music.163.com/st/userbasic#/auth', logo: 'auth'},
    {url: '///music.163.com/recruit', logo: 'musician'},
    {url: '//music.163.com/web/reward', logo: 'reward'},
    {url: '//music.163.com/uservideo#/plan', logo: 'cash'}
  ]);
  
  return (
    <React.Fragment>
      <FooterWrapper>
        <FooterContent>
          <FooterCopy>
            <p className="link">
              {
                link.map(l => {
                  return (
                    <React.Fragment>
                      <a href={l.url} target="_blank" className="item">{l.name}</a>
                      <span className="line">|</span>
                    </React.Fragment>
                  )
                })
              }
              <a className="item">意见反馈</a>
            </p>
            <p className="right">
              <span className="sep">网易公司版权所有©1997-2019</span>
              <span>杭州乐读科技有限公司运营：</span>
              <a 
                href="http://p1.music.126.net/03WF0APmm-J0TqdbOc8-XQ==/109951163649544962.png" 
                target="_blank" 
                className="alink">
                浙网文[2018]3506-263号
              </a>
            </p>
            <p className="conntact">
              <span className="sep">违法和不良信息举报电话：0571-89853516</span>
              <span >举报邮箱：</span>
              <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
            </p>
          </FooterCopy>
          <FooterEnter>
            {enter.map(e => {
              return (
                <React.Fragment>
                  <li className="unit">
                  <a 
                    className={`logo logo-${e.logo}`}
                    href={e.url} 
                    target="_blank">
                  </a>
                  <span className={`tt tt-${e.logo}`}></span>
                  </li>
                </React.Fragment>
              );
            })}
          </FooterEnter>
        </FooterContent>
      </FooterWrapper>
    </React.Fragment>
  )
};

export default Footer