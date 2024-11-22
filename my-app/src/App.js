import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Placecomponent from "./Components/placecomponent/placecomponent"
import { Route, Routes, useLocation } from "react-router-dom"
import NotFound from './Components/NotFound/notfound';
import Reserv from './Components/reserv/reserv';
import Boxfurniture from './Components/foodcb//foodcb';
import Food from './Components/food/food';
import Res from './Components/Remark/remark'
import Five from './Components/compboost/compboost'
import User from './Components/user/user'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
    <Header />
    <main>
    <Routes>
    <Route path="/" element={<>
          <Placecomponent />
    </>
    } />
    <Route path="/placecomponent" element={<Placecomponent />} />
    <Route path="/reserv" element={<Reserv />} />
    <Route path="/cards" element={<Boxfurniture/>} />
    <Route path="/foods" element={<Food/>} />
    <Route path="/res" element={<Res/>} />
    <Route path="/five" element={<Five />} />
    <Route path="/users" element={<User />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </main>
    <Footer />
    </>
  );
}