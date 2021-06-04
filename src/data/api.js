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
  formData.append("file", file);

  return axios.post(url + "/media_objects", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      accept: "application/ld+json",
    },
  });
};

const postDriverDoc = (files) => {
  var tabFileUpload = [];
  for (let i = 0; i < Object.keys(files).length; i++) {
    tabFileUpload[i] = upload(files[i]);
  }
  return axios.all(tabFileUpload).then((response) => {
    var identity = response[0].data["@id"];
    var vtcCard = response[1].data["@id"];
    return axios.post(url + "/driver_docs", {
      identity: identity,
      vtcCard: vtcCard,
    });
  });
};

export { postCustomer, postAdress, postDriver, postDriverDoc, upload };
