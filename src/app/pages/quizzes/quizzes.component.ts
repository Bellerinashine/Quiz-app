import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {

  category!: string;
quizzes: any[] = [];

constructor(private route: ActivatedRoute, private quizService: QuizService) {}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.category = params.get('category')!;
    this.quizService.getQuizzes(this.category).subscribe(data => this.quizzes = data);
  });
}
}
