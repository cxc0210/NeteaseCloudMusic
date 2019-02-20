import styled from 'styled-components';
import downloadPng from '../../../static/images/download.png';
import bannerPng from '../../../static/images/banner.png';


interface CarouselWrapperProps {
  bgcolor: string
}

interface CarouselContentProps {
  bgimg: string
}



export const CarouselWrapper = styled.div<CarouselWrapperProps>`
	background-image: url(${p => p.bgcolor});
	background-repeat: repeat-x;
`;

export const CarouselContent = styled.div<CarouselContentProps>`
	position: relative;
	width: 982px;
	height: 336px;
	margin: 0 auto;
	background-image: url(${p => p.bgimg});
	background-repeat: no-repeat;
	.banner-link {
		display: block;
		height: 100%;
	}
	.arrow {
		display: block;
    position: absolute;
    top: 50%;
    margin-top: -31px;
    width: 37px;
    height: 63px;
		text-indent: -9999px;
		background: url(${bannerPng}) 0 9999px no-repeat;
		cursor: pointer;
		&.arrowl {
			left: -68px;
			background-position: 0 -360px;
			&:hover {
				background-position: 0 -430px;
			}
		}
		&.arrowr {
			right: -68px;
			background-position: 0 -508px;
			&:hover {
				background-position: 0 -578px;
			}
		}
	}
	.dots {
		position: absolute;
    top: 310px;
    left: 0;
    width: 730px;
    height: 20px;
		text-align: center;
		cursor: pointer;
		.dot {
			display: inline-block;
			width: 20px;
			height: 20px;
			background: url(${bannerPng}) 0 9999px no-repeat;
			background-position: 3px -343px;
			&:hover {
				background-position: -16px -343px;
			}
			&.active {
				background-position: -16px -343px;
			}
		}
	}
`;

export const CarouselDownload = styled.div`
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
		}s
	}
	p {
		margin: 10px auto;
    text-align: center;
		color: #8d8d8d;
		font-size: 12px;
	}
	.shadow {
		display: block;
		position: absolute;
		top: 0;
    width: 20px;
    height: 336px;
    background: url(${bannerPng}) 0 9999px no-repeat
	}
	.shadowl {
    left: -20px;
		background-position: -1px 0;
	}
	.shadowr {
    right: -20px;
    background-position: -20px 0;
	}

	
`;