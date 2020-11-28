import { action, observable } from 'mobx';
import { v4 as uuid } from "uuid";

export interface TodoItem {
  id: string;
  title: string;
  done: boolean;
}

export class Todo implements TodoItem {
  id: string;
  @observable title: string;
  @observable done: boolean;

  constructor( { title, done = false } ) {
    this.id = uuid();
    this.title = title;
    this.done = done;
  }

  @action
  setDone(done) {
    this.done = done;
  }
}
