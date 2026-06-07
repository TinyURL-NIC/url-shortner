// import Header from "@/components/Header/Header";

import { BarLoader } from "react-spinners";

function Dashboard() {
  return (
    <>
    {/* <Header /> */}
    {/* <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>
        
        <p className="mt-2">
          Authentication successful.
        </p>
      </div>
    </div> */}

      <div>
        {true && <BarLoader width={"100%"} color="#36d7b7" />}
      </div>
    </>
  );
}

export default Dashboard;