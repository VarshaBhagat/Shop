import { SetStateAction, useEffect, useState } from "react";

export const Actions = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
};
let globalItemState = { Items: [] };
const ItemListeners: {
  (value: SetStateAction<{ Items: never[] }>): void;
  (value: SetStateAction<{ Items: never[] }>): void;
}[] = [];

const reducer = (
  state: { Items: any },
  action: { type: string; data: { id: number } }
) => {
  switch (action.type) {
    case Actions.ADD_ITEM: {
      const Items = [...state.Items];
      Items.push(action.data);
      return { ...state, Items: Items };
    }
    case Actions.REMOVE_ITEM: {
      let Items = [...state.Items];
      Items = Items.filter((e) => {
        return e.id !== action.data.id;
      });
      return { ...state, Items: Items };
    }
    default:
      return state;
  }
};

export const useStore = () => {
  const setState = useState(globalItemState)[1];
  useEffect(() => {
    ItemListeners.push(setState);
    return () => {
      const index = ItemListeners.indexOf(setState);
      if (index > -1) {
        ItemListeners.splice(index, 1);
      }
    };
  }, [setState]);
  const dispatch = (action: { type: string; data: { id: number } }) => {
    globalItemState = reducer(globalItemState, action);
    for (const listener of ItemListeners) {
      listener(globalItemState);
    }
    return globalItemState;
  };
  return [globalItemState, dispatch];
};
