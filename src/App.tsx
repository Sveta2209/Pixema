import './App.css';
import ThemeContext from "./providers/ThemeContext";
import Header from './components/Header/Header';
import UserSignIn from './components/UserSignIn/UserSignIn';
import UserAuth from './components/UserAuth/UserAuth';
// import SearchInput from './components/SearchInput/SearchInput';
// import Input from "./components/Input/Input";

export default function App() {
  return (
    <>
    <ThemeContext>
    {/* <Input content="Text" helpText="Title" labelId="Text" labelText="Text" isDisabled={true}></Input> */}
    <Header></Header>
    {/* <UserAuth userName="Artem Lapitsky"></UserAuth> */}
    {/* <SearchInput content="Text" helpText="Search" isDisabled={false}></SearchInput> */}
    </ThemeContext>
    </>
  );
}