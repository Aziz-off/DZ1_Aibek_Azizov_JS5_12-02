import './App.css';
import {useDispatch} from "react-redux";
import NumbersPage from "./pages/numbersPage/NumbersPage";

function App() {
    const dispatch = useDispatch();

    return (
        <div>
            <NumbersPage />
        </div>
    );
}

export default App;
