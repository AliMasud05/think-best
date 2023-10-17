import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get("id");
  const username = url.searchParams.get("username");

  try {
    await connect(); // Connect to your database

    let query = {};

    if (postId) {
      query = { _id: postId }; // Search by ID
    } else if (username) {
      query = { username }; // Search by username
    }

    const posts = await Post.find(query);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get("id");

  const requestBody = await request.text();
  const updatedData = JSON.parse(requestBody);

  try {
    await connect(); // Connect to your database

    const existingPost = await Post.findById(postId);

    if (!existingPost) {
      return new NextResponse("Post not found", { status: 404 });
    }

    const data = await Post.findByIdAndUpdate(postId,updatedData)

    return new NextResponse("Post has been updated", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};





// export const GET = async (request) => {
//   const url = new URL(request.url);
//   const postId = url.searchParams.get("id"); // Assuming 'id' is the query parameter for the ID

//   try {
//     await connect(); // Connect to your database

//     const post = await Post.findById(postId); // Use the 'findById' method to query by ID

//     if (!post) {
//       return new NextResponse("Post not found", { status: 404 });
//     }

//     return new NextResponse(JSON.stringify(post), { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const DELETE = async (request) => {
  const postId = request.nextUrl.searchParams.get("id");

  try {
      await connect(); // Connect to your database
      
      const post = await Post.findByIdAndDelete(postId); // Find and delete the post by its ID
      
      if (!post) {
          return new NextResponse("Post not found", { status: 404 });
        }

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

