import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MentorGeneralService } from '../../core/mentor/mentor.general.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
//Custom Category dropdown validator
function categoryValidator(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value.toLocaleLowerCase() != 'default')
    return null;
  return { 'defaultvalue': true };
}


@Component({
  selector: 'app-set-quiz',
  templateUrl: './set-quiz.component.html',
  styleUrls: ['./set-quiz.component.css']
})
export class SetQuizComponent implements OnInit {

  //Validation Messages
  private validationQuizName = {
    required: "Quiz name has to be mentioned",
    minlength: "Too short"
  }
  private validationCategoryName = {
    defaultvalue: "Please select one from menu!"
  }
  private validationDescription = {
    required: "Please add some description"
  }
  private validationQuestion = {
    required: "Question without a question! Really?"
  }
  private validationAnswer = {
    required: "Please enter an option"
  }

  quizIntroForm: FormGroup;
  questionForm: FormGroup;

  //Validation Messages used in DOM
  quizNameMessage: string;
  categoryNameMessage: string;
  descriptionMessage: string;
  questionMessage: string;
  answerAMessage: string;
  answerBMessage: string;
  answerCMessage: string;
  answerDMessage: string;

  //Component's Variable
  quizmode: boolean;
  categories: any;
  questions: any = [];
  questionIndex: any;
  quizName: any;
  quesAnsDetail: any;
  unpublishedQuiz: any;
  // Set Quiz Name Validation messages
  setQuizNameValidationMessages(c: AbstractControl): void {
    this.quizNameMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.quizNameMessage = Object.keys(c.errors).map(key =>
        this.validationQuizName[key]).join(' ')
    }
  }
  // Set Category Name Validation messages
  setCategoryNameValidationMessages(c: AbstractControl): void {
    this.categoryNameMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.categoryNameMessage = Object.keys(c.errors).map(key =>
        this.validationCategoryName[key]).join(' ')
    }
  }
  //Set description validation messages
  setDescriptionValidationMessages(c: AbstractControl): void {
    this.descriptionMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.descriptionMessage = Object.keys(c.errors).map(key =>
        this.validationDescription[key]).join(' ')
    }
  }

  //Set question validation messages
  setQuestionValidationMessages(c: AbstractControl): void {
    this.questionMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.questionMessage = Object.keys(c.errors).map(key =>
        this.validationQuestion[key]).join(' ')
    }
  }
  //Set answer validation messages
  setAnswerValidationMessages(c: AbstractControl, answer: string): void {
    let answerMessage = ''
    this.answerAMessage = ''
    this.answerBMessage = ''
    this.answerCMessage = ''
    this.answerDMessage = ''

    if ((c.touched || c.dirty) && c.errors) {
      answerMessage = Object.keys(c.errors).map(key =>
        this.validationAnswer[key]).join(' ')
    }

    if (answer == 'answerA')
      this.answerAMessage = answerMessage;
    if (answer == 'answerB')
      this.answerBMessage = answerMessage;
    if (answer == 'answerC')
      this.answerCMessage = answerMessage;
    if (answer == 'answerD')
      this.answerDMessage = answerMessage;
  }


  constructor(private fb: FormBuilder, private _mentorGeneralService: MentorGeneralService, private _route: Router) { }
  ngOnInit() {
    // Query database to check if any quiz is needs approval
    // Pull that quiz out
    // Set correspondind question index
    // display that question in UI to let mentor finish the test

    this.quizIntroForm = this.fb.group({
      quizName: ['', [Validators.required, Validators.minLength(3)]],
      categoryName: ['default', [Validators.required, categoryValidator]],
      level: ['easy', [Validators.required]],
      description: ['', [Validators.required]]
    })
    //Quiz Intro Form controllers 
    const quizNameController = this.quizIntroForm.get('quizName');
    const categoryNameController = this.quizIntroForm.get('categoryName');
    const descriptionController = this.quizIntroForm.get('description');

    // Quiz Intro Form Subscribers (Value )
    quizNameController.valueChanges.subscribe(value => {
      this.setQuizNameValidationMessages(quizNameController);
    })
    categoryNameController.valueChanges.subscribe(value => {
      this.setCategoryNameValidationMessages(categoryNameController);
    })
    descriptionController.valueChanges.subscribe(value => {
      this.setDescriptionValidationMessages(descriptionController);
    })




    this.questionForm = this.fb.group({
      question: ['', [Validators.required]],
      answerA: ['', [Validators.required]],
      answerB: ['', [Validators.required]],
      answerC: ['', [Validators.required]],
      answerD: ['', [Validators.required]],
      correctOption: 'A'
    });
    //Question Form controllers
    const questionController = this.questionForm.get('question');
    const answerAController = this.questionForm.get('answerA');
    const answerBController = this.questionForm.get('answerB');
    const answerCController = this.questionForm.get('answerC');
    const answerDController = this.questionForm.get('answerD');

    //Question Form Subscribers (Value)
    questionController.valueChanges.subscribe(value => {
      this.setQuestionValidationMessages(questionController);
    })
    answerAController.valueChanges.subscribe(value => {
      this.setAnswerValidationMessages(answerAController, "answerA");
    })
    answerBController.valueChanges.subscribe(value => {
      this.setAnswerValidationMessages(answerBController, "answerB");
    })
    answerCController.valueChanges.subscribe(value => {
      this.setAnswerValidationMessages(answerCController, "answerC");
    })
    answerDController.valueChanges.subscribe(value => {
      this.setAnswerValidationMessages(answerDController, "answerD");
    })


    if (!localStorage.getItem('quizmode') && localStorage.getItem('quizmode') != 'true') {
      this.quizmode = false;

      this._mentorGeneralService.getCategories().subscribe(res => {
        this.categories = res['categories'];
      }, err => {
        this.categories = [];

      }, () => {

      })

      this._mentorGeneralService.getUnpublishedQuiz().subscribe(res => {
        this.unpublishedQuiz = res['unpublishedQuiz'];
      }, err => {

      }, () => {

      })
    }
    else {
      //  If a page is re accessed while in quiz mode
      this._mentorGeneralService.getQuiz(localStorage.getItem('quizId')).subscribe(res => {

        this.quizmode = Boolean(localStorage.getItem('quizmode'));
        // Array of question ID
        this.questions = res['quiz'].questions;
        this.questionIndex = this.questions.length == 0 ? 1 : this.questions.length + 1;
        this.quizName = res['quiz'].name;
      }, err => {

      }, () => {

      });


    }

  }




  setQuiz(quizDetails) {

    this._mentorGeneralService.setQuiz(quizDetails.value).subscribe(res => {
      this.questions = [];
      this.questionIndex = 1;
      this.quizName = res['quizDetails'].name;
      this.quizmode = true;
      this.quesAnsDetail = [];
      localStorage.setItem('quizmode', String(true));
      localStorage.setItem('quizId', String(res['quizDetails']._id));

    }, err => {

    }, () => {

    })
  }
  next(question) {

    if (this.questionIndex > this.questions.length) {
      let questionToBeSent = {
        question: question.value,
        quizId: localStorage.getItem('quizId')
      }
      this._mentorGeneralService.pushQuestion(questionToBeSent).subscribe(res => {

        let questionId = res['modifiedQuiz'].questions[res['modifiedQuiz'].questions.length - 1];
        this.questions.push(questionId);
        this.questionIndex = this.questionIndex + 1;
        this.questionForm.reset();

      }, err => {

      }, () => {

      })
    }

    else if (this.questionIndex <= this.questions.length) {
      let answerId = [];
      let answers = [];


      this.quesAnsDetail.answers.forEach(e => {

        answerId.push(e._id);
      });
      Object.keys(question.value).forEach(e => {
        if (e != 'question' && e != 'correctOption') {
          answers.push(question.value[e]);
        }
      })

      let questionToBeUpdated = {
        question: question.value,
        questionId: this.quesAnsDetail._id,
        answerId: answerId,
        answers: answers
      }

      this._mentorGeneralService.updateQuestion(questionToBeUpdated).subscribe(res => {
        this.questionIndex = this.questionIndex + 1;
        this.questionForm.reset();

        if (this.questionIndex <= this.questions.length) {

          this._mentorGeneralService.getQuestionWithAnswers(this.questions[this.questionIndex - 1]).subscribe(resQuestion => {
            // Make sure the format of backend is same as required!
            this.questionForm.setValue(resQuestion['question']);
            this.quesAnsDetail = resQuestion['additional'];
          })

        }

      }, err => {

      }, () => {

      })
    }
  }
  cancel() {
    this._mentorGeneralService.deleteQuiz(localStorage.getItem('quizId')).subscribe(res => {
      this.questionForm.reset();
      this.quizmode = false;
      this.questions = [];
      this.questionIndex = 1;
      localStorage.removeItem('quizmode');
      localStorage.removeItem('quizId');
      window.location.reload(true);
    }, err => {

    }, () => {

    })
  }
  previous() {
    this.questionIndex -= 1;

    this._mentorGeneralService.getQuestionWithAnswers(this.questions[this.questionIndex - 1]).subscribe(res => {
      this.questionForm.reset();
      this.questionForm.setValue(res['question']);
      this.quesAnsDetail = res['additional'];

    }, err => {
      this.questionIndex += 1;

    }, () => {

    })

  }
  publish(question) {
    // Query backend to check isPublished for the quizID
    this.next(question);
    this.questionIndex -= 1;
    this._mentorGeneralService.publishQuiz(localStorage.getItem('quizId')).subscribe(res => {
      localStorage.removeItem('quizId');
      localStorage.removeItem('quizmode');
      this.quizmode = false;
      this._route.navigate(['/mentor/my-school']);
    }, err => {

    }, () => {

    })
  }
  save(question) {
    //If it is the last question than next would set quizindex to 21. You have to take care of that
    this.next(question);
    //Save everything to database with isPublished option false
    localStorage.removeItem('quizId');
    localStorage.removeItem('quizmode');
    this.quizmode = false;
    window.location.reload(true);
  }

  publishUnpublished(id) {
    this._mentorGeneralService.publishQuiz(id).subscribe(res => {
      this._route.navigate(['/mentor/my-school']);
    }, err => {

    }, () => {

    })
  }
  activateIncomplete(quiz) {
    this.questions = quiz.questions;
    this.quizmode = true;
    this.questionIndex = this.questions.length + 1;
    this.quizName = quiz.name;
    this.quesAnsDetail = [];
    localStorage.setItem('quizmode', String(true));
    localStorage.setItem('quizId', String(quiz._id));
  }
}
