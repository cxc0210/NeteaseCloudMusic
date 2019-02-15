import styled from "styled-components";

export const NavWrapper = styled.div`
	height: 35px;
	box-sizing: border-box;
	background-color: #C20C0C;
	border-bottom: 1px solid #a40011;
`;

export const NavWrapperContent = styled.div`
	width: 1100px;
	margin: 0 auto;
	ul {
		padding-left: 180px;
		li {
			float: left;
			height: 34px;
			text-align: center;
			a {
				color: #fff;
				text-decoration: none;
				display: inline-block;
				height: 20px;
				padding: 0 13px;
				margin: 7px 17px 0;
				border-radius: 20px;
				line-height: 21px;
				font-size: 12px;
				&:hover {
					background-color: rgb(155, 9, 9);
					cursor: pointer;
				}
				&.active {
					background-color: rgb(155, 9, 9);
					cursor: pointer;
				}
			}
		}
	}
`