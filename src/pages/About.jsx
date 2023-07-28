import Navbar from "../components/Navbar";
import n from "../assets/n.jpg";
import twitter from "../assets/socials/tweetoutline.png";
import instagram from "../assets/socials/instaoutline.png";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="flex mx-20 my-5 relative z-10 gap-5">
        <img src={n} alt="" className="h-500 w-350 rounded-lg" />
        <div>
          <div className="flex absolute left-0 mt-4" style={{ top: "500px" }}>
            <a
              href={`https://www.instagram.com/thatguywithabook`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="h-8 w-8 mr-4" />
            </a>
            <a
              href={`https://twitter.com/studyingquakes`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className="h-8 w-8 mr-4" />
            </a>
          </div>

          <h2 className="text-white font-nunito text-4xl">Nagraj Tadingi</h2>
          <p className="text-white  bg-nav p-3 font-nunito rounded-xl my-1">
            🍰 - dd/mm/yyyy
          </p>
          <p className="text-white  bg-nav p-3 font-nunito rounded-xl my-1">
            🏡 - India
          </p>
          <p className="text-white  bg-nav p-3 font-nunito rounded-xl my-1">
            I am an avid movie lover with a diverse taste in genres. Sci-fi,
            thrillers, romance, and horror are the cornerstones of my film
            preferences, and I&apos;m always on the lookout for movies with IMDb
            ratings above 5.6 to ensure an enjoyable experience. But my passion
            for storytelling doesn&apos;t stop at movies; I also find immense
            joy in immersing myself in TV shows, particularly those that fall
            within my favorite genres of thrillers, sci-fi, and romance. Anime
            holds a special place in my heart, and two of my all-time favorites
            are &quot;Attack on Titan&quot; and &quot;Naruto.&quot; The
            captivating worlds and characters in these series have left a
            lasting impression on me. Recently, I&apos;ve delved into the world
            of Korean dramas, and I must admit, I&apos;m already smitten with
            the captivating romance and engaging storylines they offer. At the
            core of my movie and TV show preferences lies a deep-rooted love for
            storytelling and a hopeless romantic soul. Whether it&apos;s a
            heart-pounding thriller, a mind-bending sci-fi adventure, or a
            heartwarming love story, I cherish every moment spent exploring the
            realms of entertainment, allowing myself to be transported into a
            world of endless imagination and emotion.
          </p>
          <p className="text-white  bg-nav p-3 font-nunito rounded-xl my-1">
            Top 4 Movies:
          </p>
          <p className="text-white  bg-nav p-3 font-nunito rounded-xl my-1">
            Top 4 Shows:
          </p>
        </div>
      </div>
    </div>
  );
}
