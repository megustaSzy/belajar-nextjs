// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: boolean,
    statusCode: number,
    data: { 
        id: number,
        name: string,
        price: number,
        stok: number
    }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) 
{
    const data = [
        {
            id: 1,
            name: "Pulpen",
            price: 2000,
            stok: 20
        },
        {
            id: 2,
            name: "Pensil",
            price: 1000,
            stok: 10
        }
    ];
        
    res.status(200).json({status: true, statusCode:200, data });
}
