import * as React from 'react';
import {
	HeaderWrapper,
	HeaderContent,
	HeaderLogo,
	HeaderNav,
	HeaderLogin,
	HeaderCreatorBtn,
	HeaderSearchWrapper
} from './style';

const Header = () => {
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
					<HeaderLogin>
						<a href="">登录</a>
					</HeaderLogin>
					<HeaderCreatorBtn>
						创作者中心
					</HeaderCreatorBtn>
					<HeaderSearchWrapper>
						<input type="text"/>
					</HeaderSearchWrapper>
				</HeaderContent>
			</HeaderWrapper>
		</React.Fragment>
	);
};

export default Header;