import inDesign from './asset/inDesign.png'
import illustrator from './asset/illustator.png'
import photoshop from './asset/psd.png'


export const questions = [
    {
      questionText: "A quelle application correspond ce logo ?",
      questionImage: inDesign,
      
      answerOptions: [
        { answerText: "SketchUp", isCorrect: false },
        { answerText: "DesignIn ", isCorrect: false },
        { answerText: "inDesign", isCorrect: true },
        { answerText: "Photoshop", isCorrect: false },
      ],
    },
    {
      questionText: "A quelle application correspond ce logo ?",
      questionImage: illustrator,
      
      answerOptions: [
        { answerText: "Illustor", isCorrect: false },
        { answerText: "Dessin App", isCorrect: false },
        { answerText: "Illustrator", isCorrect: true },
        { answerText: "Microsoft Excel", isCorrect: false }
      ],
    },
    {
      questionText: "A quelle application correspond ce logo ?",
      questionImage: photoshop,

      answerOptions: [
        { answerText: "Power Point", isCorrect: false },
        { answerText: "Google Sheet", isCorrect: false },
        { answerText: "Microsoft Word", isCorrect: false },
        { answerText: "Photoshop", isCorrect: true }
      ],
    }
  ];
  