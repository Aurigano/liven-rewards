import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Rewards from "./views/Rewards";

function App() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <Header />
      <Rewards />
      <Footer />
    </div>
  );
}

export default App;
