import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import PhotoBlock from "./components/photo-block/PhotoBlock";
import { ButtonContextProvider } from "./context/ButtonContext";
import { NumberContextProvider } from "./context/NumberContext";

const App = (): React.ReactElement => {
  return (
    <div className="card">
      <ButtonContextProvider>
        <NumberContextProvider>
          <Header subtitle="Witcher Info"></Header>
          <Body subtitle="Witcher Signs">
            <PhotoBlock></PhotoBlock>
          </Body>
          <Footer subtitle="Footer"></Footer>
        </NumberContextProvider>
      </ButtonContextProvider>
    </div>
  );
};

export default App;
