import React, { useState } from "react";
import { ListOfDoctors, NavBarAdmin, SidebarAdmin } from "../../Components";
import GetAuthAdmin from "../../hooks/GetAuthAdmin";
import AlertSucces from "../../Components/Alert/AlertSucces";

const DoctorsList = () => {
  const [ShowAlertSucces, setShowAlertSucces] = useState(false);

  GetAuthAdmin();

  return (
    <>
      <NavBarAdmin />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <SidebarAdmin />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>
            <ListOfDoctors setShowAlertSucces={setShowAlertSucces} />
          </main>
        </div>
      </div>
      {ShowAlertSucces && (
        <AlertSucces Message={"The Doctor Verified Succes"} />
      )}
    </>
  );
};

export default DoctorsList;
