import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import React from "react";
let VerticalBanner = './asset/image/bande_img.jpg'






function Form() {
  return (
    <>


      <h1>Se connecter</h1>
      <h2>Vous tenter d’accéder à un contenu qui nécessite d’être connecté</h2>



      <div className="contenair">
        <div className="row">
          <div className="col-6">
            <div className="test">
              <input className="text" type="text" />
              <input type="password" />
              <button>login</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Form;