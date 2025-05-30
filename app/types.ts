export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
		};
	};
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
	phone: string;
	website: string;
};
