import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Parse JSON request bodies
  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // POST /api/contact endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message, honeypot } = req.body || {};

      // Basic Honeypot check
      if (honeypot) {
        return res.status(200).json({ success: true, message: "Message sent successfully" });
      }

      if (!name || typeof name !== "string" || !name.trim()) {
        return res.status(400).json({ error: "Name is required" });
      }
      if (!email || typeof email !== "string" || !email.trim()) {
        return res.status(400).json({ error: "Email is required" });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return res.status(400).json({ error: "Please provide a valid email address" });
      }
      if (!subject || typeof subject !== "string" || !subject.trim()) {
        return res.status(400).json({ error: "Subject is required" });
      }
      if (!message || typeof message !== "string" || !message.trim()) {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "RESEND_API_KEY environment variable is not configured on the server."
        });
      }

      const resend = new Resend(apiKey);
      const cleanName = name.trim();
      const cleanEmail = email.trim();
      const cleanSubject = subject.trim();
      const cleanMessage = message.trim();

      const { data, error } = await resend.emails.send({
        from: "Shanon Portfolio <onboarding@resend.dev>",
        to: ["shanondsilva2135@gmail.com"],
        replyTo: cleanEmail,
        subject: `[Portfolio Enquiry] ${cleanSubject} - from ${cleanName}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; margin: 0 auto;">
            <div style="border-bottom: 2px solid #111827; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #111827; text-transform: uppercase; letter-spacing: 0.05em;">New Portfolio Enquiry</h2>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4b5563; width: 90px; vertical-align: top;">From:</td>
                <td style="padding: 6px 0; color: #111827;">${cleanName} (&lt;<a href="mailto:${cleanEmail}" style="color: #2563eb; text-decoration: none;">${cleanEmail}</a>&gt;)</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4b5563; vertical-align: top;">Subject:</td>
                <td style="padding: 6px 0; color: #111827; font-weight: 500;">${cleanSubject}</td>
              </tr>
            </table>
            <div style="background-color: #f9fafb; border: 1px solid #f3f4f6; border-left: 4px solid #111827; border-radius: 6px; padding: 16px; margin: 16px 0; white-space: pre-wrap; font-size: 15px; color: #1f2937;">${cleanMessage}</div>
            <p style="font-size: 12px; color: #9ca3af; margin-top: 24px; border-top: 1px solid #f3f4f6; padding-top: 12px;">
              Sent from the contact form on your portfolio website. Pressing <strong>Reply</strong> in your email client will reply directly to <strong>${cleanEmail}</strong>.
            </p>
          </div>
        `
      });

      if (error) {
        console.error("Resend error response:", error);
        return res.status(500).json({ error: error.message || "Failed to send email message." });
      }

      return res.status(200).json({ success: true, data });
    } catch (err: any) {
      console.error("API /contact error:", err);
      return res.status(500).json({ error: err.message || "Internal server error" });
    }
  });

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
