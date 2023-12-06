import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
//import { SanityClient } from "./sanity";
import { SanityClient } from '@sanity/client';
import { Project } from "../../typing";

const query = groq`
*[_type == "project"] {
  ...,
  technologies[]->
}
`;

type Data = {
  projects: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const projects: Project[] = await (SanityClient as any).fetch("query");
    res.status(200).json({ projects })
}