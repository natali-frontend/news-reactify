import {useState} from 'react'
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header/>
            <div className="container">
                <Main/>
            </div>
        </>
    )
}

export default App
