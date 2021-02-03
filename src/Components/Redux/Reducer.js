import styleHandler1 from "../Areawise/Pageheader"
import  styleHandler3 from "../Areawise/Pageheader"
const Reducer = (state = {}, action) => {
  switch (action.type) {

    case "ADD_CENTER":
      const centers =(action.payload);
      if (centers.status === "success") {
        alert(centers.msg);
        styleHandler1();
      } else if (centers.status === "unsuccess") {
        alert(centers.error);
      } else {
        alert("Problem in adding servicecenter.");
      }

      return { ...state, centers };
      
    case "ADD_USER":
      const user = state.user(action.payload);
      if (user.status ==="success") {
        alert(user.msg);
        styleHandler1();
      } else if (user.status === "unsuccess") {
        alert(user.error);
      } else {
        alert("Problem in adding user.");
      }
      return { ...state, user };

    case "ADD_REASON":
      const reason = state.reason(action.payload);
      if (reason.status === "success") {
        alert(reason.msg);
        styleHandler3();
      } else if (reason.status === "unsuccess") {
        alert(reason.error);
      } else {
        alert("Problem in adding reason.");
      }
      return { ...state, reason };

    case "ADD_MESSAGE":
      const message = state.message(action.payload);
      if (message.status === "success") {
        alert(message.msg);
        styleHandler1();
      } else if (message.status === "unsuccess") {
        alert(message.error);
      } else {
        alert("Problem in adding servicecenter.");
      }
      return { ...state, message };

    default:
      return state;
  }
};

export default Reducer;
