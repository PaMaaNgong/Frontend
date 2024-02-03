import { AxiosResponse } from "axios";
import Repository from ".";
import { CourseDetail, CourseOverview, ReviewDetail, ReviewOverview } from "../models";

export type Response<T> = Promise<AxiosResponse<T>>

export async function getCourses(offset: number = 0, limit: number = 10): Response<CourseOverview[]> {
    return Repository.get(`/courses?offset=${offset}&limit=${limit}`);
}

export async function getCourseById(id: string): Response<CourseDetail> {
    return Repository.get(`/course/${id}`);
}

export async function getReviews(id: string, offset: number = 0, limit: number = 10): Response<ReviewOverview[]> {
    return Repository.get(`/course/${id}/reviews?offset=${offset}&limit=${limit}`);
}

export async function postReview(id: string, body: ReviewDetail): Response<void> {
    return Repository.post(`/course/${id}/reviews`, body);
}

export async function getReviewDetail(id: string, offset: number = 0, limit: number = 40): Response<ReviewDetail[]> {
    return Repository.get(`/course/${id}/reviews/detail?offset=${offset}&limit=${limit}`);
}