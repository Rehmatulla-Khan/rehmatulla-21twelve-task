import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAlbumsData } from "../../utils/getLinks/getLinks";
import useGetData from "../../utils/hooks/useGetData";

const Album = () => {
  const [albumData, setAlbumData] = useState(null);

  useGetData(getAlbumsData, setAlbumData);
  const location = useLocation();
  const userId = location.state.id;
  const navigate = useNavigate();

  const navigateToPhoto = (id) => {
    navigate("/photo", {
      state: {
        id,
      },
      replace: true,
    });
  };

  return (
    <div className="mt-20">
      {albumData &&
        albumData
          .filter((obj) => obj.userId == userId)
          .map(({ id, title }, i) => (
            <div
              key={id}
              onClick={() => navigateToPhoto(id)}
              className="flex items-center w-9/12 p-4 mx-auto mb-2 border cursor-pointer md:w-6/12"
            >
              <span className="w-4 mr-6">{i + 1}</span>
              <span className="text-lg font-semibold">{title}</span>
            </div>
          ))}
    </div>
  );
};

export default Album;
