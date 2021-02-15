const Reducer = (
  state = { Category: "",Center:"", Provider: "" },
  action
) => {
  switch (action.type) {
    case "ADD_ACENTER":
      return { ...state,Center: action.payload };
      case "ADD_DCENTER":
      return { ...state,Center:action.payload };
      case "ADD_RCENTER":
      return { ...state,Center: action.payload };

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
      if (login.status === "success") {
        alert(login.msg);
        sessionStorage.setItem("token", login.token);
      } else if (login.status === "unsuccess") {
        alert(login.error);
      } else {
        alert("Problem in login.Please try after 30 minutes.");
      }

      return { ...state, login };

    case "ADD_CATEGORY":
      return { ...state,Category: action.payload };

    case "ADD_CATEGORYDATA":
      const Categorydata = action.payload;
      if (Categorydata.status === "success") {
        alert(Categorydata.msg);
      } else if (Categorydata.status === "unsuccess") {
        alert(Categorydata.error);
      } else {
        alert("Problem in adding Categorydata. Please try after some times.");
      }
      return { ...state, Categorydata };

    case "ADD_CATEGORYREASON":
      const Categoryreason = action.payload;
      if (Categoryreason.status === "success") {
        alert(Categoryreason.msg);
      } else if (Categoryreason.status === "unsuccess") {
        alert(Categoryreason.error);
      } else {
        alert("Problem in adding Categoryreason. Please try after some times.");
      }
      return { ...state, Categoryreason };

    case "ADD_PROVIDER":
      return { ...state,Provider: action.payload };

    case "ADD_PROVIDER_REASON":
      const providerreason = action.payload;
      if (providerreason.status === "success") {
        alert(providerreason.msg);
      } else if (providerreason.status === "unsuccess") {
        alert(providerreason.error);
      } else {
        alert("Problem in adding provider reason.");
      }
      return { ...state, providerreason };

    case "ADD_ALLCENTERS_REASON":
      const Allcentersreason = action.payload;
      if (Allcentersreason.status === "success") {
        alert(Allcentersreason.msg);
      } else if (Allcentersreason.status === "unsuccess") {
        alert(Allcentersreason.error);
      } else {
        alert("Problem in adding Allcenters reason.");
      }
      return { ...state, Allcentersreason };

    default:
      return state;
  }
};

export default Reducer;
