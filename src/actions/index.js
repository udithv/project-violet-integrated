import axios from 'axios';

const URL = 'http://localhost:4040/';

export const FILETREE = 'FILETREE';
export const FILEDATA = 'FILEDATA';
export const SETFILEDATA = 'SETFILEDATA';
export const REMOVEFILEDATA = 'REMOVEFILEDATA';
export const REPLACEFILEDATA = 'REPLACEFILEDATA';

export function fetchFileTree() {
    const request = axios.get(`${URL}data`);
    return {
        type: FILETREE,
        payload: request
    }
}

export function fetchFileData({ path, name }) {
    const request = axios.post(`${URL}filedata`, { path, name });
    return {
        type: FILEDATA,
        payload: request
    }
}


export function setFileData(file){
    const data = { data: file };
    return {
        type: SETFILEDATA,
        payload: data
    }
}

export function removeFileData(id, callback) {
    const data = { data : id };
    return {
        type: REMOVEFILEDATA,
        payload: data
    }
}

export function replaceFileData(file) {
    const data = { data: file };
    return {
        type: REPLACEFILEDATA,
        payload: data
    }
}