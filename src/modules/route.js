import { handleActions } from "redux-actions";

const initialValue = {
  jobs : {
    devloper : {
      name : "정하림",
      skills : ["React.js", "Node.js"]
    },
    planner : {
      name : "홍길동",
      skills : ["Excel", "PowerPoint"]
    }
  },
}

const route = handleActions({

}, initialValue)

export default route;