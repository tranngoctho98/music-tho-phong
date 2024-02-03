import { LoaderFunctionArgs } from "react-router-dom";

const fetchData = async (courseId?: string) => {
  try {
    const url = "/jsons/course-details/course-" + courseId + ".json";
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

function getCourse(courseId?: string) {
  return fetchData(courseId);
}

interface CourseLoaderParam {
  contactId: string;
}

export default async function loader({
  params,
}: LoaderFunctionArgs<CourseLoaderParam>) {
  return getCourse(params.courseId);
}
