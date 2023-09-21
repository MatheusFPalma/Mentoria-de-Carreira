import React, { useState, useEffect } from "react";
import About from "./components/About/About";
import Card from "./components/Cards/Cards";
import navigation from "./config/navigation";

function App() {
  const [selectedPersonagem, setSelectedPersonagem] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [bodyBackground, setBodyBackground] = useState("");

  useEffect(() => {
    if (showAbout) {
      console.log("About foi exibido!");
    }
  }, [showAbout]);

  const handleCardClick = (personagem: React.SetStateAction<string>, backgroundColor: React.SetStateAction<string>) => {
    setSelectedPersonagem(personagem);
    setShowAbout(true);
    setBodyBackground(backgroundColor);
  };

  return (
    <div
      style={{
        backgroundColor: bodyBackground,
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", // Alinhar todo o conteúdo à esquerda
        height: "100vh",
        maxWidth: "100%", // Definir largura máxima
        overflowX: "hidden", // Evitar barras de rolagem horizontais
      }}
    >
      {showAbout ? (
        <>
          <div>
            {navigation.map((item) => {
              return (
                <Card
                  key={item.key}
                  titulo={item.nome}
                  image={item.imagemCard}
                  background={item.tema}
                  onClick={() => handleCardClick(item.personagem, item.tema)}
                />
              );
            })}
          </div>
          <About personagem={selectedPersonagem} />
        </>
      ) : (
        <div>
          {navigation.map((item) => {
            return (
              <Card
                key={item.key}
                titulo={item.nome}
                image={item.imagemCard}
                background={item.tema}
                onClick={() => handleCardClick(item.personagem, item.tema)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
