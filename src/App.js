import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/imageslider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import RandomColors from "./components/randomcolors/RandomColors";
import StarRating from "./components/star-rating/StarRating";
import SideMenus from "./components/treeview-or-sidemenu/SideMenus";
import menus from "./components/treeview-or-sidemenu/data";
import data from "./components/accordian/data";
import QRCodeGenerator from "./components/qr-code-generator/QRCodeGenerator";
import TabsTest from "./components/custom-tabs/TabsTest";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import ModalTest from "./components/modal-tes-popup/ModalTest";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";

function App() {
  return (
    <div className="App">
      {/*  <Accordian/>*/}
      {/* <RandomColors/> */}
      {/*   <StarRating noOfStars={10} /> */}
      {/* {<ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/> */}
      {/* <LoadMoreData/> */}
      {/* <SideMenus menus={menus} /> */}
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      {/* <{ScrollIndicator url='https://dummyjson.com/products?limit=100'}/> */}
      {/* <ModalTest/> */}
      <GithubProfileFinder />

      {/* <TabsTest />*/}
    </div>
  );
}

export default App;
