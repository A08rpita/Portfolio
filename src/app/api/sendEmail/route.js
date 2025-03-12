import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate input fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "All fields are required!" }), { status: 400 });
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email
    const response = await resend.emails.send({
      from: "Arpita <onboarding@resend.dev>", // Use this test email
      to: ["arpitakhobragade2308@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // Log response for debugging
    console.log("Resend Response:", response);

    // ✅ FIX: Properly check for errors
    if (response.error) {
      return new Response(JSON.stringify({ success: false, error: response.error.message || "Failed to send email." }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });

  } catch (error) {
    console.error("Resend Error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
