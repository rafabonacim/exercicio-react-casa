import './app.css'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatsCard from './components/StatsCards';
import LastProduct from './components/LastProduct';
import Categories from './components/Categories';
import PageHeading from './components/PageHeading';


function App() {
	return (
		<div id="wrapper">
			<Sidebar />
			{/* <!-- Content Wrapper --> */}
			<div id="content-wrapper" class="d-flex flex-column">
				{/* <!-- Main Content --> */}
				<main id="content">
					<Topbar />
					<div class="container-fluid">
						<PageHeading />
						<div class="row">
							<StatsCard />
						</div>
						<div class="row">
							<LastProduct />
							<Categories />
						</div>
					</div>
				</main>
				{/* <!-- End of Main Content --> */}
				<Footer />
			</div>
			{/* <!-- End of Content Wrapper --> */}
		</div>
	);
}
export default App;