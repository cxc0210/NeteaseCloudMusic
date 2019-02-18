import * as React from 'react';
import axios from 'axios';
import {
  CarouselWrapper,
  CarouselContent,
  CarouselDownload,
} from './style'

export const Carousel = () => {
  //const [list, setList] = React.useState([]);
  React.useEffect(() => {
    fetchBanners();
  },[]);
  async function fetchBanners() {
    let url = '/banner';
    const response = await axios.get(url);
    console.log(response);
    //setList(response.data.banners);
  };
  return (
    <React.Fragment>
      <CarouselWrapper>
        <CarouselContent>
          <CarouselDownload>
            <a href="">下载客户端</a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          </CarouselDownload>
        </CarouselContent>
      </CarouselWrapper>
    </React.Fragment>
  )
}

export default Carousel;