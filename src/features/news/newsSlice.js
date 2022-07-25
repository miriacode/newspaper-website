import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {apiKey} from "../api/apiKey";

const NEWS_URL = 'https://newsapi.org/v2/';
const API_KEY = `&apiKey=${apiKey}`
//https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=123456789

const initialState = {
    news: [],
    status: 'idle',
    error: null,
}

export const fetchTopHeadlines = createAsyncThunk('news/fetchTopHeadlines',async () => {
    const TOP_HEADLINES_URL = `${NEWS_URL}top-headlines?country=us&pageSize=15${API_KEY}`;
    const response = await axios.get(TOP_HEADLINES_URL);
    return response;
})

const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers:{
        
    },
    extraReducers(builder){
        builder
            .addCase(fetchTopHeadlines.pending, (state, action) =>{
                state.status = 'loading'
            })
            .addCase(fetchTopHeadlines.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                const loadedNews = action.payload.data.articles
                console.log(loadedNews)
                //.articles
            })
            // .addCase(fetchTopHeadlines.pending, (state, action) =>{
            //     state.status = 'loading'
            // })
    }

})

export const selectAllNews = (state) => state.news.news;
export const getNewsStatus = (state) => state.news.status;
export const getNewsError = (state) => state.news.error;

export default newsSlice.reducer