import axios from "axios";

const url = process.env.REACT_APP_ENTRY_POINT;

/**
 * post a customer
 * @param newCustomer object like {
        firstName: String
        lastName: String
        idfirebase: String
        phoneNumber:String
        createdAt: Date
        updatedAt : Date
        email: String
        address: String
       
 * }
 */

const postCustomer = (newCustomer) => {
  return axios.post(url + "/customers", newCustomer);
};

/**
 * post a driver
 * @param newDriver object like {
        firstName: String
        lastName: String
        phoneNumber:String
        status: Boolean
        createdAt: Date
        updatedAt : Date
        address: String
        driverDoc:String
       
 * }
 */

const postDriver = (newDriver) => {
  return axios.post(url + "/drivers", newDriver);
};

/**
 * post an adress
 * @param newAdress object like {
        street: String
        city: String
        postalCode: String
       
 * }
 */
const postAdress = (newAdress) => {
  return axios.post(url + "/addresses", newAdress);
};

const upload = (file) => {
  let formData = new FormData();
  formData.append('files', file);
  return axios.post(url + "/media_objects", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      accept: "application/ld+json",
    },
  });
};

const postDriverDoc = (fileIdentity, fileVtc) => {
  if (fileIdentity === "" && fileVtc !== "") {
    return upload(fileVtc).then((resVtc) => {
      var vtcCard = resVtc.data["@id"];
      return axios.post(url + "/driver_docs", {
        vtcCard: vtcCard,
      });
    });
  } else if (fileVtc === "" && fileIdentity !== "") {
    return upload(fileIdentity).then((resIdentity) => {
      var identity = resIdentity.data["@id"];
      return upload(fileVtc).then((resVtc) => {
        var vtcCard = resVtc.data["@id"];
        return axios.post(url + "/driver_docs", {
          identity: identity,
          vtcCard: vtcCard,
        });
      });
    });
  } else if (fileVtc === "" && fileIdentity === "") {
    return axios.post(url + "/driver_docs", {});
  } else {
    return upload(fileIdentity).then((resIdentity) => {
      var identity = resIdentity.data["@id"];
      return upload(fileVtc).then((resVtc) => {
        var vtcCard = resVtc.data["@id"];
        return axios.post(url + "/driver_docs", {
          identity: identity,
          vtcCard: vtcCard,
        });
      });
    });
  }
};

export { postCustomer, postAdress, postDriver, postDriverDoc, upload };
