import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span className="not-found-code">404</span>
      <h1>This page took a wrong turn.</h1>
      <p>The page may have moved, or the link may not be quite right.</p>
      <Link className="button" href="/">Back to the homepage <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
