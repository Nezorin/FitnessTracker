import { Link } from "react-router-dom";

//Maybe use <a> instead of Link
export default function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <strong>Page not found</strong>
      <Link to="/"> Go back to Home page</Link>
    </div>
  );
}
