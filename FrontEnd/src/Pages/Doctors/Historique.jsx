import React from "react";
import {
  ListOfHistorique,
  NavBarDoctors,
  SidebarDoctors,
} from "../../Components";
import GetAuthDoctor from "../../hooks/GetAuthDoctor";

const Historique = () => {
  document.title = "Historique";

  GetAuthDoctor();

  return (
    <>
      <NavBarDoctors />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <SidebarDoctors />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>
            <ListOfHistorique />
          </main>
        </div>
      </div>
    </>
  );
};

export default Historique;
