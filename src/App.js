import React from "react";
import "./App.css";
import "./helper.css";
import Menu from "./Menu";
import Star from "./Star";
import download from "./download.svg";

function App() {
  return (
    <div className="App">
      <div className="site-container">
        <a href="http://www.grabbarna.org">
          <header className="flex-column align-center">
            <h1 className="header-h1">Grabbarna</h1>
            <h2 className="header-h2">
              PIZZA <Star colour="#219146" /> DELI <Star colour="#CE2C37" />{" "}
              PASTA
            </h2>
            <p className="header-link">www.grabbarna.org</p>
          </header>
        </a>
        <div className="info flex-column align-center">
          <a href="tel:08-236310">Telefon: 08-23 63 10</a>
          <p>Öppet: Mån-fre 10–21 - Lör-sön 11–21</p>
          <p>
            Adress:
            <a href="https://goo.gl/maps/r3TS4XaE9sS23srr9">
              &nbsp;Korpralsvägen 53, 177 43 Järfälla
            </a>
          </p>
          <a href="https://www.facebook.com/Pizza.Deli.Pasta/">
            Besök oss @facebook
          </a>
          <a href="http://grabbarna.org/meny.pdf">
            Ladda vår pdf meny <img src={download} alt="Ladda ner pdf meny" />
          </a>
        </div>
        <div className="info-box-container flex justify-center justify-between">
          <div className="info-box flex-row align-center">
            <p>
              <span className="bold">
                Samtliga pasta rätter kan tillagas med laktosfri grädde och
                glutenfritt
              </span>
            </p>
          </div>

          <div className="info-box flex-row align-center">
            <p>
              <span className="bold">10 kr rabatt på alla barnpizzor</span>
            </p>
          </div>
        </div>
        <Menu />
        <div className="info-footer">
          <a href="tel:08-236310">Tel: 08-23 63 10</a>
          <p>Öppet: Mån-fre 10–21 - Lör-sön 11–21</p>
          <p>
            Adr:
            <a href="https://goo.gl/maps/r3TS4XaE9sS23srr9">
              &nbsp;Korpralsvägen 53, 177 43 Järfälla
            </a>
          </p>
          <a href="https://www.facebook.com/Pizza.Deli.Pasta/">
            Besök @facebook
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
