# Setting up EmailJS for Your Contact Form

This guide will help you set up EmailJS to send emails from your contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down the Service ID

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template using the variables from your form:
   - `{{name}}` - The sender's name
   - `{{email}}` - The sender's email
   - `{{message}}` - The message content
4. Save the template and note down the Template ID

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your Public Key

## Step 5: Update Your Code

Replace the placeholders in your Contact.jsx file:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Important Security Note

The EmailJS public key is designed to be used in client-side code. However, for production applications with high email volume, consider implementing a server-side solution for better security and control.