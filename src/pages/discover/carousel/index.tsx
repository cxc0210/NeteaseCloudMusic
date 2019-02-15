import * as React from 'react';
import {
  CarouselWrapper,
  CarouselContent,
  CarouselDownload
} from './style'

export const Carousel = () => {
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