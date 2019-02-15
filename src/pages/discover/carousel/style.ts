import styled from 'styled-components';
import downloadPng from '../../../static/images/download.png';

export const CaroselWrapper = styled.div`
	background-image: url(http://p1.music.126.net/ZcaAGI2_kXL6JcDcVE_cmA==/109951163861647702.jpg);
	background-repeat: repeat-x;
`;

export const CaroselContent = styled.div`
	position: relative;
	width: 982px;
	height: 336px;
	margin: 0 auto;
	background: blue;
`;

export const CaroselDownload = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	right: -1px;
	width: 254px;
	height: 336px;
	background-image: url(${downloadPng});
	a {
		display: block;
    width: 215px;
    height: 56px;
    margin: 212px 0 0 19px;
		background-position: 0 9999px;
		text-indent: -9999px;
		&:hover {
			background-position: 0 -340px;
			background-image: url(${downloadPng});
		}
	}
	p {
		margin: 10px auto;
    text-align: center;
		color: #8d8d8d;
		font-size: 12px;
	}
`;