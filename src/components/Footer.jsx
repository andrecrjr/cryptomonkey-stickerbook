import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export const Footer = () => {
  const [copied, setCopy] = useState({ copy: false });
  return (
    <footer>
      <h3 className='credits'>Created with 💓 by andrecrjr#2731 aka Eroshi!</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className='credits--username'>
          ban_1eroshi3kz1ye9o6c6nxqu5zzfhxmc9mqugg9uf8nfk1nw5nnx6q5r66e3ke
        </p>
        <CopyToClipboard
          text={
            "ban_1eroshi3kz1ye9o6c6nxqu5zzfhxmc9mqugg9uf8nfk1nw5nnx6q5r66e3ke"
          }
          onCopy={() => setCopy({ copy: !copied.copy })}
        >
          <span
            role='img'
            aria-label='clip-to-clipboard'
            style={{ cursor: "pointer", fontSize: "1rem" }}
          >
            📋
          </span>
        </CopyToClipboard>
      </div>
      <p className={`donate ${copied.copy && `donate--show`}`}>
        Address copied!
      </p>
    </footer>
  );
};