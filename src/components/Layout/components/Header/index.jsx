import React from "react";

export default function Header() {
  return (
    <>
      <header className="header">
        {/* container  */}
        <div className="header__inner">
          {/* logo */}
          <div className="header__inner-logo">
            <img
              src="https://www.freepnglogos.com/uploads/tik-tok-logo-png/file-logo-tik-tok-svg-20.png"
              alt="logo"
              width={118}
            />
          </div>
          {/* search field  */}
          <div className="header__inner-search">
            <input placeholder="Search account and videos" spellCheck="false" />
            <button className="clear">
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
            <i className="fa-solid fa-spinner loading"></i>
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </div>
          {/* action  */}
          <div className="header__inner-actions" >
            
          </div>
        </div>
      </header>
    </>
  );
}
