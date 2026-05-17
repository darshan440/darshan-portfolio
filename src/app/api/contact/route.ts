import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    // 2. Check environment variable
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is missing in environment variables.");
      return NextResponse.json(
        { 
          success: false, 
          message: "Unable to send message: Contact form access key is not configured on the server." 
        },
        { status: 500 }
      );
    }

    // 3. Forward submission to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        message: message,
        subject: `New Message from Portfolio Contact Form - ${name}`,
        from_name: "Portfolio Contact Form",
      }),
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error("Failed to parse Web3Forms response as JSON. Response text was:", responseText);
      return NextResponse.json(
        { 
          success: false, 
          message: `Failed to communicate with the mail server. Server response: ${responseText.slice(0, 300)}` 
        },
        { status: 502 }
      );
    }

    if (response.ok && data.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      console.error("Web3Forms API Error:", data);
      return NextResponse.json(
        { success: false, message: data.message || "Failed to forward message via Web3Forms API." },
        { status: response.status || 500 }
      );
    }
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred while sending your message." },
      { status: 500 }
    );
  }
}
