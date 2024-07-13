import { CssBaseline } from "@mui/material";

import { createContext, useState } from "react";
import App from "./App";
import img1 from "../public/img/one.jpg";
import img2 from "../public/img/two.jpg";
import img3 from "../public/img/three.jpg";
import img4 from "../public/img/four.jpg";
import img5 from "../public/img/five.jpg";
import img6 from "../public/img/six.jpg";

export const themeContext = createContext();

export default function ThemedApp() {
    const [count, setCount] = useState(0);
    const [discount, setDiscount] = useState([
        { id: 1, code: "#111", discount: 20, name: "Ramadan Discount" },
        { id: 2, code: "#000", discount: 10, name: "Black Friday Discount" },
        { id: 3, code: "#222", discount: 30, name: "christmas Discount" },
    ]);
    const [items, setItems] = useState([
        { id: 1, name: "Shoe 1", price: 200, qty: 5, image: img1 },
        { id: 2, name: "Shoe 2", price: 200, qty: 5, image: img2 },
        { id: 3, name: "Shoe 3", price: 200, qty: 5, image: img3 },
        { id: 4, name: "Shoe 4", price: 200, qty: 5, image: img4 },
        { id: 5, name: "Shoe 5", price: 200, qty: 5, image: img5 },
        { id: 6, name: "Shoe 6", price: 200, qty: 5, image: img6 },
    ]);
    return (
        <themeContext.Provider
            value={{ count, items, setItems, setCount, discount, setDiscount }}
        >
            <CssBaseline />
            <App />
        </themeContext.Provider>
    );
}
