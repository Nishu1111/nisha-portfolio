import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
//import { SanityClient } from "./sanity";
import { SanityClient } from '@sanity/client';
import { PageInfo } from "../../typing";

const query = groq`
*[_type == "pageInfo"][0]
`

type Data = {
  pageInfo: PageInfo[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const pageInfo: PageInfo[] = await (SanityClient as any).fetch("query");
    res.status(200).json({ pageInfo })
}