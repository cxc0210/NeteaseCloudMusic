import * as React from 'react';
import axios from 'axios';
import {
  HotRecommedsHeader
} from './style'

const HotRecommends = () => {
  const [categories] = React.useState([
    {id: 1, name: '华语'},
    {id: 2, name: '摇滚'},
    {id: 3, name: '流行'},
    {id: 4, name: '民谣'},
    {id: 5, name: '电子'},
  ]);
  React.useEffect(() => {
    fetchPlayList().then(res => {
      console.log(res);
    });
  });
  async function fetchPlayList() {
    let playlist = await axios.get('/personalized');
    let djList = await axios.get('/personalized/djprogram');
    let result = playlist.data.result.slice(0, 5);
    result.splice(3,0,djList.data.result[0]);
    result.splice(5,0,djList.data.result[1]);
    result.splice(7,0,djList.data.result[2]);
    return result;
  };
  return (
    <React.Fragment>
      <HotRecommedsHeader>
        <a href="" className="title">热门推荐</a>
        <div className="tab">
          {
            categories.map((c, index) => {
              return (
                <React.Fragment>
                  <a href="/" key={c.id}>{c.name}</a>
                  <span className={`line ${index < categories.length - 1 ? '' : 'hide'}`}>|</span>
                </React.Fragment>
              )
            })
          }
        </div>
        <span className="more">
          <a href="">更多</a>
          <i className="more-icon">&nbsp;</i>
        </span>
      </HotRecommedsHeader>
    </React.Fragment>
  )
};

export default HotRecommends;