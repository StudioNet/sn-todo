import { Observable } from "rxjs";
import { computed, observe } from "mobx";

export function toRxJsObservable<T> ( expr: () => T) : Observable<T> {
  return new Observable(observer => {
    const mobxComputed = computed(expr);

    const unsubscriber = observe(mobxComputed, (changes) => {
      observer.next(changes.newValue as T);
    }, true);

    return () => {
      if (unsubscriber) {
          unsubscriber();
      }
    }
  });
}
