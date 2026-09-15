# IL Broker Study Pack JSON — v2

The app can append bulk study material from a JSON file.

## Preferred format
```json
{
  "app": "IL Broker Study Pack",
  "version": 2,
  "source": "Course PDF or chapter name",
  "items": [
    {
      "topic": "Illinois License Law",
      "term": "Flashcard front",
      "definition": "Flashcard back",
      "question": "Exam-style multiple-choice question",
      "choices": ["Choice A", "Choice B", "Choice C", "Choice D"],
      "correct": 1,
      "explanation": "Why the correct answer is correct."
    }
  ]
}
```

`correct` uses zero-based numbering: 0=A, 1=B, 2=C, 3=D.

An item may contain only a flashcard, only a multiple-choice question, or both.
Study Pack import appends material; it does not erase the existing bank.
