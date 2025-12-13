# EmailJS Setup Instructions

To enable contact form email sending, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## 2. Set up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and grant permissions
5. Note down the **Service ID** (e.g., `service_xxxxxxx`)

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_email}}` - Your email (waqogodana98@gmail.com)

   Example template:
   ```
   Subject: New Contact Form Message - {{subject}}

   Hi Wako,

   You have received a new message from your website contact form:

   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}

   Message:
   {{message}}

   Best regards,
   Your Website
   ```

4. Save the template and note down the **Template ID** (e.g., `template_xxxxxxx`)

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxx`)

## 5. Update Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Form
1. Run your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email (waqogodana98@gmail.com) for the message

## Troubleshooting
- Make sure all environment variables are set correctly
- Check the browser console for any errors
- Verify your EmailJS account has sending limits (free tier: 200 emails/month)
- Ensure your email service is properly connected

## Alternative Solutions
If EmailJS doesn't work for you, consider:
- **Formspree**: https://formspree.io/
- **Netlify Forms**: If deploying to Netlify
- **Custom backend**: Set up your own API endpoint

The contact form will show an error message if EmailJS is not configured properly, but users can still contact you directly via the email link.