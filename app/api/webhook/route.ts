import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  // Move this to env variable in production
  const VERIFY_TOKEN = process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN;

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      return new NextResponse(challenge, { status: 200 });
    } else {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return new NextResponse("Bad Request", { status: 400 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Instagram Webhook Event:", JSON.stringify(body, null, 2));

    // Process the webhook payload
    if (body.object === "instagram") {
      for (const entry of body.entry) {
        // Iterate over changes
        for (const change of entry.changes) {
          const field = change.field;
          const value = change.value;

          console.log(`Received update for field: ${field}`);
          console.log("Value:", value);

          // Handle specific fields here (e.g., messages, comments)
        }
      }
    }

    return new NextResponse("EVENT_RECEIVED", { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
