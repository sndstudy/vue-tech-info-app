import axios from 'axios';
import { IAxiosResponse } from '../dto/axios_response';

export async function httpGet(url: string, params: any): Promise<IAxiosResponse>{

    return await axios.get<IAxiosResponse>(url, params).catch(
                                        (err: IAxiosResponse)=> {
                                            return Promise.reject();
                                        });

}
