import React from 'react'
import "./footer.css"
import { Container,Row,Col } from 'react-bootstrap'
import { FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <footer className="text-footer py-2 mt-5">
      <Container>
        <Row className="text-center">
          <Col>
            <p>Sígueme en:</p>
            <a href="https://www.instagram.com/camiii_juarez" rel="noopener noreferrer" className="text-footer mx-2">
              <FaInstagram size={30} />
            </a>
            <a href="https://github.com/CamilaJuarez99" target="_blank" rel="noopener noreferrer" className="text-footer mx-2">
              <FaGithub size={30} />
            </a>
            <p className="mt-2">&copy; {new Date().getFullYear()} Camila Juarez</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
