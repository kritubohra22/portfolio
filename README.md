# Kirti Bohara Portfolio

React + Vite portfolio with a responsive layout and EmailJS contact form.

## Run locally

```bash
npm install
npm run dev
```

## Contact form setup

1. Create an EmailJS account.
2. Create an email service and email template.
3. In the project root, create a `.env` file.
4. Add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Restart the Vite server after changing `.env`.

The template should use these variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`

For deployment, add the same three `VITE_` environment variables in your hosting provider's project settings before building.
