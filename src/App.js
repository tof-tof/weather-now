import "./assets/css/tailwind.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Search from "./Components/Search";

function App() {
  return (
    <div className="h-full min-h-screen bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-500 flex flex-col justify-between">
      <Header />
      <Search className="mb-auto h-10" />
      <Footer />
    </div>
  );
}

export default App;
