import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsersData } from "../../utils/getLinks/getLinks";
import useGetData from "../../utils/hooks/useGetData";

const UserCard = () => {
  const [userData, setUserData] = useState(null);

  useGetData(getUsersData, setUserData);

  const navigate = useNavigate();

  const navigateToAlbum = (id) => {
    navigate("album", {
      state: {
        id,
      },
    });
  };

  return (
    <>
      {userData &&
        userData.map(
          ({ name, email, address, id, phone, website, username, company }) => {
            const { city, street, suite, zipcode } = address;
            return (
              <div
                onClick={() => navigateToAlbum(id)}
                className="px-2 my-8 overflow-hidden shadow-xl cursor-pointer w-80 rounded-2xl bg-slate-200"
                key={id}
              >
                <div className="h-24 bg-white" />
                <div className="flex justify-center -mt-20">
                  <img
                    className="h-32 rounded-full"
                    src="https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A="
                  />
                </div>
                <div className="px-4 py-4 mt-4">
                  <h1 className="mb-4 text-xl font-bold">COMPANY DETAILS</h1>
                  <p>
                    <span className="mr-2 font-semibold">Name:</span>
                    {company.name}
                  </p>
                  <p>
                    <span className="mr-2 font-semibold">Catch Pharse:</span>
                    {company.catchPhrase}
                  </p>
                  <p>
                    <span className="mr-2 font-semibold">Bs:</span>
                    {company.bs}
                  </p>
                  <h1 className="mt-8 mb-4 text-xl font-bold">USER DETAILS</h1>
                  <p>
                    <span className="mr-2 font-semibold">Name:</span>
                    {name}
                  </p>
                  <p>
                    <span className="mr-2 font-semibold">Email:</span>
                    {email}
                  </p>
                  <p>
                    <span className="mr-2 font-semibold">Phone:</span>
                    {phone}
                  </p>
                  <p>
                    <span className="mr-2 font-semibold">User:</span>
                    {username}
                  </p>
                  <p>
                    <span className="mr-2 font-semibold">Website:</span>
                    <span>
                      <a href={website} className="text-blue-400 underline">
                        {website}{" "}
                      </a>
                    </span>
                  </p>
                  <p>
                    <span className="mr-2 font-semibold">Address:</span>
                    {city} {street} {suite} {zipcode}
                  </p>
                </div>
              </div>
            );
          }
        )}
    </>
  );
};

export default UserCard;
