const defaultState = {
  time: "",
  playerStates: {
    name: "David",
    rank: "1",
    stars: "2",
    left: "Square",
    right: "Circle",
    current: "Square",
    upcoming: ["Square", "Square", "Circle", "Square", "Circle", "Square", "Circle", "Square", "Circle", "Square", "Circle", "Square", "Circle"],
    score: 0
  },
  opponentStates: {
    name: "Bot",
    rank: "1",
    left: "Square",
    right: "Circle",
    current: "Square",
    upcoming: ["Square", "Square", "Circle", "Square", "Circle", "Square", "Circle", "Square", "Circle", "Square", "Circle", "Square", "Circle"],
    score: 0
  }
}

const gameReducer = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    case 'LEFT':
      return {
        ...state,
        playerStates: {
          ...state.playerStates,
          upcoming: state.playerStates.upcoming.slice(1),
          score: state.playerStates.left === state.playerStates.current ? state.playerStates.score + 1 : state.playerStates.score - 1,
          current: state.playerStates.upcoming[0],
        }

      }
    case 'RIGHT':
      return {
        ...state,
        playerStates: {
          ...state.playerStates,
          upcoming: state.playerStates.upcoming.slice(1),
          score: state.playerStates.right === state.playerStates.current ? state.playerStates.score + 1 : state.playerStates.score - 1,
          current: state.playerStates.upcoming[0],

        }
      }
    default:
      return state
  }
}

export default gameReducer