import React from "react";
import "./CV.css"; // Importera CSS-filen

const CV = () => {
  return (
    <div className="cv-background">
      <h1>Alexander Brynolfs CV</h1>

      <div className="cv-section personal-info">
        <h2>Personlig Information</h2>
        <div className="cv-grid">
          <p>Födelsedatum: 1995-07-30</p>
          <p>Adress: Enhögsgatan 7, 212 31 Malmö</p>
          <p>E-post: lan14abr@student.lu.se</p>
          <p>Mobil: 0704-56 98 05</p>
        </div>
      </div>

      <div className="cv-section skills">
        <h2>Kunskaper</h2>
        <div className="cv-grid">
          <p>Java</p>
          <p>Python</p>
          <p>SQL</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Node.js</p>
          <p>Bootstrap</p>
          <p>TypeScript</p>
          <p>Geografiska informationssystem</p>
          <p>Matlab</p>
        </div>
      </div>

      <div className="cv-section education">
        <h2>Utbildning</h2>
        <p>
          <strong>Universitet</strong>
        </p>
        <p>
          Studerat på Civilingenjör Lantmäteri på Lunds Tekniska Högskola och
          tagit en kandidatexamen i geografisk informationsteknik. Dessutom
          genomfört kurser på avancerad nivå inom programmering, databaser och
          GIS.
        </p>
        <p>
          <strong>Gymnasiet</strong>
        </p>
        <p>Naturvetenskapsprogrammet, ProCivitas Privata Gymnasium i Malmö.</p>
      </div>

      <div className="cv-section experience">
        <h2>Arbetslivserfarenheter</h2>
        <p>
          <strong>Postnord</strong> - Arbetat inom leverans
        </p>
        <p>
          <strong>Flyttfirma</strong> - Jobbat som flyttare för Flyttmäster
        </p>
        <p>
          <strong>Säljare</strong> - Anställd som säljare för Fru Bär AB
        </p>
        <p>
          <strong>Tennistränare</strong> - Jobbat som tennistränare på Fair Play
          TK
        </p>
      </div>

      <div className="cv-section other">
        <h2>Övrigt</h2>
        <p>
          <strong>Språk</strong>
        </p>
        <p>Svenska (modersmål), Engelska (flytande), Tyska (grundläggande)</p>
        <p>
          <strong>Fritidsintressen</strong>
        </p>
        <p>Tennis, paddel och gym.</p>
        <p>
          <strong>Övriga meriter</strong>
        </p>
        <p>
          B-körkort och god körvana, Skoglig grundkurs för Lantmäteristudenter
        </p>
        <p>
          <strong>Referenser</strong>
        </p>
        <p>Lämnas på begäran</p>
      </div>
    </div>
  );
};

export default CV;
