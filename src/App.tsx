import './App.css';
import ThemeContext from "./providers/ThemeContext";
import SignInPage from './pages/SignIn/SignIn';
import SignUpPage from './pages/SignUp/SignUp';
import MainPage from './pages/MainPage/MainPage';
import MoviePage from './pages/MoviePage/MoviePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
// import SearchInput from './components/SearchInput/SearchInput';
// import Input from "./components/Input/Input";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <ThemeContext>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/sign-up" element={<SignUpPage/>}></Route>
        <Route path="/sign-in" element={<SignInPage/>}></Route>
        <Route path="/movie/:imdbID" element={<MoviePage/>}></Route>
        <Route path="/favorites" element={<FavoritesPage/>}></Route>
      </Routes>
    </ThemeContext>
    </BrowserRouter>

    {/* <Input content="Text" helpText="Title" labelId="Text" labelText="Text" isDisabled={true}></Input> */}
    {/* <UserAuth userName="Artem Lapitsky"></UserAuth> */}
    {/* <SearchInput content="Text" helpText="Search" isDisabled={false}></SearchInput> */}
    </>
  );
}