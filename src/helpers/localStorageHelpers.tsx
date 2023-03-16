import { TestState } from '../context';

export const saveStateToLocalStorage = (state: TestState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('testState', serializedState);
  } catch (error) {
    console.error('Error saving state to local storage:', error);
  }
};

export const loadStateFromLocalStorage = (): TestState | undefined => {
  try {
    const serializedState = localStorage.getItem('testState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from local storage:', error);
    return undefined;
  }
};
