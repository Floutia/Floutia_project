const client_id: string = "ada2b43ffdd04e2e9d32f125913a4731";
const redirect_uri: string = "http://localhost:3000";


export default function authorize() {
  const generateRandomString = (length: number): string => {
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  };
  return <div>Authorize</div>;
}


