import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
//import { SanityClient } from "./sanity";
import { SanityClient } from '@sanity/client';
import { Experience } from "../../typing";

const query = groq`
*[_type == "experience"] {
  ...,
  technologies[]->
}
`;

type Data = {
  experience: Experience[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const experience: Experience[] = await (SanityClient as any).fetch("query");
    res.status(200).json({ experience })
}