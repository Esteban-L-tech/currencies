import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import React from "react";
let VerticalBanner = './asset/image/bande_img.jpg'

function Connexion() {
  return (
    <>
      <br /> <br /> <br />
      <h1>Se connecter</h1>
      <br /> <br />
      <h2>Vous tenter d’accéder à un contenu qui nécessite d’être connecté</h2>
      <br /> <br /> <br />

      <div className="container">
        <div className="connection">
          <div className="row">
            <div className="col-6">
              <input className="text" type="text" />
              <br /><br />
              <input type="password" />
              <br /><br />
              <button>login</button>
              <div className="register">
                <p>Si vous n’avez pas encore de compte, cliquez sur le bouton ci-dessous, c’est gratuit.</p>
                <button>register</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Connexion;