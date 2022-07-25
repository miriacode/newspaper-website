import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllNews, getNewsStatus, getNewsError, fetchTopHeadlines } from '../../features/news/newsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);
  const newsStatus = useSelector(getNewsStatus);
  const error = useSelector(getNewsError);


  useEffect(() => {
    if(newsStatus==='idle'){
      dispatch(fetchTopHeadlines())
      // console.log(news)
    }
  }, [newsStatus,dispatch])

  let content;
    if (newsStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (newsStatus === 'succeeded') {
        content = news.map(n => <><h3>{n.title}</h3><p>{n.description}</p></>)
    } else if (newsStatus === 'failed') {
        content = <p>{error}</p>;
    }
  
  return (
    <div>Home{newsStatus}
      {content}
    </div>
  )
}

export default Home