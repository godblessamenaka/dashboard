export class Client {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	country: string;
	dob: string;
	stylist: string;
	status: string;
	receivesInvoice: boolean;
	trackCustomer: boolean;
	dailyEmail: number;
	specialEmail: boolean;
	shoppingBagEmail: boolean;
	vipEmail: boolean;
	designers: string[];
}

// daily email logic:
// 0 = unsubscribe
// 1 = every day
// 2 = just friday
// 3 = fri and sunday
