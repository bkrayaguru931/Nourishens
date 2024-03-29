// import { Link } from "react-router-dom";
// import "./post.css";

// export default function Post({ img }) {
//   return (
//     <div className="post">
//       <img className="postImg" src={img} alt="" />
//       <div className="postInfo">
//         <div className="postCats">
//           <span className="postCat">
//             <Link className="link" to="/posts?cat=Music">
//               Hair
//             </Link>
//           </span>
//           <span className="postCat">
//             <Link className="link" to="/posts?cat=Music">
//               Humidity
//             </Link>
//           </span>
//         </div>
//         <span className="postTitle">
//           <Link to="/post/abc" className="link">
//             Lorem ipsum dolor sit amet
//           </Link>
//         </span>
//         <hr />
//         <span className="postDate">1 hour ago</span>
//       </div>
//       <p className="postDesc">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
//         officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
//         fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
//         atque, exercitationem quibusdam, reiciendis odio laboriosam?
//       </p>
//     </div>
//   );
// }

import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:4000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, index) => (
            <span key={index} className="postCat">
              {c.name}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
