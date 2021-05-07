import { Router } from 'express';

const router = Router();

function loadScript() {
  console.log('script is loaded');
}
window.onload = loadScript;

router.route('/api/animals')
  .post(async (req, res) => {
    console.log('POST request detected');
    console.log('Form data in res.body', req.body);
    console.log('Now send something back to your client');
    res.json({message: 'Form Submitted!'});
  });