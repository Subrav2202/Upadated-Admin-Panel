import axios from "axios";
let Category={Category:""};
let Provider={Provider:""}
let Center={Center:""}

export const addACenter = (userObj) => {
  Center.areawise = userObj;
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/",Center.areawise)
      .then((response) => {
        if (response.data.status === "success") 
        {
          alert(response.data.msg);
        } else if (response.data.status === "unsuccess") 
        {
          alert(response.data.error);
        } else 
        {
          alert("Problem in adding center.Please try after some times.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
      dispatch({
        type:"ADD_ACENTER",
        payload:Center.areawise,
      });
  };
};

export const addDCenter = (userObj) => {
  Center.divisional = userObj;
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/",Center.divisional)
      .then((response) => {
        if (response.data.status === "success") 
        {
          alert(response.data.msg);
        } else if (response.data.status === "unsuccess") 
        {
          alert(response.data.error);
        } else 
        {
          alert("Problem in adding center.Please try after some times.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
      dispatch({
        type:"ADD_DCENTER",
        payload:Center.divisional,
      });
  };
};

export const addRCenter = (userObj) => {
  Center.reagional = userObj;
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/",Center.reagional)
      .then((response) => {
        if (response.data.status === "success") 
        {
          alert(response.data.msg);
        } else if (response.data.status === "unsuccess") 
        {
          alert(response.data.error);
        } else 
        {
          alert("Problem in adding center.Please try after some times.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
      dispatch({
        type:"ADD_RCENTER",
        payload:Center.reagional,
      });
  };
};


export const addProfile = (userObj) => {
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/center", userObj)
      .then((response) => {
        dispatch({
          type: "ADD_USER",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addReason = (userObj) => {
  return (dispatch) => {
    if ({ userObj: "" }) {
      alert("Reason cannot be empty.");
      return;
    } else {
      axios
        .post("https://helpearnnode-7uw2e.ondigitalocean.app/center", userObj)
        .then((response) => {
          dispatch({
            type: "ADD_REASON",
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

export const addMessage = (userObj) => {
  return (dispatch) => {
    if ({ userObj: "" }) {
      alert("message cannot be empty.");
    } else {
      axios
        .post("https://helpearnnode-7uw2e.ondigitalocean.app/center", userObj)
        .then((response) => {
          dispatch({
            type: "ADD_MESSAGE",
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

export const Logindetails = (userObj) => {
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/login", userObj)
      .then((response) => {
        dispatch({
          type: "ADD_LOGIN",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addCategory = (userObj) => {
  Category.add = userObj;
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/",Category.add)
      .then((response) => {
        if (response.data.status === "success") 
        {
          alert(response.data.msg);
        } else if (response.data.status === "unsuccess") 
        {
          alert(response.data.error);
        } else 
        {
          alert("Problem in adding Category.Please try after some times.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
      dispatch({
        type:"ADD_CATEGORY",
        payload:Category.add,
      });
  };
};

export const addCategorydata = (userObj) => {
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/category", userObj)
      .then((response) => {
        dispatch({
          type: "ADD_CATEGORYDATA",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addCategoryReason = (userObj) => {
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/category", userObj)
      .then((response) => {
        dispatch({
          type: "ADD_CATEGORYREASON",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addProvider = (userObj) => {
  Provider.add = userObj;
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/",Provider.add)
      .then((response) => {
        if (response.data.status === "success") 
        {
          alert(response.data.msg);
        } else if (response.data.status === "unsuccess") 
        {
          alert(response.data.error);
        } else 
        {
          alert("Problem in adding Provider.Please try after some times.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
      dispatch({
        type:"ADD_PROVIDER",
        payload:Provider.add
      });
  };
};

export const ProviderReason = (userObj) => {
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/provider", userObj)
      .then((response) => {
        dispatch({
          type: "ADD_PROVIDER_REASON",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const AllCenterReason = (userObj) => {
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/provider", userObj)
      .then((response) => {
        dispatch({
          type: "ADD_ALLCENTERS_REASON",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
