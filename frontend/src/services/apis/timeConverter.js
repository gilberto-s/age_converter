import axios from 'axios';

import { TIME_CONVERTER_API_HOST } from '../../config'

export async function calculate(data) {
    try {
        const response = await axios({
            method: 'POST',
            baseURL: `${TIME_CONVERTER_API_HOST}/convert`,
            data: data
        })
        if (response?.status === 200) {
            return response.data
        }
        return null
    } catch (error) {
        return null
    }
}
