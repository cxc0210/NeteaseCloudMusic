import * as React from 'react';
import {
  CaroselWrapper,
  CaroselContent,
  CaroselDownload
} from './style'

export const Carousel = () => {
  return (
    <React.Fragment>
      <CaroselWrapper>
        <CaroselContent>
          <CaroselDownload>
            <a href="">下载客户端</a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          </CaroselDownload>
        </CaroselContent>
      </CaroselWrapper>
    </React.Fragment>
  )
}

export default Carousel;