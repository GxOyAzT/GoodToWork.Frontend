import { BaseAddress } from "../config/BackendBaseAddress"
import { FetchResultModel } from '../../models/data/FetchResultModel'
import { Dto } from '../../models/dtos/shared/Dto'

export const FetchData = async <TContentType extends Dto>(endpoint: string, method: string, data?: any) => {
  try {
    var response
    if(data == null) {
      response = await fetch(`${BaseAddress()}/${endpoint}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    else {
      response = await fetch(`${BaseAddress()}/${endpoint}`, {
        method: method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    
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