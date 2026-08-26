import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Work } from "./pages/Work.jsx";
import { FounderPage } from "./pages/FounderPage.jsx";
import { GetInvolvedPage } from "./pages/GetInvolvedPage.jsx";
import { Contact } from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
