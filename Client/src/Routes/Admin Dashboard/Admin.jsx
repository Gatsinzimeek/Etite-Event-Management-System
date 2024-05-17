import { Outlet } from "react-router-dom";
import Navigation from "../../Component/Left-Navigation-Bar/Navigation";
import TopNavBar from "../../Component/Top-Navigation-Bar/TopNavBar";
const Admin = () => {
  return (
    <main className="flex justify-around bg-slate-100 w-full">
        <nav className=" w-[15%] pt-4 bg-[#3e61ac] flex flex-col items-center max-lg:hidden">
            <Navigation></Navigation>
        </nav>
        <section className="flex-1 min-h-[100vh] flex flex-col">
          <TopNavBar />
          <Outlet/>
          <footer className="mt-auto text-center p-[10px] w-full">&copy; copyright Designed by Etite Technologies LTD</footer>
        </section>
    </main>
  )
}

export default Admin
