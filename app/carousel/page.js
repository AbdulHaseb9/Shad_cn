import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import React from "react";

export default function Carouselcomponent() {
  return (
    <div className="h-screen w-full">
      {/* Component Name */}
      <h1 className="text-xl text-center py-4">Carousel</h1>
      {/* Component */}
      <div className="w-full px-12 flex justify-center py-12">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <Image
                src="/imageone.jpg"
                width={460}
                height={500}
                alt="Image 1"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src="/imagetwo.jpg"
                width={500}
                height={500}
                alt="Image 1"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src="/imagethree.jpg"
                width={500}
                height={500}
                alt="Image 1"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src="/imageone.jpg"
                width={460}
                height={500}
                alt="Image 1"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src="/imagetwo.jpg"
                width={500}
                height={500}
                alt="Image 1"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src="/imagethree.jpg"
                width={500}
                height={500}
                alt="Image 1"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src="/imageone.jpg"
                width={460}
                height={500}
                alt="Image 1"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
