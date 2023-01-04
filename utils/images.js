import { __cdn } from "../settings";

export function getKV(name){
    return __cdn + 'image/kv/' + name;
}
