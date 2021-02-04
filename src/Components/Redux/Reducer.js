const Reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CENTER":
      const centers = action.payload;
      if (centers.status === "success") {
        alert(centers.msg);
      } else if (centers.status === "unsuccess") {
        alert(centers.error);
      } else {
        alert("Problem in adding servicecenter.");
      }

      return { ...state, centers };

    case "ADD_USER":
      const user = action.payload;
      if (user.status === "success") {
        alert(user.msg);
      } else if (user.status === "unsuccess") {
        alert(user.error);
      } else {
        alert("Problem in adding user.");
      }
      return { ...state, user };

    case "ADD_REASON":
      const reason = action.payload;
      if (reason.status === "success") {
        alert(reason.msg);
      } else if (reason.status === "unsuccess") {
        alert(reason.error);
      } else {
        alert("Problem in adding reason.");
      }
      return { ...state, reason };

    case "ADD_MESSAGE":
      const message = action.payload;
      if (message.status === "success") {
        alert(message.msg);
      } else if (message.status === "unsuccess") {
        alert(message.error);
      } else {
        alert("Problem in adding Message");
      }
      return { ...state, message };

    case "ADD_LOGIN":
      const login = action.payload;
      console.log(login);
      if (login.status === "success") {
         alert(login.msg);
        
      } else if (login.status === "unsuccess") {
        alert(login.error);
      } else {
        alert("Problem in login. Please try after 30 minutes.");
      }

      return { ...state, login };

    default:
      return state;
  }
};

export default Reducer;
