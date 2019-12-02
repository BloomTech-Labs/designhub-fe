import React, {useState, useEffect} from 'react';
import {Gallery, GalleryImage} from 'react-gesture-gallery';

import '../SASS/TestimonialCarousel.scss';


const testimonials =[
  "https://images.unsplash.com/photo-1567877163288-afa41ad24d8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" ,

  "https://images.unsplash.com/photo-1575015642299-5b92fcbd0ba4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,

  "https://images.unsplash.com/photo-1575126473812-9331d9d93530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" ,

  "https://images.unsplash.com/photo-1572270907014-c31da1c54124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() =>{
    const timer = setInterval(() =>{
      if (index === 3) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return(
    <div className="carousel-container">
      <Gallery
        enableIndicators={true}
        enableControls={true}
        index={index}
        onRequestChange={i =>{
          setIndex(i);
        }}
        >
          {testimonials.map(testimonial =>(
            <GalleryImage objectFit="contain" key={testimonial} src={testimonial} />
          ))}
        </Gallery>
      </div>
  )
}

export default TestimonialCarousel;
