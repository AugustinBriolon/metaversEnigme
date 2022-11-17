import imgMcDo from '../../assets/img/mcdo.png'
import imgPhotoshop from '../../assets/img/psd.png'
import imgIllustrator from '../../assets/img/illustator.png'


export const questions = [
    {
      questionText: "A quelle entreprise correspond ce logo ?",
      questionImage: imgPhotoshop,

      answerOptions: [
        { answerText: "Power Point", isCorrect: false },
        { answerText: "Google Sheet", isCorrect: false },
        { answerText: "Microsoft Word", isCorrect: true },
        { answerText: "Photoshop", isCorrect: false },
      ],
    },
    {
      questionText: "A quelle entreprise correspond ce logo ?",
      questionImage: imgMcDo,
      answerOptions: [
        { answerText: "IIM", isCorrect: false },
        { answerText: "McDo", isCorrect: true },
        { answerText: "EMLV", isCorrect: false },
        { answerText: "ESILV", isCorrect: false },
      ],
    },
    {
      questionText: "A quelle entreprise correspond ce logo ?",
      questionImage: imgIllustrator,
      answerOptions: [
        { answerText: "Adobe XD", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Adobe Illustrator", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    }
  ];
  