import { NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

// export async function GET(request) {
//   try {
//     await connect();
//     const posts = await Post.find();
//     return new NextResponse(JSON.stringify(posts), { status: 200 });
//   } catch (error) {
//     return new NextResponse("Connection to the database failed", {
//       status: 500,
//     });
//   }
// }

export async function POST(request) {
  const { name, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await connect();
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
}
