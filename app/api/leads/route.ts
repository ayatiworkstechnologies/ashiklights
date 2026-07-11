import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch("https://api.ayatiworks.com/api/v1/public/ashik-lights/leads/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": "8d6158982967e86fd9ff3219c057e7d62e0308f19984047ccefc55af06d1903f",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      // Return success
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "Failed to submit lead to backend" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
