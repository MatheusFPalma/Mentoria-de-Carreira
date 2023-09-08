import React, { useEffect } from "react";
import { person } from "../../data/Person";
import DefaultTheme from "../../config/theme/DefaultTheme";
import { ThemeProvider } from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface AboutProps {
  personagem: string;
}

const About: React.FC<AboutProps> = ({ personagem }) => {
  const personagemSelecionado = person.find(
    (person) => person.nome === personagem
  );

  return (
    <>
      {personagemSelecionado && (
        <div style={{ display: "flex", margin: "4rem" }}>
          <div style={{ flex: 1 }}>
            <h1>{personagemSelecionado.nome}</h1>
            <p>{personagemSelecionado.descricao}</p>
            <p>{personagemSelecionado.softSkills}</p>

            <div>
              <a
                href={personagemSelecionado.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedin size={30} /> LinkedIn
              </a>
              <br />
              <a
                href={personagemSelecionado.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaGithub size={30} /> GitHub
              </a>
            </div>
          </div>
          <div style={{ flex: 1, textAlign: "right" }}>
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={personagemSelecionado.img}
              alt={personagemSelecionado.nome}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
