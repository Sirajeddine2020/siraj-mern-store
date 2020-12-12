//export const api = 'http://localhost:2019/';
export const api = 'https://siraj-mern-store.herokuapp.com/';
export const generatePublicUrl = (fileName) => {
    return `https://siraj-mern-store.herokuapp.com/public/${fileName}`;
   // return `http://localhost:2019/public/${fileName}`;
}
