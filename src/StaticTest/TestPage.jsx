import React, { useState, useEffect } from 'react';
import './quiz.css';

export const quiz = {
  topic: 'English Proficiency Test',
  level: 'Intermediate',
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: {
    reading: [
        {
           question: 'Which title matches the following text: \
           A recent study shows that walking in nature can improve mental health. Participants in the study reported feeling more relaxed and happier after a 30-minute walk in a park.',
           choices: [
              'The Impact of Physical Activity on Mental Health', 
              'How to Find Peace in Nature', 
              'The Power of Walking for Well-Being', 
              'Exploring Nature’s Role in Health', 
              'The Benefits of Outdoor Exercise', 
              'Enhancing Mental Health through Nature', 
              'Walking for a Better Life', 
              'The Science Behind Mental Health Improvement'
           ],
           correctAnswer: 'Enhancing Mental Health through Nature',
           score:1,
        },
        {
           question: 'Which title matches the following text: \
           The new community center has opened its doors to all age groups. It offers various activities, including art classes, yoga sessions, and computer workshops. There is something for everyone to enjoy.',
           choices: [
              'The Rise of Multi-Use Community Spaces', 
              'New Opportunities for the Community', 
              'What Makes a Modern Community Center?', 
              'A Hub of Activity for Everyone', 
              'The Role of Social Spaces in Communities', 
              'Innovative Community Engagement', 
              'A New Gathering Place for All Ages', 
              'Revitalizing Local Spaces through Creativity'
           ],
           correctAnswer: 'A New Gathering Place for All Ages',
           score:1,
        },
        {
           question: 'Which title matches the following text: \
           Electric cars are becoming increasingly popular. They offer a greener alternative to traditional vehicles, with fewer emissions and lower running costs. Many governments are offering incentives to encourage people to switch to electric cars.',
           choices: [
              'The Future of Green Technology', 
              'Emission-Free Roads Ahead', 
              'Revolutionizing the Automobile Industry', 
              'The Rise of Electric Vehicles', 
              'Electric Cars: The Next Step in Green Technology', 
              'Government Support for Clean Vehicles', 
              'Sustainable Travel in the Modern World', 
              'The Impact of Electric Cars on Society'
           ],
           correctAnswer: 'The Rise of Electric Vehicles',
           score:1,
        },
        {
           question: 'Which title matches the following text: \
           Learning a second language can open up many opportunities, both professionally and personally. It helps improve memory, boosts confidence, and enables you to communicate with a wider range of people.',
           choices: [
              'Unlocking Opportunities through Language', 
              'The Benefits of Bilingualism in Today’s World', 
              'How Language Shapes Your Career', 
              'The Cognitive Advantages of Multilingualism', 
              'The Power of Multilingual Communication', 
              'A Key to Professional Growth and Cultural Understanding', 
              'The Science of Language Learning', 
              'Enhancing Personal Connections through Language'
           ],
           correctAnswer: 'The Benefits of Bilingualism in Today’s World',
           score:1,
        },
        {
           question: 'Which title matches the following text: \
           Healthy eating is essential for maintaining good physical and mental health. Incorporating more fruits, vegetables, and whole grains into your diet can lead to significant health benefits.',
           choices: [
              'The Importance of Balanced Diets', 
              'Building Healthy Eating Habits', 
              'A Guide to Nutrition for Mental Wellness', 
              'Key Ingredients for a Healthy Life', 
              'The Role of Diet in Mental Health', 
              'Eating Well for Body and Mind', 
              'A Nutritional Approach to Health', 
              'The Essential Components of a Healthy Lifestyle'
           ],
           correctAnswer: 'Eating Well for Body and Mind',
           score:1,
        },
        {
            question: 'Read the following text and answer the questions bellow:\
            Environmental conservation has become a major global concern. Governments, non-governmental organizations, and local communities are working together to protect natural habitats and endangered species. One of the most successful approaches has been community-based conservation efforts. By involving local communities, conservation projects can tap into traditional knowledge and provide sustainable solutions. In return, these communities often benefit from ecotourism, which creates jobs and helps preserve local culture. However, funding for conservation projects remains a challenge, and more needs to be done to secure long-term support.\
            ',
            choices: [],
            correctAnswer: '',
            score:0,
        },
        {
            question: 'Why are local communities important in environmental conservation efforts?',
            choices: [
               'They often oppose conservation efforts.',
               'They can actively contribute to protecting local species.',
               'They have no role in such projects.',
               'They mainly provide funding.'
            ],
            correctAnswer: 'They can actively contribute to protecting local species.',
            score:2,
         },
         
         {
            question: 'What is one benefit of ecotourism for local communities?',
            choices: [
               'It leads to overpopulation.',
               'It provides jobs and preserves culture.',
               'It causes environmental damage.',
               'It encourages people to leave their homes.'
            ],
            correctAnswer: 'It provides jobs and preserves culture.',
            score:2,
         },
         
         {
            question: 'What remains a challenge in conservation projects?',
            choices: [
               'Lack of community involvement.',
               'Insufficient funding.',
               'Over-reliance on technology.',
               'The destruction of local culture.'
            ],
            correctAnswer: 'Insufficient funding.',
            score:2,
         },
         
         {
            question: 'How do local communities contribute to conservation?',
            choices: [
               'By offering traditional knowledge.',
               'By creating new wildlife reserves.',
               'By ignoring conservation efforts.',
               'By focusing on urban development.'
            ],
            correctAnswer: 'By offering traditional knowledge.',
            score:2,
         },
         
         {
            question: 'What is the main focus of the text?',
            choices: [
               'The negative effects of ecotourism.',
               'The challenges of wildlife conservation.',
               'The role of local communities in conservation.',
               'Government funding for conservation projects.'
            ],
            correctAnswer: 'The role of local communities in conservation.',
            score:2,
         },
         {
            question: 'Fill in the gaps:\
            Many (1) believe that climate change is one of the most serious issues facing our planet today. The (2) effects of climate change are becoming more apparent, with rising sea levels and extreme weather events becoming more (3) each year. Scientists are working hard to develop (4) solutions to address these problems, but progress has been (5). One of the key challenges is reducing the amount of carbon dioxide that is released into the atmosphere. Carbon dioxide is produced when we burn fossil fuels for (6), transportation, and industry. Shifting to renewable energy sources, such as wind and solar power, is essential to slowing down the effects of climate change.\
            ',
            choices: [],
            correctAnswer: '',
            score:0,
        },
        {
            question: '(1)',
            choices: [
                'scientists',
                'immediate',
                'frequent',
                'innovative',
                'slow',
                'energy',
                'rapid',
                'dangerous',
                'temporary',
                'pollution',
            ],
            correctAnswer: 'scientists',
            score:1.5,
        },
        {
            question: '(2)',
            choices: [
                'scientists',
                'immediate',
                'frequent',
                'innovative',
                'slow',
                'energy',
                'rapid',
                'dangerous',
                'temporary',
                'pollution',
            ],
            correctAnswer: 'rapid',
            score:1.5,
        },
        {
            question: '(3)',
            choices: [
                'scientists',
                'immediate',
                'frequent',
                'innovative',
                'slow',
                'energy',
                'rapid',
                'dangerous',
                'temporary',
                'pollution',
            ],
            correctAnswer: 'frequent',
            score:1.5,
        },
        {
            question: '(4)',
            choices: [
                'scientists',
                'immediate',
                'frequent',
                'innovative',
                'slow',
                'energy',
                'rapid',
                'dangerous',
                'temporary',
                'pollution',
            ],
            correctAnswer: 'innovative',
            score:1.5,
        },
        {
            question: '(5)',
            choices: [
                'scientists',
                'immediate',
                'frequent',
                'innovative',
                'slow',
                'energy',
                'rapid',
                'dangerous',
                'temporary',
                'pollution',
            ],
            correctAnswer: 'slow',
            score:1.5,
        },
        {
            question: '(6)',
            choices: [
                'scientists',
                'immediate',
                'frequent',
                'innovative',
                'slow',
                'energy',
                'rapid',
                'dangerous',
                'temporary',
                'pollution',
            ],
            correctAnswer: 'energy',
            score:1.5,
        },
        {
            question: 'Read the text and answer the following questions:\
            Technology is transforming the way we learn. Many schools are now incorporating digital tools like tablets and laptops into their classrooms. These tools allow students to access a wide range of resources, from online textbooks to educational videos. Teachers are also using technology to create interactive lessons that engage students in new ways. While some argue that technology can be a distraction, others believe that it enhances learning by providing students with new opportunities to explore topics in depth.\
            ',
            choices: [],
            correctAnswer: '',
            score:0,
        },
        {
            question: 'Technology is not used in classrooms today.',
            choices: ['True','False'],
            correctAnswer: 'False',
            score:1,
        },
        {
            question: 'Online textbooks are mentioned as one of the resources available to students.',
            choices: ['True','False'],
            correctAnswer: 'True',
            score:1,
        },
        {
            question: 'Some people believe that technology is a distraction in the classroom.',
            choices: ['True','False'],
            correctAnswer: 'True',
            score:1,
        },
        {
            question: 'Technology only benefits teachers, not students.',
            choices: ['True','False'],
            correctAnswer: 'False',
            score:1,
        },
        {
            question: 'Digital tools have no impact on student engagement.',
            choices: ['True','False'],
            correctAnswer: 'False',
            score:1,
        },
        {
            question: 'Technology is transforming the way students learn.',
            choices: ['True','False'],
            correctAnswer: 'True',
            score:1,
        },
        {
            question: 'Teachers use technology to make lessons more interactive.',
            choices: ['True','False'],
            correctAnswer: 'True',
            score:1,
        },
        {
            question: 'Technology reduces student engagement.',
            choices: ['True','False'],
            correctAnswer: 'False',
            score:1,
        },
        {
            question: 'Some believe that technology is a distraction in learning..',
            choices: ['True','False'],
            correctAnswer: 'True',
            score:1,
        },
        {
            question: 'Digital tools only benefit students.',
            choices: ['True','False'],
            correctAnswer: 'False',
            score:1,
        },

    ],     
    writing: [
        {
          question: 'Write a letter to a friend describing your recent holiday. Include where you went, what you did, and what you enjoyed most about the trip. (Maximum 250 words)',
          type: 'Writing',
          correctAnswer: 'Open-ended',
          maxWords: 250,
          score:7,
        },
        {
          question: 'Write a report about a recent event in your community, explaining what happened and why it was important for local residents. (Maximum 300 words)',
          type: 'Writing',
          correctAnswer: 'Open-ended',
          maxWords: 300,
          score:8,
        },
        {
          question: 'Write a 60-word note to your colleagues informing them that the weekly meeting has been postponed until next Thursday due to scheduling conflicts. (Maximum 70 words)',
          type: 'Writing',
          correctAnswer: 'Open-ended',
          maxWords: 70,
          score:10,
        }
    ],  
    translation: [
        {
          question: 'Translate the following into Arabic: \
          She had time to think while she was falling. She thought about her cat, Dinah, and many other things. "Oh no, Dinah will miss me. I hope my sister remembers to feed her," she said to herself. Thinking about all these things made her sleepy. Soon, she was asleep and had strange dreams, and then she woke up.',
          type: 'Translation',
          correctAnswer: 'Open-ended',
          maxWords: 800,
          suggestedTranslation: "كان لديها وقت للتفكير أثناء سقوطها. فكرت في قطتها، ديناه، والعديد من الأشياء الأخرى. 'يا إلهي، سوف تفتقدني ديناه. آمل أن تتذكر أختي أن تطعمها،' قالت لنفسها. جعلها التفكير في كل هذه الأمور تشعر بالنعاس. قريبًا، غفت وكان لها أحلام غريبة، ثم استيقظت.",
          score:5,
        },
        {
          question: 'Translate the following into Arabic:\
          Dutch social psychologist Geert Hofstede uses the concept of "power distance" to describe how power is distributed and how hierarchy is perceived in different cultures. In her previous work environment, Gabriela was used to a high power distance culture where power and authority are respected and everyone has their rightful place. In such a culture, leaders make the big decisions and are not often challenged. Her Swedish team, however, were used to working in a low power distance culture where subordinates often work together with their bosses to find solutions and make decisions. Here, leaders act as coaches or mentors who encourage independent thought and expect to be challenged.',
          type: 'Translation',
          correctAnswer: 'Open-ended',
          maxWords: 800,
          suggestedTranslation: "يستخدم عالم النفس الاجتماعي الهولندي غيرت هوفستيد مفهوم 'مسافة القوة' لوصف كيفية توزيع السلطة وكيفية تصور الهيكلية في الثقافات المختلفة. في بيئة عملها السابقة، كانت غابرييلا معتادة على ثقافة ذات مسافة قوة عالية حيث يتم احترام السلطة والسلطة وللجميع مكانهم الصحيح. في مثل هذه الثقافة، يتخذ القادة القرارات الكبيرة ولا يتعرضون للتحدي في كثير من الأحيان. ومع ذلك، كان فريقها السويدي معتادًا على العمل في ثقافة ذات مسافة قوة منخفضة حيث يعمل المرؤوسون غالبًا مع رؤسائهم لإيجاد الحلول واتخاذ القرارات. هنا، يعمل القادة كمدربين أو مرشدين يشجعون الفكر المستقل ويتوقعون أن يتم تحديهم.",
          score:5,
        },
        {
          question: 'Translate the following passage into Arabic: \
          For many centuries, the question of how our minds work was left to theologians and philosophers. But at the beginning of the twentieth century, a new science, experimental psychology emerged, in which the speculative theories of the past were confirmed or disproved by the scientific method. At the forefront of this research was J B Watson. His area of interest was the origin of human emotions. Do we learn them, or do we have them when we are born? In particular, Watson wanted to study fear, and was prepared to go to whatever lengths to study his theory. Watson’s subject was a 9-month-old infant, Albert. During the experiment, Watson presented the child with things which are often considered frightening – a rat, fire, a clown mask. At first, Albert was unafraid of these things. But then Watson tormented the child with loud, unexpected noises as he was playing with them. Sure enough, Albert learned to associate these things with the unpleasant experience. Even when the noises were stopped, Albert withdrew his body and puckered his face when presented once more with the rat and mask.',
          type: 'Translation',
          correctAnswer: 'Open-ended',
          maxWords: 800,
          suggestedTranslation: "لمدة قرون عديدة، كان سؤال كيفية عمل عقولنا متروكًا للاهوتيين والفلاسفة. ولكن في بداية القرن العشرين، ظهرت علم النفس التجريبي، الذي تم فيه تأكيد أو دحض النظريات التأملية الماضية باستخدام الطريقة العلمية. كان في طليعة هذا البحث ج. ب. واتسون. كان مجال اهتمامه هو أصل العواطف البشرية. هل نتعلمها، أم نمتلكها عندما نولد؟ كان واتسون يرغب بشكل خاص في دراسة الخوف، وكان مستعدًا للذهاب إلى أي مدى لدراسة نظرته. كان موضوع واتسون هو طفل يبلغ من العمر 9 أشهر، ألبيرت. خلال التجربة، قدم واتسون للطفل أشياء غالبًا ما تعتبر مخيفة - فأر، نار، قناع مهرج. في البداية، لم يكن ألبيرت خائفًا من هذه الأشياء. ولكن بعد ذلك عذب واتسون الطفل بأصوات عالية وغير متوقعة أثناء لعبه بها. وبالتأكيد، تعلم ألبيرت ربط هذه الأشياء بالتجربة غير السارة. حتى عندما توقفت الأصوات، سحب ألبيرت جسمه وعبس وجهه عندما قدم له الفأر والقناع مرة أخرى.",
          score:5,
        },
        {
          question: 'Translate the following into Arabic:\
          We saw a bat flying around the park at dusk." and "I need to replace the flat tire on my car.',
          type: 'Translation',
          correctAnswer: 'Open-ended',
          maxWords: 800,
          suggestedTranslation: "في العديد من أنحاء العالم، الشاي هو أكثر من مجرد مشروب؛ إنه رمز للضيافة والمجتمع. في اليابان، تعد حفلة الشاي طقسًا معقدًا يعكس الاحترام والنقاء والهدوء. في بريطانيا، يُعتبر شاي بعد الظهر مناسبة اجتماعية، وغالبًا ما يُستمتع به مع الكعك والمربى والسندويشات. في المقابل، يُقدّم الشاي في المغرب حلوًا وقويًا، وغالبًا ما يُرافقه أوراق النعناع ويُشَارَك بين العائلة والأصدقاء.",
          score:5,
        },
        {
          question: 'Translate the following into Arabic: \
          In many parts of the world, tea is more than just a beverage; it is a symbol of hospitality and community. In Japan, the tea ceremony is an intricate ritual that reflects respect, purity, and tranquility. In Britain, afternoon tea is a social occasion, often enjoyed with scones, cakes, and sandwiches. In contrast, tea in Morocco is served sweet and strong, often accompanied by mint leaves and shared among family and friends.',
          type: 'Translation',
          correctAnswer: 'Open-ended',
          maxWords: 800,
          suggestedTranslation: "في العديد من أنحاء العالم، يعتبر الشاي أكثر من مجرد مشروب؛ إنه رمز للضيافة والمجتمع. في اليابان، تعتبر مراسم الشاي طقوسًا معقدة تعكس الاحترام والنقاء والهدوء. في بريطانيا، يعد الشاي بعد الظهر مناسبة اجتماعية، غالبًا ما يتم الاستمتاع بها مع الكعك والمربى والسندويشات. في المقابل، يُقدّم الشاي في المغرب بشكل حلو وقوي، وغالبًا ما يُضاف إليه أوراق النعناع ويُشارك بين العائلة والأصدقاء.",
          score:5,
        },
        {
            question: 'Translate the following Arabic sentence into English: "ألخَيْـلُ وَاللّيْـلُ وَالبَيْـداءُ تَعرِفُنـي وَالسّيفُ وَالرّمحُ والقرْطاسُ وَالقَلَـمُ"',
            type: 'Translation',
            correctAnswer: 'Open-ended',
            maxWords: 800,
            suggestedTranslation:"The horses, the night, and the desert know me, as do the sword, the spear, the paper, and the pen.",
            score:5,
        },
        {
        question: 'Translate the following Arabic passage into English: "إذا الشعب يوما أراد الحياة فلا بد أن يستجيب القدر ولا بد لليل أن ينجلي ولا بد للقيد أن ينكسر".',
        type: 'Translation',
        correctAnswer: 'Open-ended',
        maxWords: 800,
        suggestedTranslation: "If the people one day desire life, then destiny must respond, the night must clear, and the chains must be broken.",
        score:5,
        },
        {
        question: 'Translate the following passage into English: "وفي ظل هذا التبادل المستمر بين الأفراد والمجتمع، يمكن أن يظهر التطور الاجتماعي والتقدم الحضاري. ولكن هذا التطور لا يتم دون أن يواجه المجتمع تحديات من الداخل والخارج، مثل الاضطرابات الاجتماعية أو الحروب التي تؤثر على استقرار المجتمع وتقدمه. لذلك، يعتبر الحفاظ على النظام الاجتماعي أحد الأمور الأساسية التي لا غنى عنها لضمان استمرارية الحياة المدنية.".',
        type: 'Translation',
        correctAnswer: 'Open-ended',
        maxWords: 800,
        suggestedTranslation: "In the context of this continuous exchange between individuals and society, social development and cultural progress can emerge. However, this development does not occur without the society facing challenges from both within and outside, such as social disturbances or wars that affect the stability and advancement of society. Therefore, maintaining social order is considered one of the fundamental issues necessary to ensure the continuity of civil life.",
        score:5,
        },
        {
        question: 'Translate the following passage into English: "ثم يذكر أنه كان يحب الخروج من الدار إذا غَرَبَت الشمسُ وتعشَّى الناسُ، فيعتمدُ على قصب هذا السِّياج مفكِّرًا مُغرقًا فى التفكير، حتى يَرُدَّه إلى ما حوله صوت الشاعر قد جلس على مسافةٍ من شماله، والتفَّ حوله الناس وأخذ يُنشدهم فى نَغْمةٍ عذْبةٍ غريبةٍ أخبارَ أبى زيد وخليفةَ ديابٍ، وهم سكوتٌ إلا حين يَسْتخفُّهم الطَّرب أو تَستفزُّهم الشهوة، فيستعيدون ويتمارَوْن ويختصمون، ويسكت الشاعر حتى يفرُغوا من لغَطهم بعد وقتٍ قصيرٍ أو طويل، ثم يستأنف إنشادَه العذْبَ بنغْمته التى لا تكاد تتغيَّر.".',
        type: 'Translation',
        correctAnswer: 'Open-ended',
        maxWords: 800,
        suggestedTranslation:"Then he mentions that he loved to leave the house when the sun set and people had their dinner, leaning against the reeds of the fence, immersed in deep thought, until he was brought back to his surroundings by the poet’s voice sitting to his north. People gathered around him, and he began singing to them in a strange, sweet tone the tales of Abu Zayd and Khalifa Diab. They remained silent until music lifted their spirits or their desires were stirred, and they began to repeat and argue. The poet paused until they stopped their noise, either shortly or after a long time, and then resumed his sweet singing with his unchanged melody.",
        score:5,
        }
      ],
    },
};


const TestPage = () => {
  const [activeSection, setActiveSection] = useState('starter');
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [writingAnswers, setWritingAnswers] = useState({});
  const [translationAnswers, setTranslationAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    openEndedQuestions: 0,
  });
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(0); // Timer in seconds
  const [showTimer, setShowTimer] = useState(false); // Show timer message
  const [timeLimit] = useState({ reading: 30, writing: 30, translation: 30 }); // Recommended time in minutes for each section

  const { questions } = quiz;

  
  useEffect(() => {
    let interval;
    if (showTimer && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && showTimer) {
      clearInterval(interval); // Stop timer when it reaches 0
      handleNextSection(); // Auto move to next section when time runs out
    }
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [showTimer, timer]);

  const handleNextSection = () => {
    scrollToTop(); // Scroll to top
    if (activeSection === 'starter') {
      setActiveSection('reading');
      startTimer();
    } else if (activeSection === 'reading') {
      setActiveSection('writing');
    } else if (activeSection === 'writing') {
      setActiveSection('translation');
    } else {
      calculateResult();
      setShowResult(true);
    }
  };
  
  
  const handleGoBack = () => {
    scrollToTop(); // Scroll to top
    if (activeSection === 'writing') {
      setActiveSection('reading');
    } else if (activeSection === 'translation') {
      setActiveSection('writing');
    } else {
      setShowResult(false);
    }
  };
  

  // Handle Answer Selection for reading and translation type questions
  const handleAnswerSelection = (answer, index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleAnswerChange = (answer, index) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: answer,
    }));
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const calculateResult = () => {
    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    questions.reading.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score += q.score;
        correctAnswers++;
      } else {
        wrongAnswers++;
      }
    });

    let openEndedQuestions = questions.translation.length + questions.writing.length;

    setResult({
      score,
      correctAnswers,
      wrongAnswers,
      openEndedQuestions
    });
  };

  // Function to handle maxWords constraint for textarea
  const handleTextInput = (event, maxWords) => {
    const value = event.target.value;
    const wordCount = value.split(/\s+/).filter((word) => word.length > 0).length;

    // Limit the input to maxWords
    if (wordCount <= maxWords) {
      handleAnswerChange(value, event.target.name); // Store the updated value
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleTextChange = (e, index, maxWords, section) => {
    const text = e.target.value;
    const wordCount = text.trim().split(/\s+/).length;
  
    if (wordCount <= maxWords) {
      if (section === 'writing') {
        setWritingAnswers({
          ...writingAnswers,
          [index]: text,
        });
      } else if (section === 'translation') {
        setTranslationAnswers({
          ...translationAnswers,
          [index]: text,
        });
      }
    }
  };
  

  const startTimer = (section) => {
    setTimer( 90*60  ); // Convert minutes to seconds
    setShowTimer(true); // Show the timer message
  };

  return (
    <div className="quiz-container bg-white w-full h-full flex flex-col items-center justify-center p-4 w-full max-w-xl mx-auto bg-gray-100 rounded-lg shadow-lg h-full">
      {!showResult ? (
        <div>
          {!showTimer && activeSection != 'starter' && (
            <div className="timer-message">
              <h3>Please take up to {timeLimit[activeSection]} minutes max in the {activeSection} section</h3>
            </div>
          )}

        {showTimer && (
            <div className="timer" style={{ color: "#50c90b" }}>
            <h3>
            Time remaining: {addLeadingZero(Math.floor(timer / 3600))}:
            {addLeadingZero(Math.floor((timer % 3600) / 60))}:
            {addLeadingZero(timer % 60)}
            </h3>
        </div>
        )}


        {activeSection === 'starter' && (
        <div>
            <div className="timer-message">
            <h2 className='quiz-h2'>Welcome to the Translation Skill Assessment Test!</h2>
            <p>
                This test is designed to evaluate your abilities in three key areas: 
                <br></br>
                <strong>Reading Comprehension</strong>, <strong>Writing Skills</strong>, and <strong>Translation Proficiency</strong>. 
                <br></br>
                Each section has a recommended time limit of 30 minutes, but you can complete it at your own pace within this limit.
            </p>
            <p>
                Here's what to expect:
            </p>
            <ul className='quiz-ul'>
              <li className='quiz-li'><strong>Reading Section:</strong> Answer multiple-choice questions based on provided passages.</li>
              <li className='quiz-li'><strong>Writing Section:</strong> Write short responses with a focus on clarity and word usage.</li>
              <li className='quiz-li'><strong>Translation Section:</strong> Translate sentences between English and Arabic to demonstrate your proficiency.</li>
            </ul>
            <p>
                Remember, this is not just about getting everything right—it's an opportunity 
                to understand your strengths and areas for improvement. Take your time, and do your best!
            </p>
            </div>
        </div>
        )}

          {activeSection === 'reading' && (
            <div>
              <h2 className='quiz-h2'>Reading Section</h2>
              {questions.reading.map((question, index) => (
                <div key={index} className="question">
                  <h3>{question.question}</h3>
                  <ul className='quiz-ul'>
                    {question.choices.map((answer, i) => (
                      <li 
                        onClick={() => handleAnswerSelection(answer, index)}
                        key={i}
                        className={selectedAnswers[index] === answer ? 'selected-answer quiz-li' : 'quiz-li'}>
                        {answer}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        )}

        {activeSection === 'writing' && (
        <div>
            <h2 className='quiz-h2'>Writing Section</h2>
            {questions.writing.map((question, index) => (
            <div key={index} className="question">
                <h3>{question.question}</h3>
                <textarea
                placeholder="Write your answer here..."
                className="w-full p-2 border rounded textarea"
                rows={6}
                onChange={(e) => handleTextChange(e, index, question.maxWords, 'writing')}
                value={writingAnswers[index] || ''}
                />
                <p>
                {(writingAnswers[index] || '').trim().split(/\s+/).length} / {question.maxWords} words
                </p>
            </div>
            ))}
        </div>
        )}

        {activeSection === 'translation' && (
        <div>
            <h2 className='quiz-h2'>Translation Section</h2>
            {questions.translation.map((question, index) => (
            <div key={index} className="question">
                <h3>{question.question}</h3>
                <textarea
                placeholder="Write your translation here..."
                className="w-full p-2 border rounded textarea"
                rows={6}
                onChange={(e) => handleTextChange(e, index, question.maxWords, 'translation')}
                value={translationAnswers[index] || ''}
                />
                <p>
                {(translationAnswers[index] || '').trim().split(/\s+/).length} / {question.maxWords} words
                </p>
            </div>
            ))}
        </div>
        )}


        <div className="button-container">
            <button className="back-btn" onClick={handleGoBack}>
              Back
            </button>
            <button className="next-btn" onClick={handleNextSection}>
              {activeSection === 'translation' ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>

    ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Questions: <span>{questions.reading.length + questions.writing.length + questions.translation.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          <p>
            Open-ended Questions: <span>{result.openEndedQuestions}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default TestPage;
