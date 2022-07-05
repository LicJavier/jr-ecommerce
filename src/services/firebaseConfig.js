// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, getDocs,doc, getDoc, collection, addDoc, Timestamp, query, where } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCyozwkj1F_yE1y6Y8c-wpKjiz7uECKJWY",
authDomain: "creacionesnatu-7c671.firebaseapp.com",
projectId: "creacionesnatu-7c671",
storageBucket: "creacionesnatu-7c671.appspot.com",
messagingSenderId: "967768999334",
appId: "1:967768999334:web:48e51e131a512e84b83b67",
measurementId: "G-F3EPQK5ECC"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);
//Obteniendo los productos para el Item List
export async function getItems() {
    const productCollection = collection(appFirestore, "productos");
    const productoSnapshot = await getDocs(productCollection);
    let respuesta = productoSnapshot.docs.map(doc => {
        return{
            ...doc.data(),
            id: doc.id
        }
    })
    return respuesta;
}
//Obteniendo cada producto para el Item Detail
export async function getDetailItem(id) {
    const productDetail = doc(  appFirestore , "productos" , id );
    const productoSnapshot = await getDoc(productDetail);
        return{ id: productoSnapshot.id, ...productoSnapshot.data() };
}

export async function getCategoryItems(idCategoria) {
    const productCollection = collection(  appFirestore , "productos");
    const q = query(productCollection, where("categoria", "==", idCategoria));

    const productoSnapshot = await getDocs(q);
    let respuesta = productoSnapshot.docs.map(doc => {
        return{
            ...doc.data(),
            id: doc.id
        }
    })
        return respuesta;
}
// export async function createBuyOrder(dataOrder) {
//     const orderCollection = collection(appFirestore, "orders");   
//     const dateTimeStamp = Timestamp.now();
//     const dataOrderDate ={
//         {buyer: dataOrder.buyer,
//               }
//     }

//     const orderCreated= await addDoc(orderCollection, dataOrder)
//     return orderCreated
// }
// export async function exportDataFirebase() {
//     const productos = []; 
//     const productCollection = collection(appFirestore, "productos");

//     const itemPrueba = productos[0];

//     const newDoc = doc(productCollection);
//     setDoc(newDoc, itemPrueba).then (res => {
//         console.log("guardado")
//     })
// }