export const loadState = () => {
  try {
    const cachedState = sessionStorage.getItem('state');
    if (cachedState) {
      return JSON.parse(cachedState);
    } else {
      return undefined;
    }
  } catch (error) {
    console.error('Problem loading state.');
    return undefined;
  }
};
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (error) {
    console.error('Problem saving state.');
  }
};
