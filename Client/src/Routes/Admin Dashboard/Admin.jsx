import { Outlet } from "react-router-dom";
import Navigation from "../../Component/Left-Navigation-Bar/Navigation";
import TopNavBar from "../../Component/Top-Navigation-Bar/TopNavBar";
const Admin = () => {
  return (
    <main>
        <nav>
            <Navigation></Navigation>
        </nav>
        <section>
          <TopNavBar />
          <Outlet/>
          <footer>&copy; copyright Designed by Etite Technologies LTD</footer>
        </section>
    </main>
  )
}

export default Admin
