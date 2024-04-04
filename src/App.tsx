import './App.css';
import ThemeContext from "./providers/ThemeContext";
import Header from './components/Header/Header';
import UserSignIn from './components/UserSignIn/UserSignIn';
import UserAuth from './components/UserAuth/UserAuth';
import Footer from './components/Footer/Footer';
import SignInPage from './pages/SignIn/SignIn';
import SignUpPage from './pages/SignUp/SignUp';
// import SearchInput from './components/SearchInput/SearchInput';
// import Input from "./components/Input/Input";

export default function App() {
  return (
    <>
    <ThemeContext>
    {/* <Input content="Text" helpText="Title" labelId="Text" labelText="Text" isDisabled={true}></Input> */}
    {/* <Header></Header>
    <Footer></Footer> */}
    <SignInPage></SignInPage>
    {/* <SignUpPage></SignUpPage> */}
    {/* <UserAuth userName="Artem Lapitsky"></UserAuth> */}
    {/* <SearchInput content="Text" helpText="Search" isDisabled={false}></SearchInput> */}
    </ThemeContext>
    </>
  );
}