import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
//import { SanityClient } from "./sanity";
import { SanityClient } from '@sanity/client';
import { Skill } from "../../typing";

const query = groq`
*[_type == "skill"]
`

type Data = {
  skills: Skill[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const skills: Skill[] = await (SanityClient as any).fetch("query");
    res.status(200).json({ skills })
}