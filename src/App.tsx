import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import PhotoBlock from "./components/photo-block/PhotoBlock";
import { ButtonContextProvider } from "./context/ButtonContext";
// import { useButtonContext } from "./context/ButtonContext";

const App = (): React.ReactElement => {
  // const buttonContext = useButtonContext();

  return (
    <div className="card">
      <ButtonContextProvider>
        <Header subtitle="Witcher Info"></Header>
        <Body subtitle="Witcher Signs">
          <PhotoBlock></PhotoBlock>
        </Body>
        <Footer subtitle="Footer"></Footer>
      </ButtonContextProvider>
    </div>
  );
};

export default App;
