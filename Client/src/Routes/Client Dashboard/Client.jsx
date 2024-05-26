import TopNavBar from "../../Component/Top-Navigation-Bar/TopNavBar";
import { Outlet } from "react-router-dom";
import Navigation from "../../Component/Left-Navigation-Bar/Navigation";
const Client = () => {
  return (
    <main className="bg-slate-100 w-full flex items-start">
        <nav className="sticky h-dvh top-0 w-[200px] max-sm:hidden  pt-4 bg-[#3e61ac] flex flex-col items-center">
            <Navigation></Navigation>
        </nav>
        <section className="w-auto h-full flex-1 flex flex-col">
          <TopNavBar />
          <Outlet/>
          <footer className="mt-auto text-center p-[10px]">&copy; copyright Designed by Etite Technologies LTD</footer>
        </section>
    </main>
  )
}

export default Client
