import Banner from './komponen/Banner';
import Navbar from './komponen/Navbar';
import Pengenalan from './komponen/Pengenalan';
import Playground from './komponen/Playground';
import Sintaks from './komponen/Sintaks';
import Textstyle from './komponen/Textstyle';
import './w3.css';

function App() {
  return (
    <>
    <Navbar />
    <Banner />
    <Pengenalan />
    <Sintaks />
    <Textstyle />
    <Playground />
    </>
  );
}

export default App;
