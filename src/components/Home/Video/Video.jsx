import "./video.scss";
import video from "./Video.mp4";

const Video = () => {
  return (
    <div>
      <iframe className="video" src={video}></iframe>
    </div>
  );
};

export default Video;
