import com_img2 from './images/IBM_logo.png'
import com_img from './images/IBM_image.jpg'
import NavBar from './Component/Navbar';
import './App.css';

const companyLogoData = [
  {"Company":com_img, "Logo":com_img2},
  {"Company":com_img, "Logo":com_img2},
  {"Company":com_img, "Logo":com_img2},
  {"Company":com_img, "Logo":com_img2},
  {"Company":com_img, "Logo":com_img2}
];

const companyList = companyLogoData.map((data, key) => 
  <div class="companyImage">
    <a href="www.google.com">
      <img src={data.Company} key={key} alt="Forest" width="320" height="320" />
    </a>
    <span class="companyLogo">
      <img src={data.Logo} key={key} alt="Forest" width="180" height="50" />
    </span>
  </div>
)

function App() {
  return (
    <>
      <NavBar />
      <div id="top">
        <h1>Growth on Your mind?</h1>
        <h4>Explore</h4>
      </div>
      <div id="companies">
        <h2>companies</h2>
        <div class="company">
        {companyList}
      </div>
      </div>
    </>
  );
}

export default App;
