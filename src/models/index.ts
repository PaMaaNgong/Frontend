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
  id: number;
  rating: number;
  grade: Grade;
  content: string;
};

export type GradingMethod = "midterm" | "Final";
export type Semester = "1" | "2" | "3";

export type format_exam = "objective" | "subjective";
export type difficulty = "easy" | "normal" | "hard";
export type ExaminationInfo = {
  format: format_exam[];
  difficulty: difficulty;
};

export type format_exercise = "group" | "individual";
export type ExerciseInfo = {
  format: format_exercise[];
  difficulty: difficulty;
};

export type ReviewDetail = ReviewOverview & {
  id: number;
  rating: number;
  grade: string;
  content: string;
  owner: number;
  other: string;
  classroom_environment: string;
  examination_format: ExaminationInfo;
  exercise_format: ExerciseInfo;
  grading_method: GradingMethod[];
  semester: Semester;
  year: number;
};
