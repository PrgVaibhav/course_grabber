"use client";
import styles from "@/styles/card.module.css";
import { BiTime, BiCategoryAlt } from "react-icons/bi";

export default function Card({videos}) {
  return (
    <section className={styles.course_container}>
      <div className={styles.course_cards}>
        {videos.map((video) => {
          console.log(video);
          return (
            <a className={styles.atag} href={`https://www.youtube.com/watch?v=${video.video.videoId}`} target='_blank'><div className={styles.course_card} >
              <div className={styles.course_card_image}>
                <img src={video.video.thumbnails[0].url} alt="course" />
              </div>
              <div className={styles.course_card_content}>
              {video.video.title?<h3>{video.video.title}</h3>:null}
                {video.video.channelName?<span>{video.video.channelName}</span>:null}
              </div>
              <div className={styles.course_card_border}></div>
              <div className={styles.course_card_footer}>
                <span>
                  <BiTime /> {video.video.lengthText?video.video.lengthText:null}
                </span>
                <span>
                  <BiCategoryAlt />
                  {video.video.viewCountText?video.video.viewCountText:null}
                </span>
              </div>
            </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
