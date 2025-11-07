import { createFileRoute } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselControls,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { useState } from "react";
import { getComponentStorybookUrl } from "@/lib/storybook";

export const Route = createFileRoute("/components/carousel")({
  component: CarouselPage,
});

function CarouselPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const codeExample = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselControls,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="p-6">
              <div className="flex aspect-square items-center justify-center">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselControls showAutoplay={true} autoplayInterval={2000} />
    </Carousel>
  )
}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeExample);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="mb-4">
          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
            Layout
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Carousel</h1>
        <p className="text-xl text-gray-600">
          A carousel component for cycling through elements with support for
          keyboard navigation, touch gestures, and various configurations.
        </p>
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 text-sm">
            💡{" "}
            <strong>Want to see more examples and learn how it works?</strong>{" "}
            Visit our Storybook documentation below to explore interactive
            examples, different configurations, and see the carousel in action
            with various use cases.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "preview"
                ? "border-purple-500 text-purple-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "code"
                ? "border-purple-500 text-purple-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Code
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mb-8">
        {activeTab === "preview" ? (
          <div className="p-8 bg-gray-50 rounded-lg border flex justify-center">
            <Carousel
              className="w-full max-w-xs"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
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
              <CarouselControls showAutoplay={true} autoplayInterval={2000} />
            </Carousel>
          </div>
        ) : (
          <div className="relative">
            <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg border overflow-x-auto text-sm">
              <code>{codeExample}</code>
            </pre>
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200 transition-colors"
              title="Copy code"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Documentation sections */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Variants
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Slides Per View
              </h3>
              <p className="text-gray-600 mb-4">
                Display multiple slides at once, with infinite looping.
              </p>
              <div className="p-8 bg-gray-50 rounded-lg border">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full max-w-2xl mx-auto"
                >
                  <div className="relative">
                    <CarouselContent>
                      {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem
                          key={index}
                          className="md:basis-1/2 lg:basis-1/3"
                        >
                          <Card className="p-6">
                            <div className="flex aspect-square items-center justify-center">
                              <span className="text-2xl font-semibold">
                                {index + 1}
                              </span>
                            </div>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </div>
                  <CarouselControls
                    showAutoplay={true}
                    autoplayInterval={2000}
                  />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links</h2>
          <div className="space-y-2">
            <a
              href={getComponentStorybookUrl("CAROUSEL")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
            >
              View in Storybook →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
