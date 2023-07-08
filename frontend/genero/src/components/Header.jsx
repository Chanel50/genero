import React from 'react';
import "../styles/Header.css";

export const Header = () => {
  return (
    <div className="content">
      <div className="containerh">
        <div className="info">
          <h2 className="aptitle">AVEC GENERO</h2>
          <h2>Récupérer des objets avec rapidité et simplicité et surtout sans rien payer</h2>
          <div className="containerbut">
          <a className="button" href='/Register'>Commencer</a>

          </div>

        </div>
       
      </div>
    </div>
  );
}


