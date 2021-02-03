import './dist/css/app.scss';
import Footer from './layout/Footer';
import FeaturesView from './pages/Features/FeaturesView';
import CredentialsView from './pages/Credentials/CredentialsView';
import DownloadView from './pages/Download/DownloadView';
import HomeView from './pages/Home/HomeView';

function App() {
  return (
    <div className="App">
      <HomeView />
      <div className="app__body">
        <FeaturesView />
        <CredentialsView />
        <DownloadView />
      </div>
      <Footer />
    </div>
  );
}

export default App;
