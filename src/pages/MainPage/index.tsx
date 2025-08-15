import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/ui/Carousel/carousel";
import { About } from "@/widgets/About";
import { Hero } from "@/widgets/Hero";
import { Skills } from "@/widgets/Skills";



export const MainPage: React.FC = () => {

 
  return (
    // <div className="flex flex-col gap-8">
    <Carousel orientation="vertical">
      <CarouselContent className="-mt-1 h-[100vh]">
        <CarouselItem>
          <Hero />
        </CarouselItem>
        <CarouselItem>
          <About />
        </CarouselItem>
        <CarouselItem>
          <Skills />
        </CarouselItem>
      </CarouselContent>
    </Carousel>

  
    /* </div> */
  );
};
