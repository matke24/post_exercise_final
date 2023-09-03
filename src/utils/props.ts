export interface PostProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface CardProps {
  postId: number;
  title: string;
  body: string;
  author: string;
}

export interface CommentProps {
  postId?: number;
  id?: number;
  name?: string;
  email: string;
  body: string;
}

export interface UserMapProps {
  [id: number]: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
}

interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}
