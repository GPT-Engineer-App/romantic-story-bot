import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    { value: "romance", label: "Romance" },
    { value: "fantasy", label: "Fantasy Romance" },
    { value: "historical", label: "Historical Romance" },
    { value: "contemporary", label: "Contemporary Romance" },
    { value: "paranormal", label: "Paranormal Romance" },
  ];

  const generateStory = () => {
    // Mock story generation
    const mockStory = `In a ${category === 'historical' ? 'bygone era' : 'world'} where love knows no bounds, 
    ${prompt}. As the ${category === 'fantasy' ? 'magical' : 'gentle'} breeze whispered through the air, 
    two hearts found each other in the most unexpected of circumstances. 
    Their eyes met, and in that instant, they knew their lives would never be the same. 
    ${category === 'paranormal' ? 'Supernatural forces seemed to draw them together, ' : ''}
    ${category === 'contemporary' ? 'Despite the challenges of modern life, ' : ''}
    their love blossomed like a delicate flower, growing stronger with each passing day. 
    Together, they embarked on a journey of passion, trust, and unwavering devotion, 
    proving that true love can conquer all obstacles.`;

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
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Enter a romantic prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-grow"
              />
              <Button onClick={generateStory}>Generate Story</Button>
            </div>
            <Select onValueChange={setCategory} value={category}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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