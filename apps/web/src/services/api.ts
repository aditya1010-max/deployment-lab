const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export async function getMessage() {
  const response = await fetch(`${API_URL}/api/message`);

  if (!response.ok) {
    throw new Error("Failed to fetch message");
  }

  return response.json();
}