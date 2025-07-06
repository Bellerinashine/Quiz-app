import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>('assets/data/categories.json');
  }

  getQuizzes(category: string): Observable<any[]> {
    return this.http.get<any[]>(`assets/data/quizzes-${category.toLowerCase()}.json`);
  }

  getQuiz(id: string): Observable<any> {
    return this.http.get<any>(`assets/data/quiz-${id}.json`);
  }
}
