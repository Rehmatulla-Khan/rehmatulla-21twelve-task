import Album from "../pages/album/Album";
import Home from "../pages/home/Home";
import Photo from "../pages/photo/Photo";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/album",
    component: Album,
  },
  {
    path: "/photo",
    component: Photo,
  },
  {
    path: "*",
    component: Home,
  },
];

export default routes;
