import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './tasks.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>('/api/tasks');
    }

    saveTask(task: Task, checked: boolean): Observable<Task> {
        task.completed = checked;
        return this.http.post<Task>('/api/tasks/save', task);
    }
}