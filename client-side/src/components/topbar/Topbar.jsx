// import { Link } from "react-router-dom";
// import "./topbar.css";
// import logo from "../assets/Nourishens.png";
// import { useContext } from "react";
// import { Context } from "../../context/Context";

// export default function Topbar() {
//   const { user } = useContext(Context);
//   return (
//     <div className="top">
//       <div className="topLeft">
//         <img src={logo} alt="Krishna" />
//         <i className="topIcon fa-brands fa-square-facebook"></i>
//         <i className="topIcon fa-brands fa-square-instagram"></i>
//         <i className="topIcon fa-brands fa-square-twitter"></i>
//         <i className="topIcon fa-brands fa-linkedin"></i>
//       </div>
//       <div className="topCenter">
//         <ul className="topList">
//           <li className="topListItem">
//             <Link className="link" to="/">
//               HOME
//             </Link>
//           </li>
//           <li className="topListItem">
//             <Link className="link" to="/">
//               ABOUT
//             </Link>
//           </li>
//           <li className="topListItem">
//             <Link className="link" to="/">
//               CONTACT
//             </Link>
//           </li>
//           <li className="topListItem">
//             <Link className="link" to="/write">
//               WRITE
//             </Link>
//           </li>
//           {user && <li className="topListItem">LOGOUT</li>}
//         </ul>
//       </div>
//       <div className="topRight">
//         {user ? (
//           <Link className="link" to="/settings">
//             <img
//               className="topImg"
//               src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
//               alt=""
//             />
//           </Link>
//         ) : (
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/login">
//                 LOGIN
//               </Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/register">
//                 REGISTER
//               </Link>
//             </li>
//           </ul>
//         )}
//         <i className="topSearchIcon fas fa-search"></i>
//       </div>
//     </div>
//   );
// }
import logo from "../assets/Nourishens.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:4000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <img src={logo} alt="" />
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
