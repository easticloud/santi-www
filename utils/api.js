import {$cms} from './https'

export function createMessage(data){
    return $cms().post(`/api/cms/misc/contact`,data)
}

