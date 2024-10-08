import { atom, selector,selectorFamily } from "recoil";

export interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
  profilePhoto: string;
}

export interface IProduct {
    name: string;
    barcode: number;
    department: 'COUGH' | 'ABC' | 'XYZ';
    orderlist :string,
    isHeadOfficeMaintained:boolean,
    lastReceived:Date,
    lastSold:Date,
    trade:number,
    retailPrice:number,
    printLabel:{
        print:boolean,
        labels:number,
    },
    stock:{
            location:string,
            onHand:number,
    }[]
}

export const ProductsState = atom<IProduct[]>({
    key:'products',
    default:[],
})

export const AuthState = atom<User>({
  key: 'auth',
  default: {
    name: '',         
    email: '',         
    isLoggedIn: false, 
    profilePhoto: '',  
  },
});

export const sideMenuAtom = atom({
    key: "sideMenu",
    default: false,
});

export const IsLoggedIn = selector<boolean>({
  key: 'isLoggedIn',
  get: ({ get }) => {
    const user = get(AuthState);
    return user.isLoggedIn;  
  },
});

export const userSelector = selector({
  key: 'user',
  get: ({ get }) => {
    const user = get(AuthState);
    
    return {
      name: user.name,
      email: user.email,
      profilePhoto: user.profilePhoto,
    };
  },
  set: ({ set }, newValue) => {
    const user = newValue as User;
    set(AuthState, user);  
  },
});


export const ProductSelector = selector({
    key:'product-selector',
    get:({get})=>{
        return get(ProductsState);
    },
    set({set,get}, newValue) {
        const products = get(ProductsState)

        const updatedProducts = products.map((product) =>
            product.barcode === (newValue as IProduct[])[0].barcode
              ? { ...product, ...(newValue as IProduct[]) } 
              : product 
          );
        set(ProductsState,updatedProducts)
    },
})

export const ProductByIdSelector = selectorFamily<IProduct | undefined, string>({
    key: 'productByIdSelector',
    get: (productId: string) => ({ get }) => {
      const products = get(ProductsState);
      return products.find((product) => product.barcode.toString() === productId);
    },
  });