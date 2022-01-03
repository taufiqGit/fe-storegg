export interface CategoryTypes {
    _id: string,
    name: string,
    __v: number
}
export interface GameItemTypes {
    _id: string,
    status: string,
    name: string,
    thumbnail: string,
    category: CategoryTypes
}


export interface BanksTypes {
    _id: string;
    name: string;
    bankName: string;
    noRekening: string;
}

export interface PaymentTypes {
    _id: string;
    type: string;
    status: string;
    banks: BanksTypes[]
}

export interface NominalsTypes {
    _id: string;
    coinQuantity: string;
    coinName: string;
    price: number;
}

export interface LoginTypes {
    email: string;
    password: string;
}

export interface UserTypes {
    avatar: string;
    email: string;
    id: string;
    phoneNumber: string;
    username: string;
}

export interface JWTPayloadTypes {
    player: UserTypes;
    iat: string;
}