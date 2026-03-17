import React, { useState } from "react";
import image from "/src/pics/MyPic.jpeg";
import image2 from "/src/pics/Gestaltung.png";
import image3 from "/src/pics/BaPic.png";
import image4 from "/src/pics/BWL.png";
import pdf from "/src/pdfs/Gestaltung.pdf";
import pdf2 from "/src/pdfs/BA.pdf";
import pdf3 from "/src/pdfs/BWL.pdf";


const AboutMe = ({ onBack }) => {

/* um ein kleinen Fenster zu öffnen machen wir ein State. dieses State ändert die Status der Seite. Am anfang ist es false weil pdf noch nicht geöffnet wurde
setshowpdf ist der Funktion
showPdf → speichert den Zustand
setShowPdf → ändert den Zustand  
wenn man den Button drückt, dann wird die setShowpdf auf true gesetzt und öffnet das PDF und showpdf wird auch true weil er der Zustand speichert*/
const [selectedPdf, setSelectedPdf] = useState(null);

const titel = "Mein Name ist Khashayar Javan ";
const text1 = "Ich bin 26 Jahre alt und komme ursprünglich aus dem Iran. Seit 2014 lebe ich in Deutschland, genauer gesagt in Hamburg.";
const text2 = "Vor kurzem habe ich mein Bachelor an der HAW Hamburg im Studiengang Media Systems (Medieninformatik) abgeschlossen.";
const text3 = "Während meines Studiums habe ich mich mit Webentwicklung und Spieleentwicklung beschäftigt.";
const text4 = "Außerhalb des Studiums möchte ich React Native lernen, darum habe ich diese Webseite mit React programmiert.";
const text5 = "Ich habe während meiner Studienzeit an verschiedenen Projekten gearbeitet, darunter die Entwicklung von Webanwendungen und Spielen.";

const gestTitel = "Darstellung des Bildes der Gestaltung";
const gest1 = [
  "Im ersten Semester meines Studiums der Medieninformatik entstand dieses Portfolio im Modul Gestaltung 1. Der Einstieg in das Portfolio beginnt mit den Gestaltgesetzen der Wahrnehmung, wie dem Prinzip der Prägnanz, der Ähnlichkeit oder der gemeinsamen Region. Mithilfe einfacher geometrischer Formen habe ich untersucht, wie Menschen visuelle Elemente automatisch gruppieren und interpretieren. Diese Übungen haben mir gezeigt, wie stark unsere Wahrnehmung durch visuelle Strukturen beeinflusst wird.",

  "Darauf aufbauend beschäftigte ich mich mit verschiedenen Kontrasten, beispielsweise Form-, Bewegungs-, Richtungs- oder Intensitätskontrasten. Durch unterschiedliche Größen, Positionen und Formen entstand ein Gefühl von Spannung und Dynamik innerhalb der Gestaltung. Ziel dieser Aufgaben war es, ein besseres Verständnis dafür zu entwickeln, wie visuelle Gegensätze Aufmerksamkeit erzeugen und Kompositionen interessanter machen.",

  "Ein weiterer Schwerpunkt lag auf Perspektive und Raumdarstellung. Hier habe ich verschiedene Perspektivarten wie Isometrie, Zentralperspektive, Zwei- und Drei-Punkt-Perspektive untersucht. Durch diese Übungen lernte ich, wie dreidimensionale Räume auf einer zweidimensionalen Fläche dargestellt werden können und welche Wirkung unterschiedliche Perspektiven auf die Wahrnehmung eines Objekts haben.",

  "Im Bereich Typografie und Buchstabenplakate experimentierte ich mit der Gestaltung von Formen aus Buchstaben. Aus einzelnen Buchstaben entstanden Objekte und visuelle Motive, wodurch ich ein besseres Verständnis für die Verbindung zwischen Schrift und Bild entwickelte.",

  "Ein weiteres Kapitel widmete sich den Farbenkontrasten. Hier untersuchte ich verschiedene Farbwirkungen, wie Kalt-Warm-Kontraste, Hell-Dunkel-Kontraste oder Komplementärkontraste. Die Gestaltung zeigte, wie Farben Emotionen erzeugen, Hierarchien schaffen und die Wahrnehmung eines Designs stark beeinflussen können.",

  "Besonders spannend war die Aufgabe, Songs visuell zu interpretieren. Dabei habe ich Musikstücke von Künstlern wie The Weeknd, Post Malone oder Michael Jackson grafisch umgesetzt. Ziel war es, die Stimmung und Bedeutung der Songs mithilfe von Farben, Formen und Typografie visuell darzustellen.",

] ;


const baTitel = "Darstellung des Bildes der Bachelorarbeit";
const ba1 = [
  "Virtual Reality findet zunehmend Anwendung in unterschiedlichen gesellschaftlichen und wirtschaftlichen Bereichen. Durch das hohe Maß an Immersion kann die Technologie Wahrnehmungsprozesse gezielt beeinflussen. Insbesondere die subjektive Zeitwahrnehmung kann sich innerhalb virtueller Umgebungen vom objektiven Zeitverlauf unterscheiden. Während zahlreiche Studien Faktoren wie Immersion, Interaktion oder Embodiment untersucht haben, wurde der Einfluss situativer Rahmenbedingungen, insbesondere der Tageszeit, bislang kaum berücksichtigt.", 
  "Vor diesem Hintergrund wurde in der vorliegenden Bachelorarbeit die Forschungsfrage untersucht, welchen Einfluss die Tageszeit auf die Genauigkeit der subjektiven Zeiteinschätzung innerhalb einer Virtual-Reality-Umgebung hat. Hierzu wurde ein experimentelles Studiendesign mit 18 Teilnehmenden durchgeführt, die zu zwei unterschiedlichen Tageszeiten jeweils ein VR-Spiel absolvierten und im Anschluss die Dauer der Aufgabe eingeschätzten.",
  "Die Ergebnisse zeigen nur geringe Unterschiede in der mittleren Abweichung zwischen geschätzter und tatsächlich gemessener Zeit. Ein deutliche Veränderung der Genauigkeit der Zeiteinschätzung zwischen den beiden Tageszeiten konnte nicht festgestellt werden. Trotz leichter Unterschiede im zweiten Durchgang ließ sich kein klarer Einfluss der Tageszeit nachweisen.",
]


const BWLTitel = "Darstellung des Bildes der BWL";
const BWL1 = [
  "Im Rahmen meines Studiums der Medieninformatik habe ich auch betriebswirtschaftliche Kenntnisse erworben, die für die Entwicklung und Vermarktung von Medienprodukten von großer Bedeutung sind. In diesem Abschnitt möchte ich meine Erfahrungen und Erkenntnisse im Bereich Betriebswirtschaftslehre (BWL) teilen.", 
  "Während meines Studiums habe ich das Module BWL belegt, die darunter um die Marketing, Projektmanagement, Unternehmensführung ging. Diese Kurse haben mir ein grundlegendes Verständnis für betriebswirtschaftliche Konzepte vermittelt und mir geholfen, die wirtschaftlichen Aspekte von Medienprojekten besser zu verstehen.",
  "Ein wichtiger Aspekt der BWL ist das Thema \"Datensicherung aber wie?\"",
  "Dazu habe ich eine 20 Minütige Präsentation erstellt, die die verschiedenen Arten der Datensicherung erläutert, darunter Vollsicherung, inkrementelle Sicherung und differentielle Sicherung. In meiner Präsentation habe ich die Vor- und Nachteile jeder Methode diskutiert und Beispiele für deren Anwendung gegeben.",
]





return (
<>
{/* hier wird die Seite Persönliche infos,*/}    
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




{/* hier wird die Seite BA,*/} 
<div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white">
  <div className="max-w-2xl p-6 bg-gray-800 rounded shadow-lg">

    <h1 className="text-2xl font-semibold mb-4">Bachelorarbeit</h1>

    <img src={image3} alt="Gestaltung" className="mx-auto mb-6 rounded"/>

    <h2 className="text-gray-300 mb-6">{baTitel}</h2>

      {ba1.map((text, index) => (
        <p key={index} className="mb-4">
         {text}
         </p>
      ))}
      
      <button
        onClick={() => setSelectedPdf(pdf2)}
        className="bg-white text-black px-4 py-2 rounded my-4"
      >
        PDF anschauen
      </button>
    
    

  </div>
</div>



{/* hier wird die Seite Gestaltung,*/} 
<div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white">
  <div className="max-w-2xl p-6 bg-gray-800 rounded shadow-lg">

    <h1 className="text-2xl font-semibold mb-4">Gestaltung</h1>

    <img src={image2} alt="Gestaltung" className="mx-auto mb-6 rounded"/>

    <h2 className="text-gray-300 mb-6">{gestTitel}</h2>

   {gest1.map((text2, index2) => (
        <p key={index2} className="mb-4">
         {text2}
         </p>
      ))}

      <button
        onClick={() => setSelectedPdf(pdf)}
        className="bg-white text-black px-4 py-2 rounded my-4"
    >
        PDF anschauen
      </button>

    
   

  </div>
</div>



{/* hier wird die Seite BWL,*/} 
<div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white">
  <div className="max-w-2xl p-6 bg-gray-800 rounded shadow-lg">

    <h1 className="text-2xl font-semibold mb-4">Betriebswirtschaftslehre (BWL)</h1>

    <img src={image4} alt="Gestaltung" className="mx-auto mb-6 rounded"/>

    <h2 className="text-gray-300 mb-6">{BWLTitel}</h2>

    {BWL1.map((text, index) => (
        <p key={index} className="mb-4">
         {text}
         </p>
      ))}
      <button
        onClick={() => setSelectedPdf(pdf3)}
        className="bg-white text-black px-4 py-2 rounded my-4"
    >
        PDF anschauen
      </button>
   
  </div>
</div>


<div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white">
    <div className="max-w-2xl p-6 bg-gray-800 rounded shadow-lg">
       <h1 className="text-2xl font-semibold mb-4">Betriebswirtschaftslehre (BWL)</h1>

    <img src={image4} alt="Gestaltung" className="mx-auto mb-6 rounded"/>

    <h2 className="text-gray-300 mb-6">{BWLTitel}</h2>

    {BWL1.map((text, index) => (
        <p key={index} className="mb-4">
         {text}
         </p>
      ))}
      <button
        onClick={() => setSelectedPdf(pdf3)}
        className="bg-white text-black px-4 py-2 rounded my-4"
    >
        PDF anschauen
      </button>

    </div>
</div>



{/* wenn PDF true ist dann exisirtiert ein Button um das zu schließen */}
{selectedPdf && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">

    <div className="bg-white p-4 rounded shadow-lg w-[80%] h-[80%] flex flex-col">

      <div className="flex justify-end mb-2">
        <button
          onClick={() => setSelectedPdf(null)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Schließen
        </button>
      </div>

      <iframe
        src={selectedPdf}
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