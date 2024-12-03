export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const { tickets } = await response.json(); // Extract the tickets array from the response
    return tickets;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
