# ⏳ Instagram Blocker/Redirector Extension

A Chrome extension that helps you stay focused by **redirecting Instagram to [pomofocus.io](https://pomofocus.io)** during your working hours (9AM–12AM).

---

## 📌 What It Does

Between **9:00 AM and 12:00 AM**, every time you try to open [instagram.com](https://instagram.com), you'll be automatically redirected to [https://pomofocus.io](https://pomofocus.io) — a great online Pomodoro timer.

Outside those hours, Instagram will work normally.

---

## 🛠 How to Install

1. Clone or download this repository.
2. Open **Chrome** and go to: `chrome://extensions`
3. Turn on **Developer mode** (top right).
4. Click **"Load unpacked"**
5. Select the folder where you saved this extension.

Done! 🎉

---

## 🔄 How It Works

- Uses Chrome’s `declarativeNetRequest` API to set up a redirect rule for Instagram.
- A background service worker checks the time:
  - If it's between 9AM and 12AM, the redirect rule is enabled.
  - Otherwise, the rule is disabled.

---

---

## ✨ Future Ideas

- Add a popup toggle to enable/disable manually
- Let users customize the redirect hours
- Support Firefox and Edge

---

## 🙌 Credits

Created by [suliahmed.com] — because focus matters.  
Inspired by digital minimalism and Pomodoro flow 🔥

---

## 📜 License

MIT
