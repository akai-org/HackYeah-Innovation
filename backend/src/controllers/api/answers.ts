import { Request, Response } from 'express';

const answerCounts: Record<string, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  };

export const answers = (req: Request, res: Response) => {
    const selectedAnswers: Record<string, string> = req.body.answers;

    for (const questionId in selectedAnswers) {
        const selectedAnswer = selectedAnswers[questionId];
    
        if (['A', 'B', 'C', 'D'].includes(selectedAnswer)) {
          answerCounts[selectedAnswer]++;
        }
      }
      console.log(answerCounts['A']);
      
}