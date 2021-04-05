function rickReducer(state = { cards: [] }, action) {
  switch (action.type) {
    case "ADD":
      return {
        cards: action.payload,
      };
    case "DELETE":
      return {
        cards: [],
      };
    default:
      return [];
  }
}

export default rickReducer;
