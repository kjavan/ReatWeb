import React, { useState } from "react";
import image from "/src/pics/MyPic.jpeg";
import pdf from "/src/pdfs/Gestaltung.pdf";

const AboutMe = ({ onBack }) => {

/* um ein kleinen Fenster zu öffnen machen wir ein State. dieses State ändert die Status der Seite. Am anfang ist es false weil pdf noch nicht geöffnet wurde
setshowpdf ist der Funktion
showPdf → speichert den Zustand
setShowPdf → ändert den Zustand  
wenn man den Button drückt, dann wird die setShowpdf auf true gesetzt und öffnet das PDF und showpdf wird auch true weil er der Zustand speichert*/
const [showPdf, setShowPdf] = useState(false);

const titel = "Mein Name ist Khashayar Javan ";
const text1 = "Ich bin 26 Jahre alt und komme ursprünglich aus dem Iran. Seit 2014 lebe ich in Deutschland, genauer gesagt in Hamburg.";
const text2 = "Vor kurzem habe ich mein Bachelor an der HAW Hamburg im Studiengang Media Systems (Medieninformatik) abgeschlossen.";
const text3 = "Während meines Studiums habe ich mich mit Webentwicklung und Spieleentwicklung beschäftigt.";
const text4 = "Außerhalb des Studiums möchte ich React Native lernen, darum habe ich diese Webseite mit React programmiert.";
const text5 = "Ich habe während meiner Studienzeit an verschiedenen Projekten gearbeitet, darunter die Entwicklung von Webanwendungen und Spielen.";

const gestTitel = "Darstellung des Bildes der Gestaltung";
const gest1 = "Im ersten Semester meines Studiums der Medieninformatik entstand dieses Portfolio im Modul Gestaltung 1.";
const gest2 = "Der Einstieg in das Portfolio beginnt mit den Gestaltgesetzen der Wahrnehmung.";
const gest3 = "Darauf aufbauend beschäftigte ich mich mit verschiedenen Kontrasten.";
const gest4 = "Ein weiterer Schwerpunkt lag auf Perspektive und Raumdarstellung.";

return (
<>
    
<div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white">
  <div className="max-w-2xl p-6 bg-gray-800 rounded shadow-lg">

    <h1 className="text-2xl font-semibold mb-4">Persönliche Informationen</h1>

    <img src={image} alt="Profilbild" className="mx-auto mb-6 rounded"/>

    <h2 className="text-gray-300 mb-6">{titel}</h2>

    <ul className="text-gray-300 mb-4 list-disc pl-6">
      <li>{text1}</li>
      <li>{text2}</li>
      <li>{text3}</li>
      <li>{text4}</li>
      <li>{text5}</li>
    </ul>

    <button
      onClick={onBack}
      className="bg-white text-black px-4 py-2 rounded font-medium"
    >
      Zurück zur Übersicht
    </button>

  </div>
</div>


<div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white">
  <div className="max-w-2xl p-6 bg-gray-800 rounded shadow-lg">

    <h1 className="text-2xl font-semibold mb-4">Gestaltung</h1>

    <img src={image} alt="Gestaltung" className="mx-auto mb-6 rounded"/>

    <h2 className="text-gray-300 mb-6">{gestTitel}</h2>

    <ul className="text-gray-300 mb-4 list-disc pl-6">
      <li>{gest1}</li>

      <button
        onClick={() => setShowPdf(true)}
        className="bg-white text-black px-4 py-2 rounded my-4"
      >
        PDF anschauen
      </button>

      <li>{gest2}</li>
      <li>{gest3}</li>
      <li>{gest4}</li>
    </ul>

  </div>
</div>


{/* wenn PDF true ist dann exisirtiert ein Button um das zu schließen */}
{showPdf && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">

    <div className="bg-white p-4 rounded shadow-lg w-[80%] h-[80%] flex flex-col">

      <div className="flex justify-end mb-2">
        <button
          onClick={() => setShowPdf(false)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Schließen
        </button>
      </div>

      <iframe
        src={pdf}
        className="w-full h-full rounded"
        title="PDF Viewer"
      />

    </div>

  </div>
)}

</>
);
};

export default AboutMe;