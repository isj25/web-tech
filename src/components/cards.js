import React from 'react'
import Carditems from './carditems';
import './cards.css';
import {Container,Row,Col} from 'react-bootstrap';
import './footer.css';

function cards() {
    return (
        <div className='cards' id='card'>
        <h1>Check out These EPIC Destinations</h1>
       { /* <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <Carditems src='images/img1.jpg' text='Explore the ancient beauty' label='Historic places' path='services'/>
                    <Carditems src='images/img2.jpg' text='Explore the smell of oceans' label='Water' path='services'/>
                    <Carditems src='images/img3.jpg' text='Explore the ancient beauty' label='Historic places' path='services'/>
                    <Carditems src='images/img4.jpg' text='Explore the smell of oceans' label='Water' path='services'/>
                    <Carditems src='images/img5.jpg' text='Explore the Green earth' label='Farm land' path='services'/>
                    <Carditems src='images/img6.jpg' text='Explore the ancient beauty' label='Historic places' path='services'/>
                    <Carditems src='images/img7.jpg' text='Explore Italy' label='Italy' path='services'/>
                    <Carditems src='images/img8.jpg' text='Mountain Adventures' label='Mountains' path='services'/>
                    <Carditems src='images/img9.jpg' text='Explore Italy' label='Italy' path='services'/>
                    <Carditems src='images/img10.jpg' text='City-love' label='Life' path='services'/>
                    <Carditems src='images/img11.jpg' text='Modern life' label='Good modeern' path='services'/>
                </ul>
            </div>
        </div> */}

 <Container>
  <Row>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img1.jpg' text='Explore the ancient beauty' label='Historic places' path='services'/>
   </Col>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img2.jpg' text='Explore the smell of oceans' label='Water' path='services'/>
   </Col>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img3.jpg' text='Explore the ancient beauty' label='Historic places' path='services'/>
   </Col>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img4.jpg' text='Explore the smell of oceans' label='Water' path='services'/>
   </Col>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img5.jpg' text='Explore the Green earth' label='Farm land' path='services'/>
   </Col>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img6.jpg' text='Explore the ancient beauty' label='Historic places' path='services'/>
   </Col>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img7.jpg' text='Explore Italy' label='Italy' path='services'/>
   </Col>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img8.jpg' text='Mountain Adventures' label='Mountains' path='services'/>
   </Col>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img9.jpg' text='Explore Italy' label='Italy' path='services'/>
   </Col>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img10.jpg' text='City-love' label='Life' path='services'/>
   </Col>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img11.jpg' text='Modern life' label='Good modern' path='services'/>
   </Col>
   <Col lg={4} md={6} sm={12}>
   <Carditems src='images/img6.jpg' text='Explore the ancient beauty' label='Historic places' path='services'/>
   </Col>
  </Row>
  
</Container>
            
        </div>
    )
}

export default cards;
