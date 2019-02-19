import * as React from 'react';
//import axios from 'axios';
import {
  CarouselWrapper,
  CarouselContent,
  CarouselDownload,
} from './style'

export const Carousel = () => {
  const [banners] = React.useState([
    {
    picUrl : "http://p1.music.126.net/VO_0urbXu_PytHjhjfj4Zw==/109951163871298888.jpg",
    url : "/mv?id=10851472",
    targetId : "10851472",
    backgroundUrl : "http://p1.music.126.net/2gsyhOXzAltu35SnjhINog==/109951163871298409.jpg",
    targetType : "1004",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/kEGOOxh_p6H7UHKuOOFkFg==/109951163871789068.jpg",
    url : "/song?id=1308818970",
    targetId : "1308818970",
    backgroundUrl : "http://p1.music.126.net/HZOwz02kM_LeWftnL3OK3w==/109951163871783206.jpg",
    targetType : "1",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/AKa1piGvA2WrH8NZLyAkrA==/109951163871321608.jpg",
    url : "/playlist?id=2289763322",
    targetId : "2289763322",
    backgroundUrl : "http://p1.music.126.net/ED0QDMkMj1mPNasHajN4Og==/109951163871324056.jpg",
    targetType : "1000",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/wa7Oxq5yysZgGBvOlivwEg==/109951163871318124.jpg",
    url : "/album?id=75535120",
    targetId : "75535120",
    backgroundUrl : "http://p1.music.126.net/_pEdkSRpr4gZY_hLFKZQbg==/109951163871313719.jpg",
    targetType : "10",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/JEnkpJ_K_FNFH74tpAusDQ==/109951163871768363.jpg",
    url : "/album?id=75606077",
    targetId : "75606077",
    backgroundUrl : "http://p1.music.126.net/H50-bsvTHHMCV-RTIPBZ9g==/109951163871311709.jpg",
    targetType : "10",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/x3GJj_0ke1XgIgkfdYLdqQ==/109951163871309165.jpg",
    url : "/song?id=1313354324",
    targetId : "1313354324",
    backgroundUrl : "http://p1.music.126.net/3RqY9T6OHjlyD7VJNJD-xA==/109951163871310121.jpg",
    targetType : "1",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/DLWBm4dpl7kITHfainZkog==/109951163874736631.jpg",
    url : "/album?id=75602739",
    targetId : "75602739",
    backgroundUrl : "http://p1.music.126.net/pfwCBm0-ddtAMD_y9kC2XA==/109951163874738078.jpg",
    targetType : "10",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/UT4KJBjfzOPNtZU8DwAqgw==/109951163871774703.jpg",
    url : "https://music.163.com/m/at/5c514b8dba9b7684cfe757c1",
    targetId : "0",
    backgroundUrl : "http://p1.music.126.net/_DwZhf9n5t1ztzHLFG-Fdg==/109951163871775653.jpg",
    targetType : "3000",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/PzonwsvcSEEsr-uhJXE2_g==/109951163871296308.jpg",
    url : "/album?id=75601646",
    targetId : "75601646",
    backgroundUrl : "http://p1.music.126.net/34qPMXd-awqCiSq5B4Ndfg==/109951163871296309.jpg",
    targetType : "10",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    }
    ])
  ;
  /*
  React.useEffect(() => {
    fetchBanners();
  },[]);
  async function fetchBanners() {
    let url = '/banner';
    const response = await axios.get(url);
    console.log(response);
    //setList(response.data.banners);
  };
  */
  return (
    <React.Fragment>
      <CarouselWrapper bgcolor={banners[7].backgroundUrl}>
        <CarouselContent bgimg={banners[7].picUrl}>
          <CarouselDownload>
            <a href="">下载客户端</a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            <span className="shadow shadowl"></span>
            <span className="shadow shadowr"></span>
          </CarouselDownload>
        </CarouselContent>
      </CarouselWrapper>
    </React.Fragment>
  )
}

export default Carousel;