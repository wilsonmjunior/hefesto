type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type UserProps = {
  user: User;
}

export function UseCard ({ user }: UserProps) {
  const { name, username, email, phone, website, address, company } = user;

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white p-6 mb-4">
      <div className="mb-4"> 
        <h5 className="font-bold text-xl mb-2 text-gray-700">{name} (@{username})</h5>
        <p className="text-gray-500 text-base"><b>Email:</b> {email}</p>
        <p className="text-gray-500 text-base">Phone: {phone}</p>
        <p className="text-gray-500 text-base">Website: {website}</p>
      </div>
      
      <div className="mb-4">
        <h5 className="font-bold mb-2 text-gray-700">Address:</h5>
        <p className="text-gray-500 text-base">{address.street}, {address.suite}</p>
        <p className="text-gray-500 text-base">{address.city}, {address.zipcode}</p>
      </div>

      <div>
        <h5 className="font-bold mb-2 text-gray-700">Company:</h5>
        <p className="text-gray-500 text-base">{company.name}</p>
        <p className="text-gray-500 text-base">Catchphrase: {company.catchPhrase}</p>
      </div>
    </div>
  );
}
