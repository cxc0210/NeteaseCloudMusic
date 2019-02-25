import * as React from 'react';
import Carousel from './carousel';
import HotRecommends from './hot-recommends';
import { 
	NavWrapper,
	NavWrapperContent,
	MainPanel,
	MainLeftPanel,
	MainRightPanel,
	MainLeftPanelContent
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
				<MainPanel>
					<MainLeftPanel>
						<MainLeftPanelContent>
							<HotRecommends />
						</MainLeftPanelContent>
					</MainLeftPanel>
					<MainRightPanel>345</MainRightPanel>
				</MainPanel>
		</React.Fragment>
	);
};

export default Discover;

