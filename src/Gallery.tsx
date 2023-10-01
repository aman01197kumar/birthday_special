import { useState } from "react";
import { imageGallery } from "./imageGallery";

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [messageString, setMessageString] = useState("");
  const getImg = (imgSrc: any, message: string) => {
    setTempImgSrc(imgSrc);
    setMessageString(message);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <div className="cross_btn" onClick={() => setModel(false)}>
          X
        </div>
        <div className="model__container">
          <img src={tempImgSrc} />
          <div style={{textAlign:'center', fontSize:'19px'}}>{messageString}</div>
        </div>
      </div>
      <div className="gallery">
        {imageGallery?.map((item) => {
          return (
            <div
              className="pics"
              key={item.imgsrc}
              onClick={() => {
                getImg(item.imgsrc, item.message);
              }}
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
