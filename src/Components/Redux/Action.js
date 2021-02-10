import axios from "axios";

export const addCenter = (userObj) => {
  return (dispatch) => {
    if({userObj:""})
    {
      alert("please fill all the details");
    }
    else{
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/center", userObj)
      .then((response) => {
        dispatch({
          type: "ADD_CENTER",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }
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
    if({userObj:""})
    {
      alert("Reason cannot be empty.");
      return;
    }
    else{
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
    if({userObj:""})
    {
      alert("message cannot be empty.");
    }
    else{
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
  console.log(userObj);
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/login",userObj)
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
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/category",userObj)
      .then((response) => {
        dispatch({
          type: "ADD_CATEGORY",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addCategorydata = (userObj) => {
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/category",userObj)
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
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/category",userObj)
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
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/provider",userObj)
      .then((response) => {
        dispatch({
          type: "ADD_PROVIDER",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const ProviderReason = (userObj) => {
  return (dispatch) => {
    axios
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/provider",userObj)
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
      .post("https://helpearnnode-7uw2e.ondigitalocean.app/provider",userObj)
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



