import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselControls,
  CarouselAutoplay,
} from "./carousel";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const meta = {
  title: "UI/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    opts: {
      control: "object",
      description: "Advanced carousel settings (for developers)",
    },
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "Display slides horizontally or vertically",
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for consistent slide content
const SlideCard = ({ index }: { index: number }) => (
  <Card className="p-8">
    <div className="flex aspect-square items-center justify-center">
      <span className="text-4xl font-semibold">{index + 1}</span>
    </div>
  </Card>
);

// DefaultCarousel is now covered by the Playground story above

export const Playground: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  args: {
    opts: {
      loop: true,
      align: "start",
    },
    orientation: "horizontal",
  },
  argTypes: {
    opts: {
      control: "object",
      description: "Embla carousel options (loop, align, slidesToScroll, etc.)",
    },
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "Carousel orientation",
    },
  },
  render: function Render(args) {
    const [slideCount, setSlideCount] = useState(5);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [slidesToScroll, setSlidesToScroll] = useState(1);
    const [showAutoplay, setShowAutoplay] = useState(true);
    const [autoplayInterval, setAutoplayInterval] = useState(2000);
    const [loopEnabled, setLoopEnabled] = useState(true);
    const [alignOption, setAlignOption] = useState("center");

    return (
      <div className="w-full max-w-4xl p-4 space-y-4">
        {/* Carousel */}
        <div className="bg-white rounded-lg border p-4">
          <Carousel
            {...args}
            opts={{
              ...args.opts,
              loop: loopEnabled,
              align: alignOption as "start" | "center" | "end",
              slidesToScroll: slidesToScroll,
            }}
            className={cn(
              "w-full mx-auto",
              args.orientation === "vertical" ? "max-w-xs" : "max-w-3xl"
            )}
          >
            <CarouselContent
              className={cn(args.orientation === "vertical" && "h-[400px]")}
            >
              {Array.from({ length: slideCount }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    args.orientation === "vertical" ? "basis-1/3" : "",
                    slidesPerView > 1 && args.orientation === "horizontal"
                      ? `basis-1/${slidesPerView}`
                      : ""
                  )}
                >
                  <Card className="p-6">
                    <div className="flex aspect-square items-center justify-center">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselControls
              showAutoplay={showAutoplay}
              autoplayInterval={autoplayInterval}
            />
          </Carousel>
        </div>

        {/* Controls Panel */}
        <div className="bg-gray-50 rounded-lg border p-4 space-y-3">
          <h3 className="font-semibold text-lg mb-4">Playground Controls</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Slides: {slideCount}
              </label>
              <input
                type="range"
                min="3"
                max="10"
                value={slideCount}
                onChange={(e) => setSlideCount(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slides Per View:{" "}
                {slidesPerView === 1 ? "1" : `1/${slidesPerView}`}
              </label>
              <input
                type="range"
                min="1"
                max="4"
                value={slidesPerView}
                onChange={(e) => setSlidesPerView(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slides to Scroll: {slidesToScroll}
              </label>
              <input
                type="range"
                min="1"
                max="3"
                value={slidesToScroll}
                onChange={(e) => setSlidesToScroll(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Align: {alignOption}
              </label>
              <select
                value={alignOption}
                onChange={(e) => setAlignOption(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="center">Center</option>
                <option value="start">Start</option>
                <option value="end">End</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={loopEnabled}
                  onChange={(e) => setLoopEnabled(e.target.checked)}
                  className="rounded"
                />
                Enable Loop
              </label>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={showAutoplay}
                  onChange={(e) => setShowAutoplay(e.target.checked)}
                  className="rounded"
                />
                Enable Autoplay
              </label>
            </div>

            {showAutoplay && (
              <div className="md:col-span-2 lg:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Autoplay Interval: {autoplayInterval}ms
                </label>
                <input
                  type="range"
                  min="1000"
                  max="5000"
                  step="500"
                  value={autoplayInterval}
                  onChange={(e) => setAutoplayInterval(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            )}
          </div>

          <div className="pt-2 border-t">
            <p className="text-sm text-gray-600">
              <strong>Current Options:</strong>{" "}
              {JSON.stringify(
                {
                  loop: loopEnabled,
                  align: alignOption,
                  slidesToScroll: slidesToScroll,
                  ...args.opts,
                },
                null,
                2
              )}
            </p>
          </div>
        </div>

        {/* Info Panel */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-3">
          <p className="text-sm text-blue-800">
            <strong>💡 Tip:</strong> Try adjusting the options in the controls
            below or use the Storybook controls panel to modify carousel options
            like <code className="bg-blue-100 px-1 rounded">loop</code>,{" "}
            <code className="bg-blue-100 px-1 rounded">align</code>, and more!
          </p>
        </div>
      </div>
    );
  },
};

// These stories are now covered by the enhanced Playground story above

export const VariableWidths: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={index % 2 === 0 ? "basis-1/2" : "basis-1/3"}
            >
              <SlideCard index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselControls />
      </Carousel>
    </div>
  ),
};

export const YAxisCarousel: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel
        orientation="vertical"
        opts={{
          align: "start",
        }}
        className="w-full max-w-xs"
      >
        <CarouselContent className="h-[400px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 basis-1/3">
              <Card className="p-6">
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselControls />
      </Carousel>
    </div>
  ),
};

// SlidesPerView is now covered by the enhanced Playground story above

export const ThumbnailsCarousel: Story = {
  render: function Render() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [mainApi, setMainApi] = useState<any>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [thumbApi, setThumbApi] = useState<any>();
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Sync main carousel with thumbnail clicks
    const onThumbClick = (index: number) => {
      if (!mainApi || !thumbApi) return;
      mainApi.scrollTo(index);
    };

    // Update selected thumbnail when main carousel changes
    React.useEffect(() => {
      if (!mainApi) return;

      const onSelect = () => {
        setSelectedIndex(mainApi.selectedScrollSnap());
      };

      mainApi.on("select", onSelect);
      onSelect();

      return () => {
        mainApi.off("select", onSelect);
      };
    }, [mainApi]);

    return (
      <div className="w-full max-w-xl space-y-4">
        {/* Main Carousel */}
        <Carousel setApi={setMainApi} className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <SlideCard index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselControls />
        </Carousel>

        {/* Thumbnails */}
        <Carousel
          setApi={setThumbApi}
          opts={{
            containScroll: "keepSnaps",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 cursor-pointer"
                onClick={() => onThumbClick(index)}
              >
                <Card
                  className={`p-4 ${
                    index === selectedIndex
                      ? "border-2 border-primary"
                      : "border opacity-60"
                  }`}
                >
                  <div className="flex aspect-square items-center justify-center">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  },
};
