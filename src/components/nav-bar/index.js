import React, { useState } from "react";
import "./index.css";

const tabsData = [
  { key: "home", page: "HOME PAGE" },
  { key: "news", page: "NEWS PAGE" },
  { key: "contact", page: "CONTACT PAGE" },
  { key: "about", page: "ABOUT PAGE" },
];

export default function NavBar() {
  const [selectedTab, setSelectedTab] = useState("home");

  const getPage = (selectedTab) => {
    return tabsData.filter((tab) => tab.key === selectedTab)[0].page;
  };

  return (
    <div className="layout-column justify-content-center align-items-center">
      <div
        className="layout-row justify-content-around align-items-center mt-20 links"
        data-testid="navigation-tabs"
      >
        <button onClick={() => setSelectedTab("home")}>Home</button>
        <button onClick={() => setSelectedTab("news")}>News</button>
        <button onClick={() => setSelectedTab("contact")}>Contact</button>
        <button onClick={() => setSelectedTab("about")}>About</button>
      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
          <span>{getPage(selectedTab)}</span>
        </section>
      </div>
    </div>
  );
}
