import "./App.css";
import FeaturedText from "./components/FeaturedText";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SubscribeUs from "./components/SubscribeUs";
import GirlUsinglaptop from "./assets/girl-using-laptop.png";
import Profile from "./assets/Profile.png";
import PeopleGroup from "./assets/people-group.png";
import PeopleRunning from "./assets/people-running.png";
import Footer from "./components/Footer";
import ImagesGroup from "./components/ImagesGroup";
import {ReactComponent as SideNav} from "./assets/side-nav.svg"

function App() {
	return (
		<div className="app">
			<Header />
			<div className="side-nav">
<SideNav />
			</div>

			<div style={{ paddingTop: "128px" }}>
				<FeaturedText />
				<MainContent id="01" component={ImagesGroup} />
				<MainContent
					id="02"
					imgSrc={GirlUsinglaptop}
					reverse="row-reverse"
					bgPos="right"
				/>
				<MainContent id="03" imgSrc={Profile} />
				<MainContent
					id="04"
					reverse="row-reverse"
					bgPos="right"
					component={ImagesGroup}
				/>
				<MainContent id="05" imgSrc={PeopleGroup} />
				<MainContent
					id="06"
					imgSrc={PeopleRunning}
					reverse="row-reverse"
					bgPos="right"
				/>
			</div>
			<SubscribeUs />
			<Footer />
		</div>
	);
}

export default App;
