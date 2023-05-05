import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container-fluid pt-5 text-center mb-4">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFound;
