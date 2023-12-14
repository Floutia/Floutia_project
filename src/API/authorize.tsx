var client_id = 'CLIENT_ID';
var client_secret = 'CLIENT_SECRET';



interface sum {
    a: number;
    b: string;
}
type calc2 = Pick<sum, 'a' | 'b'>;

const calc: { a: number; b: string } = {
    a: 3,
    b: '4',
};

