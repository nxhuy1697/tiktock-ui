import React from "react";

export default function AccountItems() {
  return (
    <>
      <div className="accountItems">
        <img
          src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/432176453_961740661984419_3874775538159957915_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lAPMd4F-EmYAX96inSP&_nc_ht=scontent.fsgn2-6.fna&cb_e2o_trans=q&oh=00_AfBNzv2xbTi-5pM-lcnyMwMzxuqoVT1VeXXCU8biI2sheQ&oe=65F6B2F4"
          alt="TSV1989"
          className="accountItems__avatar"
        />
        <div className="accountItems__info">
          <h4 className="accountItems__info-name">
            <span>Taylor Swift</span>
            <i class="fa-solid fa-circle-check"></i>
          </h4>
          <span className="accountItems__info-username">taylorswift</span>
        </div>
      </div>
    </>
  );
}
