import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import "./index.css";

function App() {
  return (
    <section className="myclass">
      <header className="text-white position-absolute w-100">
        <div className="bg-black ">
          <nav className="container py-2 d-flex justify-content-between">
            <div className="d-flex gap-4">
              <a className="text-white text-decoration-none d-flex gap-1 align-items-center" href="#">
                <MdEmail />
                contact@example.com
              </a>
              <a className="text-white text-decoration-none d-flex gap-1 align-items-center" href="#">
                <MdPhone />
                +1 5589 55488 55
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
          <div className="fs-1 fw-bolder">
            Passion
          </div>
          <div>
            <ul className="list-unstyled d-flex gap-5 m-0">
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

      <div className="my-bg">
        <main className="container h-100 d-flex align-items-center">
          <section className=" row gap-4 flex-grow-1">
            <div className="col d-flex flex-column align-items-start gap-2">
              <p className="bg-success text-white fw-bolder d-inline-block px-3 py-2 rounded-4">Innovative Solutions</p>
              <h1 className="text-white display-5 fw-bolder">Transform Your Business with Modern Technology</h1>
              <p className="text-secondary fs-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.</p>
              <div className="d-flex gap-4">
                <button className="py-2 px-4 border-0 bg-success text-white h5 rounded">Explore Services</button>
                <button className="d-flex align-items-center gap-2 border-0 bg-transparent text-success fw-bold fs-5">
                  <FaInstagram /> Watch Demo
                </button>
              </div>
              <main className="d-flex gap-5">
                <div className="d-flex flex-column text-white">
                  <b className="h1 text-success">500+</b>
                  Projects Completed
                </div>
                <div className="d-flex flex-column text-white">
                  <b className="h1 text-success">500+</b>
                  Projects Completed
                </div>
                <div className="d-flex flex-column text-white">
                  <b className="h1 text-success">500+</b>
                  Projects Completed
                </div>
              </main>
            </div>
            <div className=" col row">
              <aside className="col-6 py-2">
                <div className="my-blur d-flex flex-column align-items-center gap-2 p-5 border border-secondary rounded-4"><FaInstagram color="#058d4e" size={"50px"} /> Secure & Reliable</div>
              </aside>
              <aside className="col-6 py-2">
                <div className="my-blur d-flex flex-column align-items-center gap-2 p-5 border border-secondary rounded-4"><FaInstagram color="#058d4e" size={"50px"} /> Expert Team</div>
              </aside>
              <aside className="col-6 py-2">
                <div className="my-blur d-flex flex-column align-items-center gap-2 p-5 border border-secondary rounded-4"><FaInstagram color="#058d4e" size={"50px"} /> High Performance</div>
              </aside>
              <aside className="col-6 py-2">
                <div className="my-blur d-flex flex-column align-items-center gap-2 p-5 border border-secondary rounded-4"><FaInstagram color="#058d4e" size={"50px"} /> Award Winning</div>
              </aside>
            </div>
          </section>
        </main>

      </div>

      <div className=" container d-flex">
        <div className="flex-grow-1 col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6 position-relative">
              <main className="position-absolute bg-white mydata p-3 d-flex align-items-center gap-2 rounded-3 shadow-lg">
                <aside className="p-3 bg-secondary rounded ">
                  <FaTwitter size={"24px"}/>
                </aside>
                <aside className="d-flex flex-column">
                  <span className="fw-bold">Excellence Award</span>
                  <span>Digital Innovation 2023</span>
                </aside>
              </main>
              <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/about/about-square-8.webp" className="d-block mx-lg-auto img-fluid rounded-4" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">Transforming Ideas Into Reality Since 2015</h1>
              <p className="lead">We are a passionate team of innovators dedicated to creating exceptional digital experiences that drive meaningful results for businesses worldwide.</p>
              <p className="lead">Our journey began with a simple vision: to bridge the gap between cutting-edge technology and human-centered design. Today, we've grown into a trusted partner for companies seeking to transform their digital presence and accelerate their growth.</p>
              <p className="lead">Through collaborative partnerships and innovative solutions, we've helped hundreds of organizations achieve their goals while building lasting relationships founded on trust, transparency, and exceptional results.</p>

              <div className="d-flex border-top border-bottom py-4 my-5">
                <aside className="flex-grow-1 d-flex flex-column align-items-center py-1">
                  <span className="text-success h1">8+</span>
                  <span className="text-uppercase">Years Experience</span>
                </aside>
                <aside className="flex-grow-1 d-flex flex-column align-items-center py-1">
                  <span className="text-success h1">450+</span>
                  <span className="text-uppercase">Projects Completed</span>
                </aside>
                <aside className="flex-grow-1 d-flex flex-column align-items-center py-1">
                  <span className="text-success h1">25</span>
                  <span className="text-uppercase">Team Members</span>
                </aside>
              </div>

              <div className="d-flex gap-3">
                <a href="#" className="text-uppercase h6 text-decoration-none py-3 px-4 rounded-4 bg-success text-white">Discover Our Work</a>
                <a href="#" className="text-uppercase h6 text-decoration-none py-3 px-4 rounded-4 border border-success text-success">Meet Our Team</a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <main className="d-flex my-animation">
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-1.webp" alt="" className="w-100" />
        </aside>
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-2.webp" alt="" className="w-100" />
        </aside> 
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-3.webp" alt="" className="w-100" />
        </aside> 
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-4.webp" alt="" className="w-100" />
        </aside> 
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-1.webp" alt="" className="w-100" />
        </aside>
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-2.webp" alt="" className="w-100" />
        </aside> 
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-3.webp" alt="" className="w-100" />
        </aside> 
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-4.webp" alt="" className="w-100" />
        </aside> 
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-1.webp" alt="" className="w-100" />
        </aside>
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-2.webp" alt="" className="w-100" />
        </aside> 
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-3.webp" alt="" className="w-100" />
        </aside> 
        <aside className="border border-end-0">
          <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/clients/clients-4.webp" alt="" className="w-100" />
        </aside> 
      </main>
      </div>

    <div className=" container d-flex">
        <div className="flex-grow-1 col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6 position-relative my-animation2">
              <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/services/services-9.webp" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-start">
              <p className="text-success p-2">Professional Services</p>
              <h1 className="display-5 fw-bold lh-1 mb-3">Elevating Business Performance Through Strategic Solutions</h1>
              <p className="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque auctor. Phasellus gravida magna at tortor cursus, sit amet suscipit tortor malesuada.</p>
              <div className="d-flex gap-3">
                <a href="#" className="text-uppercase h6 text-decoration-none py-3 px-4 rounded-4 bg-success text-white">Request a Consultation</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
