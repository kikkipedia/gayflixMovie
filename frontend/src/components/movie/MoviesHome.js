import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import '../../App.css';

const items = [
  {
    src: require("./images/Cheerleader2.jpg"),
    altText: "Now showing !",
    caption: "Now showing !", 
    header: "But I'm a cheerleader"
  },
  {
    src: require("./images/Godless.jpg"),
    altText: '',
    caption: 'Register today !',
    header: "Become a gayflix member"
  },
  { 
    src: require("./images/Brokeback.jpg"),
    altText: 'Brokeback Mountain',
    caption: 'Brokeback Mountain',
    header: "Coming soon !"
  },
  { 
    src: require("./images/foxfire.jpg"),
    altText: '',
    caption: 'Now Showing !',
    header: "Foxfire !"
  }
];

const MoviesHome = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.header} />
      </CarouselItem>
    );
  });

          return(
            <div class="container">
                <div id="alignPhoto">
                <div class="image-wrapper" id="image" role="image">
                <img src={require("../../logo256.png")} alt="mini logo" width="50" display="inline-block"/>
                </div>
                <div class="content-wrapper">
                <h2>welcome to gayflix - a much better cinema</h2>
                </div></div>

                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                  {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>            
            </div>
              
                );
          }
        
    

export default MoviesHome;