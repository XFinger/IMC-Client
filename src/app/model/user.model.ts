export interface UserModel { 
    id?: number;
    username?: string;
    password: string;
    avatar_url?: string;
    email: string;
    avatar?: Avatar;
    created_at?: Date;
}
    interface Thumb {
      url: string;
}

    interface Micro {
      url: string;
}

    interface Avatar {
      url: string;
      thumb: Thumb;
      micro: Micro;
}

