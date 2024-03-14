import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";
//
import { Wrapper as PopertWrapper } from "../../../Poperties";
import AccountItems from "../../../AccountItems/index";
import Buttons from "../../../Buttons";

export default function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });
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

          <Tippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
              <div
                className="header__inner-searchResult"
                tabIndex="-1"
                {...attrs}
              >
                <PopertWrapper>
                  <h4 className="search-title">Accounts</h4>
                  <AccountItems />
                  <AccountItems />
                  <AccountItems />
                </PopertWrapper>
              </div>
            )}
          >
            <div className="header__inner-search">
              <input
                placeholder="Search account and videos"
                spellCheck="false"
              />
              <button className="clear">
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
              <i className="fa-solid fa-spinner loading"></i>
              <button className="search-btn">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </Tippy>
          {/* action  */}
          <div className="header__inner-actions">
            <Buttons text>Upload</Buttons>
            <Buttons primary>Log in</Buttons>
            <button className="testbtn"> testr</button>
          </div>
        </div>
      </header>
    </>
  );
}
