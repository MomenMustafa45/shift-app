import React from "react";
import "./footer-list-box.css";

const FooterListBox = ({ listHeader, listItems, dataAos }) => {
  return (
    <div className="footer-list-box" data-aos={dataAos}>
      <h5>{listHeader}</h5>
      <ul>
        {listItems.map((l) => (
          <>
            <li>{l}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default FooterListBox;
