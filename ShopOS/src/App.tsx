import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Template } from "./features/template";
import { Workflows } from "./features/cart/components/Cart";
import { Agent } from "./features/Agents";
import { ProductGrid } from "./features/store/components/ProductGrid";
import { Navigation } from "./features/store/components/Navigation";
import { Search } from "./features/search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path="/newStore" element={<Navigation/>} />
        <Route path="/store" element={<ProductGrid />} />
        <Route path="/templates" element={<Template />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/agents" element={<Agent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
