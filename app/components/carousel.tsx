'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const ImageCarousel = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
    },
  });

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <div ref={sliderRef} className="keen-slider w-full h-full">
        <div className="keen-slider__slide flex justify-center items-center">
          <Image
            src="/img3.png"
            alt="Slide"
            width={800}
            height={700}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold animate-pulse drop-shadow-lg">TUTTI BOCADO</h1>
        <p className="text-xl md:text-2xl mt-2 animate-bounce drop-shadow">PASTELERIA</p>

        <div className="mt-8 animate-bounce text-white">
          <ChevronDown size={40} />
        </div>
      </div>

      <div className="absolute inset-0 bg-black/30 z-[5]" />
    </div>
  );
};

export default ImageCarousel;
