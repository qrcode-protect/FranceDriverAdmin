import axios from "axios"
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
 * post a customer
 * @param newAdress object like {
        street: String
        city: String
        postalCode: String
       
 * }
 */
const postAdress = (newAdress) => {
  return axios.post(url + "/addresses", newAdress);
};

export { postCustomer, postAdress };
