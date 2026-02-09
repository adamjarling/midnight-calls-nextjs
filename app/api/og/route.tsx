/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams, host, protocol } = new URL(req.url);

  const cover = `${protocol}//${host}/_next/image?url=${encodeURIComponent(
    searchParams.get("cover") || "/images/IMG_9823.jpg"
  )}&w=1200&q=75`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#e2e8f0",
          alignItems: "stretch",
        }}
      >
        <img
          src={cover}
          alt=""
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
