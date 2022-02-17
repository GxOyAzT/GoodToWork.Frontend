import { BaseAddress } from "../config/BackendBaseAddress"
import { FetchResultModel } from '../../models/data/FetchResultModel'
import { Dto } from '../../models/dtos/shared/Dto'

export async function PostData<TContentType extends Dto>(endpoint: string, data: any) {
  try {
    var response = await fetch(`${BaseAddress()}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

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