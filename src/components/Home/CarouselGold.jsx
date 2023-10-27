import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselGold() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={`https://goldnutrition.com.ar/cache/e7eac55cdb/images/slider_home/slider_new_ripped_gold_nutrition_fondo-36bbd258b7_1920x700.jpg`} className="img-fluid" alt='...'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={`https://goldnutrition.com.ar/cache/e7eac55cdb/images/slider_home/slider-pre-work-fondo-36bbd258b7_1920x700.jpg`} className="img-fluid" alt='...'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={`https://goldnutrition.com.ar/cache/e7eac55cdb/images/slider_home/slider-amino-essential-gold-nutrition-prime-supplements-fondo-36bbd258b7_1920x700.jpg`} className="img-fluid" alt='...'></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselGold;