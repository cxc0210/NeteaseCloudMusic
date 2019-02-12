import styled from "styled-components";
import topbarPng from '../../static/images/topbar.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 70px;
	background: #242424;
	border-bottom: 1px solid #000;
`;

export const HeaderContent = styled.div`
	width: 1100px;
	margin: 0 auto;
`;

export const HeaderLogo = styled.div`
	float: left;
	width: 176px;
	height: 69px;
	background-position: 0 0;
	background: url(${topbarPng});
	a {
		float: left;
    width: 157px;
    height: 100%;
    padding-right: 20px;
    text-indent: -9999px;
	}
`;

export const HeaderNav = styled.div`
	float: left;
	ul.header-nav li{
		display: inline-block;
		padding: 0 19px;
		height: 70px;
		line-height: 70px;
		font-size: 14px;
		color: #ccc;
		user-select:none;
		&.active{
			background-color: #000;
			color: #fff;
		}
		&:hover{
			background-color: #000;
			color: #fff;
		}
	}
`;

export const HeaderLogin = styled.div`
	position: relative;
	float: right;
	height: 45px;
	margin: 19px 0 0 20px;
	padding: 0 22px 0 0;
	background: url(${topbarPng});
	background-position: right -47px;
	a {
		display: block;
    width: 28px;
    margin-top: 10px;
		color: #787878;
		font-size: 12px;
		text-decoration: none;
	}
	.show {
		display: block;
	}
	.hide {
		display: none;
	}
`;

export const HeaderLoginPanel = styled.div`
	  position: absolute;
    top: 38px;
    right: -43px;
    width: 158px;
    background: #2b2b2b;
    border: 1px solid #202020;
    box-shadow: 0 8px 24px 0 rgba(0,0,0,0.50);
		border-radius: 4px;
		font-size: 12px;
		ul.login-item li {
			position: relative;
			height: 38px;
			box-sizing: border-box;
			overflow: hidden;
			padding-left: 24px;
			color: #ccc;
			line-height: 39px;
			border-bottom: 0.1px solid #222;
			cursor: pointer;
			user-select: none;
			.iconfont {
				position: relative;
				top: 1px;
				margin-right: 7px;
				color: #888;
				font-size: 16px;
			}
			&:hover {
				background: #353535;
				color: #fff
			}
		}
`;

export const HeaderCreatorBtn = styled.div`
	float: right;
	width: 90px;
	height: 32px;
	margin: 19px 0 0 12px;
	box-sizing: border-box;
	padding-left: 16px;
	border: 1px solid #4F4F4F;
	background-position: 0 -140px;
	line-height: 32px;
	color: #ccc;
	font-size: 12px;
	border-radius: 20px;
	user-select: none;
	cursor: pointer;
	&:hover {
		color: #fff;
		border-color: #fff;
	}
`;

export const HeaderSearchWrapper = styled.div`
	float: right;
	width: 158px;
	height: 32px;
	margin-top: 19px;
	background: url(${topbarPng});
	background-position: 0 -99px;
	background-color: #fff;
	border-radius: 32px;
	input {
		display: block;
    position: relative;
    margin: 8px 0 0 30px;
		width: 120px;
    padding: 0;
		background: transparent;
		border: 0;
		outline: none;
	}
}
`;
;