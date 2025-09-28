export async function getData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    throw new Error(errorMsg);
  }
}
