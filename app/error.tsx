"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Page rendering error.", error);
  }, [error]);

  return (
    <main className="not-found">
      <span className="not-found-code">Oops</span>
      <h1>We couldn’t load this page.</h1>
      <p>Please try again. If the problem continues, return to the homepage and get in touch.</p>
      <div className="error-actions"><button className="button" type="button" onClick={() => reset()}>Try again <span aria-hidden="true">↻</span></button><Link className="text-link" href="/">Go to homepage <span aria-hidden="true">↗</span></Link></div>
    </main>
  );
}
