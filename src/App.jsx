import "./App.css";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Rewards from "./views/Rewards";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Rewards />
      <Footer />
    </div>
  );
}

export default App;
