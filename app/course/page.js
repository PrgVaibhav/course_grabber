"use client";
import { useState } from 'react';
import styles from './page.module.css'
import axios from 'axios';

export default function course() {
  const [search,setSearch] = useState({
    query:'',
    sort:'',
    upload_date:'',
    duration:'',
  });
  const [videos, setVideos] = useState();

  const options = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/search',
    params: {
      hl: 'en',
    },
    headers: {
      'X-RapidAPI-Key': '2c07b9bc7bmsh2c33b02227ec391p1c708bjsn144f2176911a',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  const submitHandler = async()=>{
    options.params = {...options.params, ...search}
    try {
      const response = await axios.request(options);
      setVideos(response);
    } catch (error) {
      console.error(error);
    }
  } 

  return (
    <section className={styles.course}>
      <div className={styles.courseWrapper}>
        <div className={styles.courseHeaderWrapper}>
          <h2>Search your courses here...</h2>
        </div>
        <div className={styles.searchWrapper}>
          <form>
            <div className={styles.search}>
              <input onChange={(e)=>setSearch({...search, query:e.target.value})} type='text' placeholder='Search'></input>
              <img onClick={submitHandler} src='/search.png'></img>
            </div>
            <div style={{marginTop:'1rem', textAlign:'center', letterSpacing:1}}>
              <h2 style={{fontWeight:300}}>Sort by</h2>
            </div>
            <div className={styles.dropdownWrapper}>
              <select onChange={(e)=>setSearch({...search, sort:e.target.value.toLowerCase()==='relevance'?'r':'v'})} className={styles.firstDropdown}>
                <option selected value="">None</option>
                <option value="Relevance">Relevance</option>
                <option  value="View Count">View Count</option>

              </select>
              <select onChange={(e)=>setSearch({...search, upload_date:e.target.value.toLowerCase()==='month ago'?'m':'y'})} className={styles.firstDropdown}>
                <option selected value="">None</option>
                <option value="Month ago">Month ago</option>
                <option  value="Year ago">Year ago</option>

              </select>
              <select onChange={(e)=>setSearch({...search, duration:e.target.value.toLowerCase()==='long video'?'l':'s'})} className={styles.firstDropdown}>
                <option selected value="">None</option>
                <option value="Long video">Long video</option>
                <option  value="Short video">Short video</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
