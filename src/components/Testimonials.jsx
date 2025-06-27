import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Assuming shadcn/ui carousel is available
import { Card, CardContent } from "@/components/ui/card"; // For styling individual testimonials

// Placeholder data - Replace with actual image paths
const testimonialsData = [
  {
    id: 1,
    name: "Kwesi K.",
    title: "University Student, UMAT",
    quote: "Peter’s words gave me the courage to believe in myself. I left that session feeling unstoppable.",
    imageUrl: "/avatars/avatar2.jpg", // Placeholder path - Put actual images in /public/avatars/
  },
  {
    id: 2,
    name: "Ama Boatemaa.",
    title: " Youth Program Coordinator",
    quote: "Peter connects with young people like no one else. His energy and message stay with you long after he’s gone.",
    imageUrl: "/avatars/avatar3.jpg", // Placeholder path
  },

  {
    id: 2,
    name: "Linda Osei",
    title: "Senior Lecturer, KNUST",
    quote: "Peter Bawuah brings both passion and purpose to every talk. Our students were deeply moved and motivated.",
    imageUrl: "/avatars/avatar 1.jpg", // Placeholder path
  },

  
  // Add more testimonials if needed
];

const Testimonials = () => {
  return (
    <section id="testimonial" className="py-16 md:py-24 bg-white dark:bg-[#0d0d0d]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-amber-400 dark:text-amber-400 font-semibold mb-2">What People Think About Me?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">Testimonials</h2>

        <Carousel 
          opts={{ align: "start", loop: true }} 
          className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2 md:p-4">
                <Card className="h-full flex flex-col bg-gray-50 dark:bg-amber-700 border-gray-200  shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center flex-grow">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full mb-4 border-2 border-amber-400  object-cover"
                      onError={(e) => { e.target.src = '/placeholder-avatar.png'; /* Fallback avatar */ }}
                    />
                    <p className="text-gray-600 dark:text-gray-300 italic mb-4 text-sm md:text-base flex-grow">
                      “{testimonial.quote}”
                    </p>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex absolute left-[-50px] top-1/2 -translate-y-1/2" />
          <CarouselNext className="hidden sm:flex absolute right-[-50px] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;

