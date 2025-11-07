# Carousel Component

A carousel component built with Embla Carousel for displaying content in a scrollable, interactive manner.

## Features

- Horizontal and vertical orientation
- Loop mode
- Multiple slides per view
- Variable width slides
- Thumbnail navigation
- Keyboard navigation
- Touch/swipe support
- Accessible with ARIA attributes

## Usage

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

function CarouselDemo() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
        <CarouselItem>Slide 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
```

## Variants

### Loop Carousel

Enables infinite looping of slides.

### Slides to Scroll

Configure how many slides to scroll at once.

### Variable Widths

Allow slides to have different widths.

### Y-axis Carousel

Vertical carousel orientation.

### Slides Per View

Display multiple slides at once.

### Thumbnails Carousel

Include thumbnail navigation for the carousel.

## API Reference

Built on [Embla Carousel](https://www.embla-carousel.com/) with full access to its API and options.
