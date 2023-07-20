import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";

export default function Footer() {
  return (
    <div className="bg-nav flex flex-col justify-center items-center p-10">
      <div className="flex p-5 space-x-5">
        <a
          href="https://www.instagram.com/thatguywithabook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="hover:text-red-600" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="hover:text-red-600" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon className="hover:text-red-600" />
        </a>
        <a
          href="https://www.reddit.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RedditIcon className="hover:text-red-600" />
        </a>
      </div>
      <div className="text-white font-mono">
        This website is created by Nagraj Tadingi
      </div>
    </div>
  );
}
