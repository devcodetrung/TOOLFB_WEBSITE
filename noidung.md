# Quy trình kết nối extension lấy dữ liệu Facebook và truyền sang web app

## 1. Extension lấy dữ liệu Facebook
- Extension inject script vào trang Facebook hoặc popup extension.
- Lấy token và thông tin user (tên, UID, email, avatar, ngày sinh, bạn bè, giới tính...)
- Ví dụ lấy token từ cookie/localStorage hoặc gọi API Facebook bằng token đã có.

## 2. Extension gửi dữ liệu sang web app
Có 3 cách phổ biến:

### a. Qua `window.postMessage`
```js
window.postMessage({
  type: 'FB_TOKEN',
  payload: {
    token: '...',
    name: 'Trần Văn Trung',
    uid: '100054628290553',
    email: 'abc@gmail.com',
    avatar: 'https://...',
    birthday: '01/11/2003',
    friends: 1959,
    gender: 'Nam'
  }
}, '*');
```

### b. Qua `localStorage`
```js
localStorage.setItem('fb_user', JSON.stringify({ ...thông tin user... }));
```

### c. Qua API backend riêng
```js
fetch('https://your-backend.com/api/fbuser', {
  method: 'POST',
  body: JSON.stringify({ ...thông tin user... }),
  headers: { 'Content-Type': 'application/json' }
});
```

## 3. Web app (React/Next.js) nhận dữ liệu

### a. Nhận qua `window.postMessage`
```js
useEffect(() => {
  function handleMessage(event) {
    if (event.data && event.data.type === 'FB_TOKEN') {
      setUserInfo(event.data.payload); // setState hoặc context
    }
  }
  window.addEventListener('message', handleMessage);
  return () => window.removeEventListener('message', handleMessage);
}, []);
```

### b. Đọc từ `localStorage`
```js
useEffect(() => {
  const data = localStorage.getItem('fb_user');
  if (data) setUserInfo(JSON.parse(data));
}, []);
```

### c. Qua API backend
```js
useEffect(() => {
  fetch('/api/fbuser')
    .then(res => res.json())
    .then(data => setUserInfo(data));
}, []);
```

## 4. Đổ dữ liệu vào giao diện React
```js
const [userInfo, setUserInfo] = useState(null);
// ... nhận dữ liệu như trên
// ... trong JSX:
{userInfo && (
  <div>
    <img src={userInfo.avatar} />
    <div>{userInfo.name}</div>
    <div>{userInfo.uid}</div>
    {/* ... */}
  </div>
)}
```

---

**Tóm tắt:**
1. Extension lấy token/thông tin user Facebook.
2. Extension gửi dữ liệu sang web app (qua postMessage, localStorage, hoặc API).
3. Web app lắng nghe và nhận dữ liệu, cập nhật vào state/context.
4. Giao diện React hiển thị thông tin user vừa nhận được.
