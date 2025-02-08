import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const note = formData.get("note");
        const files = formData.getAll("images");

        // SMTP-server
        const transporter = nodemailer.createTransport({
            service: "", // TODO: SMTP-server
            auth: {
                user: process.env.EMAIL_USER, // TODO
                pass: process.env.EMAIL_PASS, // TODO
    },
        });

        let attachments = [];
        if (files.length > 0) {
            attachments = files.map((file) => ({
                filename: file.name,
                content: file,
            }));
        }


        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "marika.pusova@lifestore.cz", // TODO: target mail
            subject: "Nová zpráva z kontaktního formuláře pro potenciální zaměstnance",
            text: `
                Jméno: ${name}
                Email: ${email}
                Telefon: ${phone}
                Zpráva: ${note}
            `,
            attachments: attachments,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: "E-mail byl úspěšně odeslán" }), { status: 200 });
    } catch (error) {
        console.error("Chyba při odesílání e-mailu:", error);
        return new Response(JSON.stringify({ error: "E-mail se nepodařilo odeslat" }), { status: 500 });
    }
}
