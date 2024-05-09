import { Link, useLocation } from "react-router-dom";

export const NavMenu = () => {
  const pages = [
    {
      path: "/",
      linkName: "Dictionary",
    },
    {
      path: "/recommended",
      linkName: "Recommended",
    },
    {
      path: "/training",
      linkName: "Training",
    },
  ];

  const location = useLocation();

  return (
    <ul className=" flex flex-col gap-7 xl:flex-row">
      {pages.map((item) => (
        <li key={item.linkName} className="text-sm font-medium text-prim-white xl:text-prim-black">
          <Link
            to={item.path}
            className={`${
              location.pathname === item.path &&
              "text-prim-black bg-prim-white px-5 py-3 rounded-2xl xl:bg-prim-green xl:text-prim-white"
            }`}
          >
            {item.linkName}
          </Link>
        </li>
      ))}
    </ul>
  );
};
