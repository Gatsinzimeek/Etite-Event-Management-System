import { Outlet } from "react-router-dom";
import Navigation from "../../Component/Left-Navigation-Bar/Navigation";
import TopNavBar from "../../Component/Top-Navigation-Bar/TopNavBar";
const Admin = () => {
  return (
    <main className="flex justify-around bg-slate-100">
        <nav className=" w-[15%] p-4 flex flex-col items-center">
            <Navigation></Navigation>
        </nav>
        <section className="flex-1 min-h-[100vh] flex flex-col">
          <TopNavBar />
          <Outlet/>
          <footer className="mt-auto p-[10px] w-full">&copy; copyright Designed by Etite Technologies LTD</footer>
        </section>
    </main>
  )
}

export default Admin
