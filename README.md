# Chat App

## Application Description

The goal was to create a chat app using Vue.js, Vue Router for routing, the Pinia state management tool, and the Element Plus UI library.

### Implemented features
- **Chat list sidebar** - displays all conversations
- **Chat creation** - user can create a new chat and start messaging the bot
- **Chat selection** - updates URL (`/chat/:id`) and highlights an active chat
- **Message display** - shows messages for selected chat
- **Send messages** - user can send a message to the bot by using textarea with validation (non-empty)
- **Pseudo bot simulation** - auto-reply after user message
- **Storage** - messages stored in Pinia

### Decisions
- **Composables** - extracted message logic, chat logic, and bot logic from components
- **Pinia store** - centralized state for chats, messages, active chat ID
- **Router** - ability to navigate between chats

## TODOs

- **To add back-end and db** - create a back-end project, add database. Back-end should communicate with the client;
- **WebSockets** - replace simulated bot with real-time communication with users;
- **Virtual scrolling** - optimize rendering of the messages and chats;
- **"Favorites" tab** - using dynamic components. Add categories for the chats - "Favourite" and "All"
- **Deployment to GitHub Pages or any other platform**

## How to Run

```bash
npm install
npm run dev
