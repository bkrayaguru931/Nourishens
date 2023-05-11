// import { Link } from "react-router-dom";
// import myImage from "../assets/me.png";

// import "./sidebar.css";

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div className="sidebarItem">
//         <span className="sidebarTitle">ABOUT ME</span>
//         <img src={myImage} alt="BabyKrishna" />
//         <p>
//           Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
//           amet ex esse.Sunt eu ut nostrud id quis proident.
//         </p>
//       </div>
//       <div className="sidebarItem">
//         <span className="sidebarTitle">CATEGORIES</span>
//         <ul className="sidebarList">
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Skin">
//               Skin
//             </Link>
//           </li>
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Hair">
//               Hair
//             </Link>
//           </li>
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Atmosphere">
//               Atmosphere
//             </Link>
//           </li>
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Style">
//               Style
//             </Link>
//           </li>
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Lips">
//               Lips
//             </Link>
//           </li>
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Hand">
//               Hand
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="sidebarItem">
//         <span className="sidebarTitle">FOLLOW US</span>
//         <div className="sidebarSocial">
//           <i className="sidebarIcon fa-brands fa-square-facebook"></i>
//           <i className="sidebarIcon fa-brands fa-square-instagram"></i>
//           <i className="sidebarIcon fa-brands fa-square-twitter"></i>
//           <i className="sidebarIcon fa-brands fa-linkedin"></i>
//         </div>
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link key={c._id} to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
