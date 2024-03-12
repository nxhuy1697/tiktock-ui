import Header from "../components/Header";
import Sidebar from "./Sidebar";

import React from 'react'

export default function DefaultLayout({children}) {
  return (
    <div className="defWrapper">
        <Header />
        <div className="defWrapper__container">
            <Sidebar/>
            <div className="defWrapper__container-content">
                {children}
            </div>
        </div>
    </div>
  )
}
