import { Reactions } from "./Reactions";
import { Comment } from "./Comment";

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    views: number;
    userid: number;
    reactions: Reactions;
    comments: Comment[];
}