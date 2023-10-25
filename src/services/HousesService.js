import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { House } from "../models/House"
class HousesService {
  async getHouses() {
    const res = await api.get('api/houses')
    const houseData = res.data.map(pojo => new House(pojo))
    AppState.houses = houseData
    logger.log('[AppState] getHouses() Houses Got', AppState.houses)
  }

  async getHouseById(houseId) {
    const res = await api.get(`api/houses/${houseId}`)
    const newHouse = new House(res.data)
    AppState.activeHouse = newHouse
    logger.log('[AppState.ActiveHouse] new active house ', AppState.activeHouse)
  }

  clearData() {
    AppState.activeHouse = null
  }
}

export const housesService = new HousesService()