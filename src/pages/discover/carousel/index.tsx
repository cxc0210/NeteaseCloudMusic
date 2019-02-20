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
    picUrl : "http://p1.music.126.net/0nU3eDMuvxwgGbaFQrFG3g==/109951163873780847.jpg",
    url : "/song?id=1308818970",
    targetId : "1308818970",
    backgroundUrl : "http://p1.music.126.net/jao_trbLksa6VBhBwyHUaA==/109951163873781796.jpg",
    targetType : "1",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/KmAj9UWpwJVtaZboE9f3xw==/109951163873755554.jpg",
    url : "/mv?id=10851506",
    targetId : "10851506",
    backgroundUrl : "http://p1.music.126.net/SdiGkL69kR-iguWzqwa8Hw==/109951163873750281.jpg",
    targetType : "1004",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/-JTgz7oE7LX2uPuo-ypW6A==/109951163873793510.jpg",
    url : "/song?id=1346119731",
    targetId : "1346119731",
    backgroundUrl : "http://p1.music.126.net/R4PgdGcBnmfpyjttRoL0DQ==/109951163873791557.jpg",
    targetType : "1",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/zK3aD8mboEV2SUaENT8gjg==/109951163875618865.jpg",
    url : "/album?id=75602739",
    targetId : "75602739",
    backgroundUrl : "http://p1.music.126.net/P3ikMLqg3ukHuRluMMdMSA==/109951163875626508.jpg",
    targetType : "10",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/3EkE22fC1WCsgFwiUch-VQ==/109951163875622458.jpg",
    url : "/song?id=1347050737",
    targetId : "1347050737",
    backgroundUrl : "http://p1.music.126.net/TwjhAd_sUrYKZsBggR9Vcg==/109951163875625786.jpg",
    targetType : "1",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/IxNkUHyDLhiyMy6G1rr5hw==/109951163877005478.jpg",
    url : "/mv?id=10851528",
    targetId : "10851528",
    backgroundUrl : "http://p1.music.126.net/dmlUQYjfA9TaNikppzUzqQ==/109951163877007429.jpg",
    targetType : "1004",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/W_9bxcgzcQmA_WyhYc00tw==/109951163876551859.jpg",
    url : "/mv?id=10850564",
    targetId : "10850564",
    backgroundUrl : "http://p1.music.126.net/KFFj4U3S4OEgT3_3b6PWKQ==/109951163876556240.jpg",
    targetType : "1004",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/YV2B-Elhh7qWoQIniSwFAg==/109951163873844552.jpg",
    url : "https://music.163.com/m/at/5c6bb781ba9b7684cfe7973b",
    targetId : "0",
    backgroundUrl : "http://p1.music.126.net/J2YlzyPrVFDkrcd0Oj3IRQ==/109951163873846531.jpg",
    targetType : "3000",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    },
    {
    picUrl : "http://p1.music.126.net/RwuNXQmgMc4qu_wxIGbGcQ==/109951163875640041.jpg",
    url : "/album?id=75602689",
    targetId : "75602689",
    backgroundUrl : "http://p1.music.126.net/SAuiEgAR7NBzVJM2DUgXnw==/109951163875632960.jpg",
    targetType : "10",
    monitorType: "",
    monitorImpress: "",
    monitorClick: ""
    }
    ])
  ;
  const [bannerIndex, setBannerIndex] = React.useState(0);

  React.useEffect(()=>{
    beginBannerInterval()
    return stopBannerInterval
  });

  let timer:any;

  const beginBannerInterval = () => {
    timer = setTimeout(() => {
      bannerIndex == banners.length - 1 ? setBannerIndex(0) : setBannerIndex(bannerIndex + 1);
    }, 4000);
  };

  const stopBannerInterval = () => {
    clearTimeout(timer)

  };

  const clickLeftArrow = () => {
    stopBannerInterval();
    bannerIndex == 0 ? setBannerIndex(banners.length - 1) : setBannerIndex(bannerIndex - 1);
  }

  const clickRightArrow = () => {
    stopBannerInterval();
    bannerIndex == banners.length - 1 ? setBannerIndex(0) : setBannerIndex(bannerIndex + 1);
  }

  const clickBannerDot = (index:number) => {
    stopBannerInterval();
    setBannerIndex(index)
  }
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
      <CarouselWrapper bgcolor={banners[bannerIndex].backgroundUrl}>
        <CarouselContent bgimg={banners[bannerIndex].picUrl}>
          <a className="banner-link" href=""></a>
          <a className="arrow arrowl" onClick={()=>{clickLeftArrow()}}></a>
          <a className="arrow arrowr" onClick={()=>{clickRightArrow()}}></a>
          <div className="dots">
            {banners.map( (b, index) => {
              return (
                <a 
                  className={`dot ${bannerIndex==index?'active':''}`}
                  onClick={()=>{clickBannerDot(index)}}>
                </a>)
            })}
          </div>
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