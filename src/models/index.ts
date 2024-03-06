export type CourseType = "me" | "fe" | "ge";

export type CourseOverview = {
  id: string;
  name_th: string;
  name_en: string;
  type: CourseType;
  total_reviews: number;
  rating: number;
};

export type CourseDetail = CourseOverview & {
  description: string;
  lecturers: string[];
  location: string;
  schedule: CourseTime;
  rooms: string[];
  credit: CourseCredit;
};

export type Day = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type CourseTime = {
  start_hour: number;
  start_minute: number;
  end_hour: number;
  end_minute: number;
  days: Day[];
};

export type CourseCredit = {
  lecture: number;
  lab: number;
};

export type Grade =
  | "A"
  | "B+"
  | "B"
  | "C+"
  | "C"
  | "D+"
  | "D"
  | "F"
  | "W"
  | "-";

export type ReviewOverview = {
  rating: number;
  grade: Grade;
};

export type GradingMethod = "midterm" | "Final";
export type Semester = "1" | "2" | "3";

export type ReviewDetail = ReviewOverview & {
  content: string;
  classroom_environment: string;
  examination_format: string;
  exercise_format: string;
  grading_method: GradingMethod[];
  semester: Semester;
  year: number;
};
