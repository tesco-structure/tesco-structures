# Web3Forms Setup — Tesco Structures

All three website forms (Contact, Site Estimate, Careers) now submit through
**Web3Forms**. No npm package is required — they post directly to the Web3Forms API.

## What's already configured

- **Access key:** `c5e6acc2-f23f-47cf-9023-9b776e55bc34`
  (stored in `src/web3FormsConfig.js`)
- **Receiving inbox:** `hrtescostructures08@gmail.com`
  — this is set by the email you verified for this access key in your
  [web3forms.com](https://web3forms.com) account. All three forms deliver there.

That's it. There are no keys left to paste — the forms work as soon as you build
and deploy.

## How it works

Each form sends its fields (plus the access key) to `https://api.web3forms.com/submit`.

| Form     | Fields delivered                                                        |
|----------|-------------------------------------------------------------------------|
| Contact  | name, email, phone, service, message, subject                           |
| Estimate | name, email, phone, service, location, message, subject                 |
| Careers  | name, email, phone, service, location, experience, message, subject     |

A hidden `botcheck` honeypot field is included on each form for basic spam protection.

## To change the receiving email later

Log in to your Web3Forms account, update the verified email for this access key,
or generate a new access key and replace the value in `src/web3FormsConfig.js`.

## Build & deploy

```bash
npm install     # installs project deps (EmailJS removed)
npm run dev      # test locally — submit each form, check the inbox
npm run build    # production build (also copies .htaccess into dist/)
```

Upload the contents of `dist/` to your Hostinger public folder.

## Notes

- The Careers form is **text-only**. Resume file attachments are a Web3Forms **Pro**
  (paid) feature, so on the free plan the resume upload was removed. If you upgrade to
  Web3Forms Pro later, a resume `<input type="file" name="resume" />` can be added back
  to the Careers form and it will be attached automatically.
- If submissions don't arrive: confirm each access key is active in your Web3Forms
  dashboard, and that the verified inbox is correct
  (sales -> salestescostructures@gmail.com, careers -> hrtescostructures08@gmail.com).
