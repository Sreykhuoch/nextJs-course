
import { prisma } from "../prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    const res = await prisma.student.findMany();

    return NextResponse.json({
        status : 200,
        message: "get data successfully",
        payload : res,
    });
}