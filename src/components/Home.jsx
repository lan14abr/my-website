import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="background">
      <div className="homepage">
        <h1>Välkommen till min hemsida!</h1>
        <p>
          Jag heter Alexander Brynolf och jag är en passionerad programmerare
          med erfarenhet inom bland annat Java, JavaScript, TypeScript, React
          och SQL. Jag älskar att lösa problem och skapa funktionella,
          användarvänliga applikationer. Genom att kombinera min tekniska
          kompetens med ett öga för detaljer, strävar jag efter att leverera
          högkvalitativa lösningar som möter både användarnas och verksamheters
          behov.
        </p>
        <p>
          På den här sidan hittar du några projekt som är utformade för att visa
          en del av mina förmågor att utveckla och implementera moderna
          webbapplikationer. Tveka inte att kontakta mig om du vill veta mer
          eller om du letar efter någon som kan bidra till ditt team.
        </p>
        <p>Med vänlig hälsning</p>
      </div>
    </div>
  );
};

export default Home;
