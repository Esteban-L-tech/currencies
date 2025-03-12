import InputGroup from 'react-bootstrap/InputGroup';
import NewCarousel from '../compos/carousel1';
import { Row } from 'react-bootstrap';
import React from "react";
let VerticalBanner = './asset/image/bande_img.jpg'

function News() {
  const carouselItems1 = [
    { text: 'Image 1', image: '/assets/images/img1.jpg' },
    { title: 'Image 2', image: '/assets/images/img1.jpg' },
    { title: 'Image 3', image: '/assets/images/img1.jpg' },
    { title: 'Image 4', image: '/assets/images/img1.jpg' },
    { title: 'Image 5', image: '/assets/images/img1.jpg' },
  ];

  const carouselItems2 = [
    { title: 'Image 1', image: '/assets/images/img1.jpg' },
    { title: 'Image 2', image: '/assets/images/img1.jpg' },
    { title: 'Image 3', image: '/assets/images/img1.jpg' },
    { title: 'Image 4', image: '/assets/images/img1.jpg' },
    { title: 'Image 5', image: '/assets/images/img1.jpg' },
  ];

  const carouselItems3 = [
    { title: 'Image 1', image: '/assets/images/img1.jpg' },
    { title: 'Image 2', image: '/assets/images/img1.jpg' },
    { title: 'Image 3', image: '/assets/images/img1.jpg' },
    { title: 'Image 4', image: '/assets/images/img1.jpg' },
    { title: 'Image 5', image: '/assets/images/img1.jpg' },
  ];
  return (
    <>

      <div className='test'>
        <p>Actualités</p>
        <p>Dernière news</p>
      </div>

      <NewCarousel items={carouselItems1} />
      <div className="container mx-auto text-center">
        <div className="row">
          <section id="aboutUs">
          </section>
        </div>
      </div>

      <div className='test'>
        <p>Développement informatique</p>
      </div>

      <NewCarousel items={carouselItems2} />
      <div className="container mx-auto text-center">
        <div className="row">
          <section id="aboutUs">
          </section>
        </div>
      </div>

      <div className='test'>
        <p>Technologies</p>
      </div>

      <NewCarousel items={carouselItems3} />
      <div className="container mx-auto text-center">
        <div className="row">
          <section id="aboutUs">
          </section>
        </div>
      </div>
    </>
  )
}

export default News;