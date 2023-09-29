import React, { useState } from "react";
import { imageGallery } from "./imageGallery";

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc:any) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <div className="cross_btn" onClick={()=>setModel(false)}>X</div>
      </div>
      <div className="gallery">
        {imageGallery?.map((item) => {
          return (
            <div
              className="pics"
              key={item.imgsrc}
              onClick={() => getImg(item.imgsrc)}
            >
              <img src={item.imgsrc} alt={item.imgsrc} width="100%" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
