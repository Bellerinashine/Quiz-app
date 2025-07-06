import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
quiz: any;
current = 0;
selected: string | null = null;
score = 0;
finished = false;

constructor(private route: ActivatedRoute, private quizService: QuizService) {}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id')!;
  this.quizService.getQuiz(id).subscribe(data => this.quiz = data);
}

next() {
  if (this.selected === this.quiz.questions[this.current].correct) {
    this.score++;
  }
  this.current++;
  this.selected = null;
  if (this.current >= this.quiz.questions.length) {
    this.finished = true;
  }
}

}
