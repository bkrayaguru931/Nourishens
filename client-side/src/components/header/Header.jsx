import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerLogo">
          <img src="../assets/logo.png" alt=""></img>
        </span> */}
        <span className="headerTitleSm">
          ❤︎ Beauty is about being comfortable in your own skin & accepting who
          you are ❤︎
        </span>
        <span className="headerTitleLg">NOURISHENS</span>
      </div>
      <img
        className="headerImg"
        src="https://devcare.in/wp-content/uploads/Devcare-Banner-Skin-Care.png"
        alt=""
      />
    </div>
  );
}
