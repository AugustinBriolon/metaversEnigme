import imgInDesign from '../../assets/img/indesign_pixel.png'
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
      questionImage: imgInDesign,
      answerOptions: [
        { answerText: "Google Agenda", isCorrect: false },
        { answerText: "Adobe InDesign", isCorrect: true },
        { answerText: "Trello", isCorrect: false },
        { answerText: "Mailjet", isCorrect: false },
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
  