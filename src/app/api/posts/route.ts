import prisma from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/utils/auth";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "");

    const POST_PER_PAGE = 2;
    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
      include: {
        category: true,
      },
    };
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: err }), { status: 500 });
  }
};

// export const POST = async (req: NextRequest) => {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     return new NextResponse(JSON.stringify({ message: "Not Authenticated" }), {
//       status: 401,
//     });
//   }
//   try {
//     const body = req.json();
//     const post = await prisma.post.create({
//       data:{...body, }
//     });

//     return new NextResponse(JSON.stringify(post), { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(JSON.stringify({ message: err }), { status: 500 });
//   }
// };
