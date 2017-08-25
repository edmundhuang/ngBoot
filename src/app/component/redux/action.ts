import {
  Action,
  ActionCreator
} from 'redux';

export const INCREMENT: string = 'INCREMENT';
export const increment: ActionCreator<Action> = () => ({
  type: INCREMENT
});

export const DECREMENT: string = 'DECREMENT';
export const decrement: ActionCreator<Action> = () => ({
  type: DECREMENT
});


export function increase(val) {
  return { type: INCREMENT, val }
}

export function decrease(val) {
  return { type: DECREMENT, val }
}
