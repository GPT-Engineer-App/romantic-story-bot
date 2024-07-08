import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");

  const generateStory = () => {
    // Mock story generation
    const mockStory = `As the sun dipped below the horizon, painting the sky in hues of pink and orange, Sarah's heart fluttered with anticipation. She had been waiting for this moment for what felt like an eternity. The soft sand beneath her feet and the gentle lapping of waves created the perfect backdrop for their long-awaited reunion.

    In the distance, she saw a figure approaching. It was him. Time seemed to slow as he drew near, his familiar silhouette becoming clearer with each step. When their eyes finally met, the world around them faded away. Without a word, they embraced, years of longing dissolving in an instant.

    As they held each other close, Sarah knew that this was just the beginning of their greatest adventure yet. With intertwined hands and hearts full of promise, they walked along the shoreline, ready to write the next chapter of their love story together.`;

    setStory(mockStory);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Romantic Stories Writer</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Enter Your Prompt</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              placeholder="Enter a romantic prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={generateStory}>Generate Story</Button>
          </div>
        </CardContent>
      </Card>

      {story && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{story}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Index;