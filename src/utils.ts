import { IProduct, User } from "./atoms";
import profilePhoto from '../src/Data/profilePhoto.jpg'
export const isEmail=(email:string)=>{
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


export const AuthSignIn = (email:string,password:string) =>{
    if(email==='johndoe@mclernons.ie' && password==='12345678'){
        const user =  <User>{
            name:'John Doe',
            email:email,
            profilePhoto:profilePhoto.src,
            isLoggedIn:true
        }
        SaveAuthLocalStorage(user);
        return user;
    }else{
        return null;
    }
}


export const SaveAuthLocalStorage = (user:User) =>{
    window.sessionStorage.setItem('auth',JSON.stringify(user));
}

export const LoadAuthFromLocalStorage = () =>{
    const auth = window.sessionStorage.getItem('auth')
    let user=null;
    if (auth!=null || auth!='' ){
        user = JSON.parse(auth || '{}')
    }
    return user
}

export const GetProducts =<T> ()=>{
    return products as IProduct[];
}


const products = [
    {
      name: "Cough Syrup",
      barcode: 1234567890123,
      department: "COUGH",
      orderlist: "ORD123",
      isHeadOfficeMaintained: true,
      lastReceived: new Date("2023-09-20"),
      lastSold: new Date("2023-09-25"),
      trade: 10.50,
      retailPrice: 15.99,
      printLabel: {
        print: true,
        labels: 5,
      },
      stock: [
        { location: "warehouse", onHand: 6 },
        { location: "store", onHand: 23 },
        { location: "stockroom", onHand: 6 },
      ],
    },
    {
      name: "Pain Relief Tablets",
      barcode: 9876543210987,
      department: "ABC",
      orderlist: "ORD124",
      isHeadOfficeMaintained: false,
      lastReceived: new Date("2023-09-15"),
      lastSold: new Date("2023-09-18"),
      trade: 8.75,
      retailPrice: 12.99,
      printLabel: {
        print: false,
        labels: 0,
      },
      stock: [
        { location: "warehouse", onHand: 2 },
        { location: "store", onHand: 11 },
        { location: "stockroom", onHand: 2 },
      ],
    },
    {
      name: "Allergy Relief Spray",
      barcode: 1230984567890,
      department: "XYZ",
      orderlist: "ORD125",
      isHeadOfficeMaintained: true,
      lastReceived: new Date("2023-09-10"),
      lastSold: new Date("2023-09-22"),
      trade: 12.30,
      retailPrice: 18.50,
      printLabel: {
        print: true,
        labels: 10,
      },
      stock: [
        { location: "warehouse", onHand: 6 },
        { location: "store", onHand: 2 },
        { location: "stockroom", onHand: 6 },
      ],
    },
    {
      name: "Vitamin C Tablets",
      barcode: 1234567800123,
      department: "COUGH",
      orderlist: "ORD126",
      isHeadOfficeMaintained: true,
      lastReceived: new Date("2023-09-11"),
      lastSold: new Date("2023-09-20"),
      trade: 7.50,
      retailPrice: 10.99,
      printLabel: {
        print: true,
        labels: 8,
      },
      stock: [
        { location: "warehouse", onHand: 1 },
        { location: "store", onHand: 2 },
        { location: "stockroom", onHand: 6 },
      ],
    },
    {
      name: "Hand Sanitizer",
      barcode: 9876503210987,
      department: "XYZ",
      orderlist: "ORD127",
      isHeadOfficeMaintained: false,
      lastReceived: new Date("2023-09-13"),
      lastSold: new Date("2023-09-22"),
      trade: 3.50,
      retailPrice: 5.99,
      printLabel: {
        print: false,
        labels: 0,
      },
      stock: [
        { location: "warehouse", onHand: 4 },
        { location: "store", onHand: 2 },
        { location: "stockroom", onHand: 1 },
      ],
    },
    {
      name: "Antibiotic Cream",
      barcode: 3216549870123,
      department: "COUGH",
      orderlist: "ORD128",
      isHeadOfficeMaintained: true,
      lastReceived: new Date("2023-09-10"),
      lastSold: new Date("2023-09-21"),
      trade: 6.30,
      retailPrice: 9.99,
      printLabel: {
        print: true,
        labels: 3,
      },
      stock: [
        { location: "warehouse", onHand: 7 },
        { location: "store", onHand: 5 },
        { location: "stockroom", onHand: 1 },
      ],
    },
    {
      name: "Cold Relief Tablets",
      barcode: 1231237890123,
      department: "COUGH",
      orderlist: "ORD129",
      isHeadOfficeMaintained: false,
      lastReceived: new Date("2023-09-12"),
      lastSold: new Date("2023-09-19"),
      trade: 9.50,
      retailPrice: 13.99,
      printLabel: {
        print: true,
        labels: 6,
      },
      stock: [
        { location: "warehouse", onHand: 9 },
        { location: "store", onHand: 3 },
        { location: "stockroom", onHand: 7 },
      ],
    },
    {
      name: "First Aid Kit",
      barcode: 9871236540987,
      department: "ABC",
      orderlist: "ORD130",
      isHeadOfficeMaintained: true,
      lastReceived: new Date("2023-09-09"),
      lastSold: new Date("2023-09-24"),
      trade: 15.30,
      retailPrice: 22.50,
      printLabel: {
        print: false,
        labels: 0,
      },
      stock: [
        { location: "warehouse", onHand: 6 },
        { location: "store", onHand: 1 },
        { location: "stockroom", onHand: 3 },
      ],
    },
    {
      name: "Cough Drops",
      barcode: 3213216540987,
      department: "COUGH",
      orderlist: "ORD131",
      isHeadOfficeMaintained: false,
      lastReceived: new Date("2023-09-14"),
      lastSold: new Date("2023-09-25"),
      trade: 2.50,
      retailPrice: 3.99,
      printLabel: {
        print: true,
        labels: 10,
      },
      stock: [
        { location: "warehouse", onHand: 6 },
        { location: "store", onHand: 1 },
        { location: "stockroom", onHand: 5 },
      ],
    },
    {
      name: "Thermometer",
      barcode: 6549873210123,
      department: "XYZ",
      orderlist: "ORD132",
      isHeadOfficeMaintained: true,
      lastReceived: new Date("2023-09-17"),
      lastSold: new Date("2023-09-22"),
      trade: 9.99,
      retailPrice: 14.99,
      printLabel: {
        print: false,
        labels: 0,
      },
      stock: [
        { location: "warehouse", onHand: 2 },
        { location: "store", onHand: 5 },
        { location: "stockroom", onHand: 3 },
      ],
    },
  ];
  