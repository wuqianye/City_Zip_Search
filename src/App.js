import "./App.css"
import ZipSearch from "./components/ZipSearch"
import CitySearch from './components/CitySearch'

function App() {
    return (
        <div className="App">
            <div id="blank" />
            <ZipSearch />
            <CitySearch />
        </div>
    );
}

export default App
