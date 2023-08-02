
import React from 'react';

interface CarouselProps {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ leftComponent, rightComponent }) => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-[15px] items-center justify-between'>
      {leftComponent}
      {rightComponent}
    </div>
  );
};

export default Carousel;
