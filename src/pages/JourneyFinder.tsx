import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { trips } from "../data/trips";
import { useToast } from "@/components/ui/use-toast";

interface Question {
  id: string;
  text: string;
  options: {
    value: string;
    label: string;
  }[];
}

const questions: Question[] = [
  {
    id: "environment",
    text: "What type of environment do you prefer?",
    options: [
      { value: "mountains", label: "Mountains" },
      { value: "water", label: "Lakes and Rivers" },
      { value: "woods", label: "Forests" },
    ],
  },
  {
    id: "activity",
    text: "What type of activity interests you the most?",
    options: [
      { value: "hiking", label: "Hiking" },
      { value: "biking", label: "Mountain Biking" },
      { value: "water", label: "Water Activities" },
      { value: "climbing", label: "Via Ferrata/Climbing" },
    ],
  },
  {
    id: "difficulty",
    text: "What's your preferred difficulty level?",
    options: [
      { value: "Easy", label: "Easy - Suitable for beginners" },
      { value: "Moderate", label: "Moderate - Some experience needed" },
      { value: "Hard", label: "Hard - Experienced adventurers" },
    ],
  },
  {
    id: "duration",
    text: "How long would you like your adventure to be?",
    options: [
      { value: "half", label: "Half day" },
      { value: "full", label: "Full day" },
      { value: "multi", label: "Multiple days" },
    ],
  },
];

const JourneyFinder = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAnswer = (value: string) => {
    const questionId = questions[currentQuestion].id;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const getMatchingTrips = () => {
    return trips.filter((trip) => {
      let score = 0;

      // Match difficulty
      if (trip.difficulty === answers.difficulty) {
        score += 2;
      }

      // Match activity type
      if (answers.activity === "hiking" && trip.category === "Hiking") score += 2;
      if (answers.activity === "biking" && trip.category === "Mountain Biking") score += 2;
      if (answers.activity === "water" && trip.category === "Water Activities") score += 2;
      if (answers.activity === "climbing" && trip.category === "Via Ferrata") score += 2;

      // Duration matching
      if (
        (answers.duration === "half" && trip.duration.includes("4 hours")) ||
        (answers.duration === "full" && trip.duration.includes("1 day")) ||
        (answers.duration === "multi" && trip.duration.includes("2 day"))
      ) {
        score += 1;
      }

      return score >= 2; // Return trips with at least 2 matching criteria
    });
  };

  const handleTripClick = (tripId: string) => {
    navigate(`/trip/${tripId}`);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    toast({
      title: "Journey Finder Reset",
      description: "Let's find your perfect adventure again!",
    });
  };

  if (showResults) {
    const matchingTrips = getMatchingTrips();

    return (
      <div className="pt-24 px-4 min-h-screen bg-white dark:bg-primary-dark">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Your Perfect Adventures</h1>
          {matchingTrips.length > 0 ? (
            <div className="space-y-6">
              {matchingTrips.map((trip) => (
                <Card
                  key={trip.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleTripClick(trip.id)}
                >
                  <CardContent className="flex items-center p-6">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-32 h-32 object-cover rounded-lg mr-6"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {trip.description}
                      </p>
                      <div className="flex gap-2">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {trip.difficulty}
                        </span>
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {trip.duration}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xl mb-4">No perfect matches found, but don't worry!</p>
              <p className="mb-6">Try adjusting your preferences to find more adventures.</p>
            </div>
          )}
          <div className="mt-8 text-center">
            <Button onClick={handleReset}>Start Over</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 min-h-screen bg-white dark:bg-primary-dark">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 mx-1 rounded ${
                  index <= currentQuestion
                    ? "bg-primary"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <Card className="animate-fade-in">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {questions[currentQuestion].text}
            </h2>
            <RadioGroup
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {questions[currentQuestion].options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <label
                    htmlFor={option.value}
                    className="flex-grow cursor-pointer text-lg"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JourneyFinder;