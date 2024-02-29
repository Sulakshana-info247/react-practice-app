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
import ModalTest from "./components/modal-test-popup/ModalTest";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import SearchAutoComplete from "./components/search-auto-complete/SearchAutoComplete";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import FeatureFlagsGlobalState from "./components/feature-flags/context/FeatureFlagsContext";
import FeatureFlags from "./components/feature-flags/FeatureFlags";
import UseFetchHookTest from "./components/use-custom-hook/UseFetchHookTest";
import UseOnClickOutsideTest from "./components/use-onclick-ouside-hook/UseOnClickOutsideTest";
import UseWindowResizeTest from "./components/use-window-resize/UseWindowResizeTest";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom/ScrollToTopAndBottom";
import ScrollToParticularSection from "./components/scroll-to-top-and-bottom/ScrollToParticularSection";
import Weather from "./components/weather-app/Weather";

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
      {/* <TabsTest />*/}
      {/* <ModalTest/> */}
      {/*  <GithubProfileFinder /> */}
      {/*  <SearchAutoComplete/> */}
      {/*  <TicTacToe/>  */}
      {/* <FeatureFlagsGlobalState>
        <FeatureFlags />
      </FeatureFlagsGlobalState> */}
      {/*  <UseFetchHookTest/> */}
      {/* <UseOnClickOutsideTest/> */}
      {/*  <UseWindowResizeTest/> */}
      {/*   <ScrollToTopAndBottom /> */}
    {/*   <ScrollToParticularSection /> */}
    <Weather/>
    </div>
  );
}

export default App;
