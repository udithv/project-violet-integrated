import axios from 'axios';

const URL = 'http://localhost:4040/data';

export const FILETREE = 'FILETREE';

export function fetchFileTree() {
    const request = axios.get(URL);
    return {
        type: FILETREE,
        payload: request
    }
}