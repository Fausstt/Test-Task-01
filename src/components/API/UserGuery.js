import axios from "axios";

export default class PostServer {
  static async getUserCard(userPage, userMuch) {
    const respons = await axios(` https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${userPage}&count=${userMuch} `)
    return respons
  }

  static async getUserCardPositions() {
    const respons = await axios(` https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
    return respons
  }
}




