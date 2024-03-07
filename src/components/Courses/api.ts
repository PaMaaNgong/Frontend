export async function fetchCourseData(courseId: string) {
  try {
    const response = await fetch(
      `https://whale-app-3xvcg.ondigitalocean.app/v1/course/${courseId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching course data:", error);
    throw error;
  }
}
export async function getRatings(courseId: string) {
  try {
    const response = await fetch(
      `https://whale-app-3xvcg.ondigitalocean.app/v1/course/${courseId}/reviews`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching course data:", error);
    throw error;
  }
}
