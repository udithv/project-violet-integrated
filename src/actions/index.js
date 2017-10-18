import axios from 'axios';

const URL = 'http://localhost:4040/';

export const FILETREE = 'FILETREE';
export const FILEDATA = 'FILEDATA';

export function fetchFileTree() {
    const request = axios.get(`${URL}data`);
    return {
        type: FILETREE,
        payload: request
    }
}

export function fetchFileData(path) {
    const request = axios.post(`${URL}filedata`, path);
    return {
        type: FILEDATA,
        payload: request
    }
}