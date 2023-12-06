import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
//import { SanityClient } from "./sanity";
import { SanityClient } from '@sanity/client';
import { PageInfo, Social } from "../../typing";

const query = groq`
*[_type == "Social"]
`

type Data = {
  socials: Social[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const socials: Social[] = await (SanityClient as any).fetch("query");
    res.status(200).json({ socials })
}