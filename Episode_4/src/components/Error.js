//better way of handling error 
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    return (
        <div>
            <img src="https://cdn5.vectorstock.com/i/1000x1000/86/34/white-background-with-road-sign-error-oops-vector-16718634.jpg" alt="Error image"/>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
};

export default ErrorPage;
