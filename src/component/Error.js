
import { useRouteError } from "react-router-dom";
const Error = () => {
const err = useRouteError();
const {status, data} = err;
console.log(err);
    return (
        <div>
            <h1>Oops, something went wrong</h1>
            <p>Please try again later</p>
            <h2>{`The error is ${status} because ${data}`}</h2>
        </div>
    )
}

export default Error;