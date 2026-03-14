import React, { useState } from "react";
import Kubideh from "./Kubideh";
import Bandari from "./Bandari";
import AboutMe from "./AboutMe";




const App = () => {
  const [page, setPage] = useState("home");

  const more = "Mehr über dieses Rezept";

   
  const meal = {
    title: "Rezept für Kabab Koobideh",
    description: "Kubideh (persisch: کباب کوبیده, Kabab-e Kubideh) ist ein traditionelles persisches Gericht aus gewürztem Hackfleisch (meist Lamm, Rind oder eine Mischung), das auf lange, flache Metallspieße gesteckt und über Holzkohle gegrillt wird. Es ist saftig, rauchig im Geschmack und zählt zu den beliebtesten Gerichten des Irans, oft serviert mit Safranreis, Grilltomaten, Sumach und Fladenbrot.",
    image:
      "https://nutriscan.app/calories-nutrition/images/koobideh-380e6.webp?format=auto&q=85&w=1200",

       title2: "Rezept für Bandari",
    description2: "Ein Bandari-Sandwich (persisch: Sosis Bandari) ist ein sehr beliebtes, würzig-scharfes iranisches Fast-Food-Gericht, das seinen Ursprung im Süden des Iran hat. Es handelt sich um ein Sandwich aus Baguette-Brot, gefüllt mit angebratenen Würstchen, karamellisierten Zwiebeln, Tomatenmark und einer kräftigen Mischung aus Gewürzen wie Chili, Curry und Kurkuma.",
    image2:
      "https://www.sandwichtribunal.com/wp-content/uploads/2022/07/IMG_9817.jpg",


       title3: "Rezept für Djudje Kabab",
    description3: "Djudje Kabab (oder Joojeh Kabab) ist ein beliebtes persisches Gericht, bestehend aus zarten Hähnchenstücken, die in einer aromatischen Mischung aus Safran, Zitronen-/Limettensaft, Olivenöl, Zwiebeln und oft Joghurt mariniert und gegrillt werden. Es gilt als persischer Klassiker, der oft mit Safranreis, Grilltomaten und Brot serviert wird.",
    image3:
      "https://static.wixstatic.com/media/176e3e_1b54885eafd14d979db46193f082aaaf~mv2.jpg/v1/fill/w_925,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/176e3e_1b54885eafd14d979db46193f082aaaf~mv2.jpg",
  };

  if (page === "Kubideh") {
    return <Kubideh onBack={() => setPage("home")} />;
  }

   if (page === "Bandari") {
    return <Bandari onBack={() => setPage("home")} />;
  }

   if (page === "AboutMe") {
    return <AboutMe onBack={() => setPage("home")} />;
  }

 
  return (
   <>
      
     <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <button onClick={() => setPage("App")} className='bg-white text-black text-base px-4 py-2 rounded'>Home</button>
        <button onClick={() => setPage("Kubideh")} className='bg-white text-black text-base px-4 py-2 rounded'>Kubideh</button>
        <button onClick={() => setPage("Bandari")} className='bg-white text-black text-base px-4 py-2 rounded'>Bandari</button>
        <button onClick={() => setPage("AboutMe")} className='bg-white text-black text-base px-4 py-2 rounded'>About Me</button>
      </nav>
    
      {page === "Kubideh" && <Kubideh />}
      {page === "Bandari" && <Bandari />}
      {page === "AboutMe" && <AboutMe />}
   
   <div className="min-h-screen flex items-center justify-center p-4">


      <div className=" bg-gray-800 text-white ">
        <img className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          src={meal.image}
          alt={meal.title}
        />
        <div className="px-6 py-4">
          <h2 className="text-gray-700 text-base font-semibold mb-2">{meal.title}</h2>
          <p className='text-gray-300 text-base'>{meal.description}</p>
          <button
            onClick={() => setPage("Kubideh")}
            className='bg-white text-black text-base px-4 py-2 rounded'
          >
            {more}
          </button>
        </div>
      </div>


       <div className=" bg-gray-800 text-white ">
        <img className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          src={meal.image2}
          alt={meal.title2}
        />
        <div className="px-6 py-4">
          <h2 className="text-gray-700 text-base font-semibold mb-2">{meal.title2}</h2>
          <p className='text-gray-300 text-base'>{meal.description2}</p>
          <button
            onClick={() => setPage("Bandari")}
            className='bg-white text-black text-base px-4 py-2 rounded'
          >
            {more}
          </button>
        </div>
        </div>

         
         
      <div className=" bg-gray-800 text-white ">
        <img className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          src={meal.image3}
          alt={meal.title3}
        />
        <div className="px-6 py-4">
          <h2 className="text-gray-700 text-base font-semibold mb-2">{meal.title3}</h2>
          <p className='text-gray-300 text-base'>{meal.description3}</p>
          <button className='bg-white text-black text-base px-4 py-2 rounded'>{more}</button>
        </div>
      </div>
          

  
  </div>
 
 </>
  );
};


export default App
