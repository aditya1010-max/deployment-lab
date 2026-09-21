import { useEffect, useState } from "react";

import { getMessage } from "../services/api";

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getMessage()
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch(() => {
        setError("Unable to connect to API");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Deployment Lab</h1>
      <p>{message}</p>
    </main>
  );
}