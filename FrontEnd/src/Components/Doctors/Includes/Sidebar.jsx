import React from "react";

import {
  Square2StackIcon,
  CalendarDaysIcon,
  DocumentDuplicateIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../../AxiosClient";
import { logout } from "../../../Redux/SliceAuthDoctor";
import { useDispatch } from "react-redux";
import { remove } from "../../../Services/LocalStorageService";

const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const Logout = () => {
    axiosClient
      .post("/doctor/logout")
      .then((res) => {
        if (res.data.success && res.status === 200) {
          dispatch(logout());
          remove("TOKEN_DOCTOR");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <aside className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0  w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width">
        <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <ul className="pb-2 space-y-2">
                <li>
                  <Link
                    to={"/doctor/dashboard"}
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    {" "}
                    <Square2StackIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3">Dashboard</span>
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link
                    to={"/docotr/rendezvous"}
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <CalendarDaysIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3">Appointment</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/doctor/historique"}
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <DocumentDuplicateIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3">Historique</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/doctor/settings"}
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    {" "}
                    <Cog6ToothIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3">Settings</span>
                  </Link>
                </li>
              </ul>
              <div className="pt-2 space-y-2 " style={{ marginTop: "14rem" }}>
                <div className="flex items-center mt-3 p-2 text-base cursor-pointer text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                  <ArrowRightOnRectangleIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                  <button onClick={Logout} className="ml-3">Lougout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
