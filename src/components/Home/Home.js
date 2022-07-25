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
  
  return (
    <div>Home{newsStatus}</div>
  )
}

export default Home