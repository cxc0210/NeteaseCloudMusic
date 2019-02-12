import * as React from 'react';
import { connect } from 'react-redux'
import {
	HeaderWrapper,
	HeaderContent,
	HeaderLogo,
	HeaderNav,
	HeaderLogin,
	HeaderLoginPanel,
	HeaderCreatorBtn,
	HeaderSearchWrapper
} from './style';

const Header = () => {
	const [showLoginPanel, setShowLoginPanel] = React.useState(false);
	const [loginMethodList] = React.useState([
		{title : '手机号登录', icon: '&#xe610;'},
		{title : '微信登录', icon: '&#xe640;'},
		{title : 'QQ登录', icon: '&#xe6a1;'},
		{title : '新浪微博登录', icon: '&#xe737;'},
		{title : '网易邮箱账号登录', icon: '&#xe6ae;'},
	]);
	return (
		<React.Fragment>
			<HeaderWrapper>
				<HeaderContent>
					<HeaderLogo>
						<a href="/#">网易云音乐</a>
					</HeaderLogo>
					<HeaderNav>
						<ul className="header-nav">
							<li className="active">发现音乐</li>
							<li>我的音乐</li>
							<li>朋友</li>
							<li>商城</li>
							<li>音乐人</li>
							<li>下载客户端</li>
						</ul>
					</HeaderNav>
					<HeaderLogin
						onMouseEnter={() => setShowLoginPanel(true)}
						onMouseLeave={() => setShowLoginPanel(false)}
					>
						<a href="">登录</a>
						<HeaderLoginPanel	className={showLoginPanel ? "show" : "hide"}>	
							<ul className="login-item">
								{loginMethodList.map(m => <li><i className="iconfont" dangerouslySetInnerHTML = {{__html : m.icon}}></i>{m.title}</li>)}
							</ul>
						</HeaderLoginPanel>
					</HeaderLogin>
					<HeaderCreatorBtn>
						创作者中心
					</HeaderCreatorBtn>
					<HeaderSearchWrapper>
						<input type="text" />
					</HeaderSearchWrapper>
				</HeaderContent>
			</HeaderWrapper>
		</React.Fragment>
	);
};


const mapStateToProps = (state:any) => {
}

const mapDispatchToProps = (dispatch:any) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);