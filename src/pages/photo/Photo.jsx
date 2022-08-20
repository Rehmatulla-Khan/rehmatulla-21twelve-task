import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getPhotosData } from "../../utils/getLinks/getLinks";
import useGetData from "../../utils/hooks/useGetData";

const Photo = () => {
  const [photoData, setPhotoData] = useState(null);

  useGetData(getPhotosData, setPhotoData);
  const location = useLocation();
  const albumId = location.state.id;

  return (
    <div className="mt-20">
      {photoData &&
        photoData
          .filter((obj) => obj.albumId == albumId)
          .map(({ id, title, url, thumbnailUrl }, i) => (
            <div
              key={id}
              className="flex flex-col items-center w-9/12 p-4 mx-auto mb-2 border md:w-6/12"
            >
              <span className="mb-4 text-lg font-semibold">{title}</span>

              <div className="flex">
                <img src={url} alt="url" className="w-32 h-32 mr-4" />
                <img
                  src={thumbnailUrl}
                  className="w-32 h-32 "
                  alt="thumbnail"
                />
              </div>
            </div>
          ))}
    </div>
  );
};

export default Photo;
