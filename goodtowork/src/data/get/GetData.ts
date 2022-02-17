import { BaseAddress } from "../config/BackendBaseAddress"
import { FetchResultModel } from '../../models/data/FetchResultModel'
import { Dto } from '../../models/dtos/shared/Dto'

export async function GetData<TContentType extends Dto>(endpoint: string) {
  try {
    var response = await fetch(`${BaseAddress()}/${endpoint}`)
    console.log(response)
    if (response.status == 200) {
      const returnModel : FetchResultModel<TContentType> = {
        StatusCode: 200,
        Content: await response.json()
      }
      return returnModel
    }

    const returnModel : FetchResultModel<TContentType> = {
      StatusCode: response.status
    }
    return returnModel
  }
  catch(ex) {
    const returnModel : FetchResultModel<TContentType> = {
      StatusCode: 500
    }
    return returnModel
  }
}