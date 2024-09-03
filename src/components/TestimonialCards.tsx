"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards.tsx";

export function TestimonialCards(): React.ReactNode {
  return (
    <div className="xs:h-50 md:h-full rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials: {
  quote: string;
  name: string;
  title: string;
}[] = [
  {
    quote:
      "Body Works has completely transformed my workout routine. The detailed exercise descriptions and multimedia content have helped me perfect my form, and the advanced filtering system makes it so easy to find the exact exercises I need. I’m seeing results faster than ever!",
    name: "John D.",
    title: "Fitness Enthusiast",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Emily R.",
    title: "Beginner",
  },
  {
    quote:
      "As someone new to fitness, I was overwhelmed by the amount of information out there. Body Works made it simple to start with beginner routines and gradually build up my strength. The personalized dashboard keeps me motivated, and I love tracking my progress over time!",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Body Works is an invaluable tool for both me and my clients. The extensive exercise database and structured routines save me hours of planning, and the app’s user-friendly interface makes it easy for my clients to follow along with their workouts. Highly recommend!",
    name: "Michael S.",
    title: "Personal trainer",
  },
  {
    quote:
      "I’ve been training for years, and Body Works is by far the best fitness app I’ve used. The variety of exercises and routines keeps my workouts fresh, and the ability to customize my training plan has taken my performance to the next level. This app is a game-changer!",
    name: "Sarah L.",
    title: "Advanced Athlete",
  },
  {
    quote:
      "With a hectic work schedule, I needed a fitness app that could provide quick, effective workouts. Body Works delivers just that. The personalized routines fit perfectly into my day, and the progress tracking keeps me on top of my fitness goals. I couldn’t be happier!",
    name: "David P.",
    title: "Busy Professional",
  },
];
