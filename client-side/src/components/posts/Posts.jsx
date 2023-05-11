// import Post from "../post/Post";
// import "./posts.css";

// export default function Posts({ posts }) {
//   return (
//     <div className="posts">
//       <Post img="https://img.freepik.com/premium-photo/spa-skin-care-beauty-female-feet-with-red-roses-towel-cream_100073-1146.jpg?w=2000" />
//       <Post img="https://www.jagranimages.com/images/newimg/07082022/07_08_2022-beauty_tips_22961510.webp" />
//       <Post img="https://hips.hearstapps.com/hmg-prod/images/rice-water-hair-1621607837.png?crop=1xw:0.75xh;center,top&resize=1200:*" />
//       <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
//       <Post img="https://www.healthshots.com/wp-content/uploads/2020/02/hairspa.jpg" />

//       {posts.map((p) => (
//         <Post post={p} />
//       ))}
//     </div>
//   );
// }

import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}
