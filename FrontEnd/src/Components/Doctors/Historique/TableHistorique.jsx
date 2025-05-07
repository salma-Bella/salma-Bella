import React, { useEffect, useState } from "react";
import axiosClient from "../../../AxiosClient";
import { useSelector } from "react-redux";

const TableHistorique = () => {
  const [AppointmentHistorique, setAppointmentHistorique] = useState([]);
  const doctorData = useSelector((state) => state.AuthDoctor);

  useEffect(() => {
    if (doctorData.doctor) {
      axiosClient
        .get("/doctor/appointmentoldday/" + doctorData.doctor.id)
        .then((res) => {
          setAppointmentHistorique(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [doctorData]);

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Nom & Prenom
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Cin
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Numero Telephone
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Date Rendezvous
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Heur
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {AppointmentHistorique.map((el, idx) => {
                    return (
                      <tr
                        key={idx}
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="flex items-center p-4   whitespace-nowrap">
                          <div className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                            <div className="text-[14px] font-semibold text-gray-900 dark:text-white">
                              {el.user.firstname}
                            </div>
                            {/* <div className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                              {el.email}
                            </div> */}
                          </div>
                        </td>
                        <td className="max-w-sm p-4 overflow-hidden text-[14px] font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                          {el.user.cin}
                        </td>
                        <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {el.user.phoneNumber || ""}
                        </td>
                        <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {el.type_appointment}
                        </td>
                        <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {el.date_appointment}
                        </td>{" "}
                        <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {el.type_appointment}
                        </td>
                        <td className="p-4 text-[14px] font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Table */}

      {/* <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 [14px]:flex [14px]:justify-between dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center mb-4 [14px]:mb-0">
          <a
            href="#"
            className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <span className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
            Showing
            <span className="font-semibold text-gray-900 dark:text-white">
              1-20
            </span>
            of
            <span className="font-semibold text-gray-900 dark:text-white">
              2290
            </span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="inline-flex items-center justify-center flex-1 px-3 py-2 text-[14px] font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              className="w-5 h-5 mr-1 -ml-1"
              fill=" currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            Previous
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center flex-1 px-3 py-2 text-[14px] font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Next
            <svg
              className="w-5 h-5 ml-1 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div> */}
    </>
  );
};

export default TableHistorique;
