const quiz =[
    {
        question: '東海大学に所属していた館沢亨次選手が箱根駅伝で走ったことのある区間はどれか。',
        answers: [
          '3区',
          '5区',
          '7区',
          '9区',   
    ],
        correct:'5区'
    },
    {
        question:'第96回箱根駅伝(2020)で区間新記録の出た区間はどれか。'
        ,answers: [
          '1区',
          '7区',
          '8区',
          '9区',
          '10区'
        ],  
        correct:'7区'
    },
    {
        question:'第95回箱根駅伝(2019)往路で区間賞を獲得したチームはどこか。'
        ,answers: [
          '日本大学',
          '東海大学',
          '駒澤大学',
          '国士舘大学'
        ],
        correct:'日本大学'
    }
    {
        question:''
        ,answers: [
          '日本大学',
          '東海大学',
          '駒澤大学',
          '国士舘大学'
        ],
        correct:'日本大学'
    }
];
    
    
    const $window = window;
    const $doc = document;
    const $question = $doc.getElementById('js-question');
    const $buttons = $doc.querySelectorAll('.btn');
    
    const quizLen = quiz.length;
    let quizCount = 0;
    let score = 0;
    
    const init = () => {
      $question.textContent = quiz[quizCount].question;
      
      const buttonLen = $buttons.length;
      let btnIndex = 0;
      
      while(btnIndex < buttonLen){
        $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
        btnIndex++;
      }
    };
    
    const goToNext = () => {
      quizCount++;
      if(quizCount < quizLen){
        init(quizCount);
      } else {
        // $window.alert('クイズ終了！');
        showEnd();
      }
    };
    
    const judge = (elm) => {
      if(elm.textContent === quiz[quizCount].correct){
        $window.alert('正解!');
        score++;
      } else {
        $window.alert('不正解!');
      }
      goToNext();
    };
    
    const showEnd = () => {
      $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
      
      const $items = $doc.getElementById('js-items');
      $items.style.visibility = 'hidden';
    };
    
    init();
    
    let answersIndex = 0;
    let answersLen = quiz[quizCount].answers.length;
    
    while(answersIndex < answersLen){
      $buttons[answersIndex].addEventListener('click', (e) => {
        judge(e.target);
      });
      answersIndex++;
    }