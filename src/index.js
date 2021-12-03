import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import CRUD from './Pages/CRUD'

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CRUD />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
