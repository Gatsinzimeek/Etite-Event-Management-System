import { Outlet } from "react-router-dom";
import Navigation from "../../Component/Left-Navigation-Bar/Navigation";
import TopNavBar from "../../Component/Top-Navigation-Bar/TopNavBar";
const Admin = () => {
  return (
    <main className="bg-slate-100 w-full">
        <nav className="fixed left-0 top-0 w-[200px] max-md:w-fit  h-full pt-4 bg-[#3e61ac] flex flex-col items-center">
            <Navigation></Navigation>
        </nav>
        <section className="relative w-[calc(100%-200px)] left-[200px] flex flex-col">
          <TopNavBar />
          <Outlet/>
          <footer className="mt-auto text-center p-[10px] w-full">&copy; copyright Designed by Etite Technologies LTD</footer>
        </section>
    </main>
  )
}

export default Admin
