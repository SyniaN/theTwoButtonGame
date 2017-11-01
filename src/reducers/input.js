const defaultState = {
  time: "",
  playerStates : {
    name: "David",
    rank: "1",
    stars: "2",
    left: "1",
    right: "2",
    current: "1",
    upcoming: ["1", "2", "1", "1", "2", "2", "1", "1", "2", "2", "1", "2", "1"],
    score: 0
  },
  opponentStates: {
    name: "Bot",
    rank: "1",
    left: "3",
    right: "4",
    current: "4",
    upcoming: ["4", "3", "4", "4", "3", "4", "4", "3", "4", "4", "3", "4", "4"],
    score: 0
  }
}

const input = (state = defaultState, action) => {
    console.log(state);
    switch (action.type) {
      case 'LEFT':
        return {
          ...state,
          [action.playerType]:{
            ...state[action.playerType],
            upcoming: state[action.playerType].upcoming.slice(1),
            score: state[action.playerType].left === state[action.playerType].current ? state[action.playerType].score + 1: state[action.playerType].score -1,
            current: state[action.playerType].upcoming[0],
          } 
        
        }
      case 'RIGHT':
        return {
          ...state,
          [action.playerType]:{
            ...state[action.playerType],
            upcoming: state[action.playerType].upcoming.slice(1),
            score: state[action.playerType].right === state[action.playerType].current ? state[action.playerType].score + 1: state[action.playerType].score -1,
            current: state[action.playerType].upcoming[0],

          }          
        }
      default:
        return state
    }
  }
  
  export default input