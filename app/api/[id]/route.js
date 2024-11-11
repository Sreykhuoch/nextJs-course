import prisma from "@/app/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(request,{params :{id}} ) 
{
 const res = await prisma.student.findUnique({
    where: {
        id : parseInt(id),
    },
 });

 return NextResponse.json({
    stattus : 200,
    message : "get studdent id sucessfully",
    payload: res

 })
    
}

export async function DELETE(request,{params :{id}} ) 
{
 const res = await prisma.student.delete({
    where: {
        id : parseInt(id),
    },
 });

 return NextResponse.json({
    stattus : 200,
    message : "delete studdent id sucessfully",
    payload: res

 })
    
}