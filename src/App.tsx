import './App.css';
import Input from "./components/Input/Input";

export default function App() {
  return (
    <>
    <Input content="Text" helpText="Title" labelId="Text" labelText="Text" isDisabled={true}></Input>
    </>
  );
}