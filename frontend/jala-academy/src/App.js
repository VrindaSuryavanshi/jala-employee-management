import './App.css';
import Muitiple_Tabs from './more/Muitiple_Tabs';
import Popups from  './more/Popups'
import AutoComplete from  './more/AutoComplete'
import Collapsible from  './more/collapsible/Collapsible'
import IFrames from  './more/IFrames'
import Menu from  './more/Menu'
import Slider from  './more/Slider'
import Tooltips from  './more/Tooltips'
import CSS_Properties from './more/CSS_Properties'
import Links from './more/Links';
import Account from './pages/account/Account'
import Create from './pages/create/Create';
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataTable from './data/DataTable';
import Search from './pages/search/Search';
import MultiValue from './multivalue/MultiValue';
import Images from './more/Images';
import PasswordForgot from './pages/PasswordForgot';
import AdminLogin from './pages/AdminLogin';
import Update from './pages/update/Update';
import Settings from './pages/Settings';


function App() {


  return (
    <BrowserRouter >
    <Routes>
      <Route>
        <Route path="/" element={<Account />}/>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/forgotpass" element={<PasswordForgot />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/update/:_id" element={<Update />}/>
        <Route path="/mutiple-tabs" element={ <Muitiple_Tabs/>}/>
        <Route path='/popups' element={<Popups />} />
        <Route path='/autocomplete' element={<AutoComplete />} />
        <Route path='/collapsible' element={<Collapsible />} />
        <Route path='/css-properties' element={<CSS_Properties />} />
        <Route path='/iframes' element={<IFrames />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='/tooltips' element={<Tooltips />} />
        <Route path='/search' element={<Search/>} />
        <Route path="/links" element={<Links />}></Route>
        <Route path="/images" element={<Images />}></Route>
        <Route path='/d' element={<MultiValue />} />
        <Route path='/setting' element={<Settings />} />      
        <Route path='/data' element={<DataTable />} />
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
