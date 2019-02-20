import * as React from 'react';
import Carousel from './carousel';
import { 
	NavWrapper,
	NavWrapperContent,
} from './style'

const Discover = () => {
    const [navList] = React.useState([
			{title: "推荐"},
			{title: "排行榜"},
			{title: "歌单"},
			{title: "主播电台"},
			{title: "歌手"},
			{title: "新碟上架"},
    ]);
	return (
		<React.Fragment>
				<NavWrapper>
					<NavWrapperContent>
						<ul>{navList.map(nav => <li><a>{nav.title}</a></li>)}</ul>
					</NavWrapperContent>
				</NavWrapper>
				<Carousel></Carousel>
		</React.Fragment>
	);
};

export default Discover;

