/** @jsxImportSource react */

import { ImageResponse } from "next/og";
import React from "react";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "DelRio";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background:
            "linear-gradient(135deg, #003566 0%, #001D3D 100%)",
          color: "white",
          fontSize: 54,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        <div>Internet Hogar | DelRio</div>

        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            opacity: 0.9,
            maxWidth: "80%",
          }}
        >
          {title}
        </div>
      </div>
    )
  );
}
