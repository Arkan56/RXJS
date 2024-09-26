import { Reactions } from "./Reactions";

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    views: number;
    userid: number;
    reactions: Reactions;
}