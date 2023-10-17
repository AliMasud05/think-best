 import User from "@/models/User";
import connect from "@/utils/db";
 import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {

   const { name, email, password,role } = await request.json();
  
   await connect();

   const hashedPassword = await bcrypt.hash(password, 5);

   const newUser = new User({
    role,
    name,
    email,
    password: hashedPassword,
    
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
export const GET = async (request) => {  
  
   await connect();

  

  let query = {};
  try {
    const user = await User.find(query)
     return new NextResponse(JSON.stringify(user), { status: 200 });

  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request) => {
  const postId = request.nextUrl.searchParams.get("id");

  try {
    await connect(); // Connect to your database

    const post = await User.findByIdAndDelete(postId); // Find and delete the post by its ID

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse("user has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

