import React from "react";

const Kubideh = ({ onBack }) => {
 
const text1 = "1. Die Zutaten (für ca. 4 Personen): ";
const text2 = "Fleisch: 1 kg Hackfleisch...";
const text3 = "Zwiebeln: 2 mittelgroße Zwiebeln";
const text4 = "Gewürze: 2 TL Salz, 1 TL schwarzer Pfeffer, 1 TL Sumach und optional 1 TL Natron (macht das Fleisch zarter)."
const text5 = "Beilagen: Safranreis, gegrillte Tomaten, Sumach und Fladenbrot.";

const text6 = "2. Zubereitung: ";
const text7 = "2.1  Zwiebeln ausdrücken: Die geriebenen Zwiebeln in ein sauberes Küchentuch geben und den Saft vollständig auspressen. Nur das trockene Zwiebelmark wird verwendet, da der Saft das Fleisch vom Spieß rutschen lässt.";
const text8 = "2.2  Fleisch vorbereiten: Das Hackfleisch in eine große Schüssel geben. Das ausgedrückte Zwiebelmark, Salz, Pfeffer, Sumach und optional Natron hinzufügen. Alles gründlich mit den Händen vermengen, bis eine homogene Masse entsteht. Es ist wichtig, das Fleisch gut zu kneten, damit es später gut am Spieß haftet.";    
const text9 = "2.3  Fleisch formen: Die Fleischmasse in 8 gleich große Portionen teilen. Jede Portion zu einer langen, flachen Wurst formen, die etwa so lang ist wie der Spieß. Das Fleisch sollte fest um den Spieß geformt werden, damit es beim Grillen nicht herunterfällt.";

return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white">
      <div className="max-w-2xl p-6 bg-gray-800 rounded shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Wie bereit man dieses Rezept zu</h1>
        <img src="https://images.food52.com/D3q5ulx90sJmXkHVjA2w3sv_43s=/c079ec58-30ac-447b-8c88-dc90e9cbbf81--henrytadevosian_koobid_recipe_large_l_891275.jpg?w=2048&q=75" alt="Rezept" className="mx-auto mb-6" />
        
        <h2 className="text-gray-300 mb-6"> {text1} </h2>
        <p className="text-gray-300 mb-4">
             <ul>
                <li>{text2}</li>
                <li>{text3}</li>
                <li>{text4}</li>
                <li>{text5}</li>
            </ul>
        </p>

        <h3 className="text-gray-300 mb-6"> {text6} </h3>
        <p className="text-gray-300 mb-4">
            <ul>
                <li>{text7}</li>
                <li>{text8}</li>
                <li>{text9}</li>
            </ul>
        </p>



        <button onClick={onBack}
          className="bg-white text-black px-4 py-2 rounded font-medium">
          Zurück zur Übersicht
        </button>
      </div>
    </div>
  );
};

export default Kubideh;
