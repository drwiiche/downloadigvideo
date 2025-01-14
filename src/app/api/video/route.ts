import { NextResponse } from "next/server";

import { VideoInfo } from "@/types";
import { Exception } from "@/lib/exceptions";
import { fetchPostJson } from "@/lib/instagram";
import { getPostId } from "@/lib/instagram/helpers";
import { makeErrorResponse, makeSuccessResponse } from "@/utils";

import { enableServerAPI } from "@/configs/instagram";

function handleError(error: any) {
  if (error instanceof Exception) {
    const response = makeErrorResponse(error.message);
    return NextResponse.json(response, { status: error.code });
  } else {
    console.error(error);
    const response = makeErrorResponse();
    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET(request: Request) {
  if (!enableServerAPI) {
    return NextResponse.json({ error: "Not Implemented" }, { status: 501 });
  }

  const { searchParams } = new URL(request.url);
  const url: string | null = searchParams.get("url");

  try {
    const postId = getPostId(url);
    const postJson = await fetchPostJson(postId);
    const response = makeSuccessResponse<VideoInfo>(postJson);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
}
