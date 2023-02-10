import initMenu from './modules/menu-active.js';
import initItensBudget from './modules/itens-budget.js';
import initQuestions from './modules/questions.js';
import initRotationImage from './modules/galery.js';


if (window.SimpleAnime){
  new SimpleAnime();
}

initMenu();
initItensBudget();
initQuestions();
initRotationImage();
