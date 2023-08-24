import axios from "axios";
import { userExists } from "./verifyUser.mock";
import { userNotExists } from "./verifyUser.mock";

export function verifyUser(value, type) {
  let data;
  if (type === "email") {
    data = JSON.stringify({
      email: value,
    });
  } else {
    data = JSON.stringify({
      mobileNumber: value,
    });
  }

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/services/login/pv1/validateUser",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  if(value=== "anas@gmail.com" || value === "9889941287") {
    return userExists;
  }
  else {
    return userNotExists;
  }

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
}

