"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import Card from "@/components/Card";
import { BiSearch } from "react-icons/bi";

export const metadata = {
  title: "Course / Course Grabber",
  description:
    "Course Grabber is a web app that allows you to search for free courses from youtube and other platforms.",
  favicon: "/favicon.ico",
};

export default function course() {
  const [search, setSearch] = useState({
    query: "",
    sort: "",
    upload_date: "",
    duration: "",
  });

  const [videos, setVideos] = useState([]);
  const [fetchOn, setFetch] = useState(false);

  const options = {
    method: "GET",
    url: "https://youtube-search-and-download.p.rapidapi.com/search",
    params: {
      hl: "en",
      query: "mern tutorial",
      type: "v",
    },
    headers: {
      "X-RapidAPI-Key": "2c07b9bc7bmsh2c33b02227ec391p1c708bjsn144f2176911a",
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  };

  const [option, setOptions] = useState(options);

  const submitHandler = async () => {
    // options.params = {...options.params,...search}
    const newObj = { ...options.params, ...search };
    setOptions({ ...option, params: newObj });
    setFetch((p) => !p);
  };
  useEffect(() => {
    const doFetch = async () => {
      try {
        const response = await axios.request(option);
        setVideos(response.data.contents);
      } catch (error) {
        console.error(error);
      }
    };
    doFetch();
  }, [fetchOn]);

  return (
    <section className={styles.course}>
      <div className={styles.courseWrapper}>
        <div className={styles.courseHeaderWrapper}>
          <h2>Search your courses here...</h2>
        </div>
        <div className={styles.searchWrapper}>
          <form>
            <div className={styles.search}>
              <input
                onChange={(e) =>
                  setSearch({ ...search, query: e.target.value })
                }
                type="text"
                placeholder="Search"
              ></input>
              <BiSearch onClick={submitHandler} className={styles.icon} />
            </div>
            <div
              style={{
                marginTop: "1rem",
                textAlign: "center",
                letterSpacing: 1,
              }}
            >
              <h2 style={{ fontWeight: 300 }}>Sort by</h2>
            </div>
            <div className={styles.dropdownWrapper}>
              <select
                onChange={(e) =>
                  setSearch({
                    ...search,
                    sort:
                      e.target.value.toLowerCase() === "relevance" ? "r" : "v",
                  })
                }
                className={styles.firstDropdown}
              >
                <option selected value="">
                  None
                </option>
                <option value="Relevance">Relevance</option>
                <option value="View Count">View Count</option>
              </select>
              <select
                onChange={(e) =>
                  setSearch({
                    ...search,
                    upload_date:
                      e.target.value.toLowerCase() === "month ago" ? "m" : "y",
                  })
                }
                className={styles.firstDropdown}
              >
                <option selected value="">
                  None
                </option>
                <option value="Month ago">Month ago</option>
                <option value="Year ago">Year ago</option>
              </select>
              <select
                onChange={(e) =>
                  setSearch({
                    ...search,
                    duration:
                      e.target.value.toLowerCase() === "long video" ? "l" : "s",
                  })
                }
                className={styles.firstDropdown}
              >
                <option selected value="">
                  None
                </option>
                <option value="Long video">Long video</option>
                <option value="Short video">Short video</option>
              </select>
            </div>
          </form>
        </div>
        <Card videos={videos} />
      </div>
    </section>
  );
}
