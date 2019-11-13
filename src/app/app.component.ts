import {Component} from '@angular/core';
import {TodoIterface} from './todo.iterface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    todos: TodoIterface[] = [
        {
            title: 'Задача 1',
            completed: true
        },
        {
            title: 'Задача 2',
            completed: false
        },
        {
            title: 'Задача 3',
            completed: false
        },
        {
            title: 'Задача 4',
            completed: false
        }
    ];

    text: string;

    constructor() {

    }


    sendTODO() {
        this.todos.push({title: this.text, completed: false});
        this.text = '';
    }


    toggle(todo: any) {
        todo.completed = !todo.completed;
    }

    delete(todo: any) {
        const index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }

    }

}
