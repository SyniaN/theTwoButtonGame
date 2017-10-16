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
    name: "",
    rank: "",
    left: "",
    right: "",
    current: "",
    upcoming: ["1", "2", "1", "1", "2", "2", "1", "1", "2", "2", "1", "2", "1"],
    score: ""
  }
}

const input = (state = defaultState, action) => {
    console.log(state);
    switch (action.type) {
      case 'LEFT':
        return {
          ...state,
          playerStates:{
            ...state.playerStates,
            upcoming: state.playerStates.upcoming.slice(1),
            score: state.playerStates.left === state.playerStates.current ? state.playerStates.score + 1: state.playerStates.score -1,
            current: state.playerStates.upcoming[0],
            
          } 
        
        }
      case 'RIGHT':
        return {
          ...state,
          playerStates:{
            ...state.playerStates,
            upcoming: state.playerStates.upcoming.slice(1),
            score: state.playerStates.right === state.playerStates.current ? state.playerStates.score + 1: state.playerStates.score -1,
            current: state.playerStates.upcoming[0],

          }          
        }
      default:
        return state
    }
  }
  
  export default input