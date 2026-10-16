import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaBars } from "react-icons/fa";
import { MdEmail,MdPhone } from "react-icons/md";

import './App.css'

function App() {

  return (
    <>
      <header className="text-white w-100">
        <div className="bg-black ">
          <nav className="container py-2 d-flex justify-content-between">
            <div className="d-flex gap-4">
              <a className="text-white text-decoration-none d-flex gap-1 align-items-center" href="#">
                <MdEmail />
                <span className="d-none d-sm-inline">contact@example.com</span>
              </a>
              <a className="text-white text-decoration-none d-flex gap-1 align-items-center" href="#">
                <MdPhone />
                <span className="d-none d-sm-inline">+1 5589 55488 55</span>
              </a>
            </div>
            <div>
              <ul className="list-unstyled d-flex gap-3 m-0">
                <li>
                  <a className="text-white text-decoration-none" href="#"><FaTwitter /></a>
                </li>
                <li>
                  <a className="text-white text-decoration-none" href="#"><FaFacebook /></a>
                </li>
                <li>
                  <a className="text-white text-decoration-none" href="#"><FaInstagram /></a>
                </li>
                <li>
                  <a className="text-white text-decoration-none" href="#"><FaLinkedin /></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <nav className="container d-flex justify-content-between align-items-center">
          <div className="d-none d-xxl-block display-2 fw-bolder">
            Passion
          </div>

            <div className="d-block d-xxl-none  fs-1 fw-bolder">
            Passion
          </div>

          <div>
            <FaBars  className="d-xl-none" />
            <ul className="list-unstyled d-none d-xl-flex gap-5 m-0 fs-5">
              <li className="pb-1 border-bottom border-success"><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li className="pb-1"><a href="#" className="text-white text-decoration-none">About</a></li>
              <li className="pb-1"><a href="#" className="text-white text-decoration-none">Services</a></li>
              <li className="pb-1"><a href="#" className="text-white text-decoration-none">Portfolio</a></li>
              <li className="pb-1"><a href="#" className="text-white text-decoration-none">Team</a></li>
              <li className="pb-1"><a href="#" className="text-white text-decoration-none">Dropdown</a></li>
              <li className="pb-1"><a href="#" className="text-white text-decoration-none">Megamenu</a></li>
              <li className="pb-1"><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="p-5">
        <section className="container ">
            <aside className=" row gap-3 gap-lg-0">
              <main className="col-lg-4 ">
                <p className="m-0 bg-success p-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis itaque quia ex nostrum iste dolorem labore voluptates veniam consectetur obcaecati?</p>
              </main>
              <main className="col-lg-4 ">
                <p className="m-0 bg-success p-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis itaque quia ex nostrum iste dolorem labore voluptates veniam consectetur obcaecati?</p>
              </main>
              <main className="col-lg-4 ">
                <p className="m-0 bg-success p-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis itaque quia ex nostrum iste dolorem labore voluptates veniam consectetur obcaecati?</p>
              </main>
            </aside>
        </section>
      </div>

    </>
  )
}

export default App
