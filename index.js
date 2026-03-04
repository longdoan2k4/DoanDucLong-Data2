const express = require("express");
const app = express();
app.use(express.json());

let dataRole = [
  {
    "id": "r1",
    "name": "Quản trị viên",
    "description": "Toàn quyền quản lý hệ thống",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": "r2",
    "name": "Biên tập viên",
    "description": "Quản lý nội dung và dữ liệu",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": "r3",
    "name": "Người dùng",
    "description": "Tài khoản người dùng thông thường",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  }
];

let dataUser = [
  {
    "username": "nguyenvana",
    "password": "123456",
    "email": "vana@gmail.com",
    "fullName": "Nguyễn Văn A",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 15,
    "role": { "id": "r1", "name": "Quản trị viên", "description": "Toàn quyền quản lý hệ thống" },
    "creationAt": "2026-03-04T08:10:00.000Z",
    "updatedAt": "2026-03-04T08:10:00.000Z"
  },
  {
    "username": "tranthib",
    "password": "123456",
    "email": "thib@gmail.com",
    "fullName": "Trần Thị B",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 7,
    "role": { "id": "r2", "name": "Biên tập viên", "description": "Quản lý nội dung và dữ liệu" },
    "creationAt": "2026-03-04T08:11:00.000Z",
    "updatedAt": "2026-03-04T08:11:00.000Z"
  },
  {
    "username": "levanc",
    "password": "123456",
    "email": "vanc@gmail.com",
    "fullName": "Lê Văn C",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 3,
    "role": { "id": "r3", "name": "Người dùng", "description": "Tài khoản người dùng thông thường" },
    "creationAt": "2026-03-04T08:12:00.000Z",
    "updatedAt": "2026-03-04T08:12:00.000Z"
  },
  {
    "username": "phamthid",
    "password": "123456",
    "email": "thid@gmail.com",
    "fullName": "Phạm Thị D",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": false,
    "loginCount": 0,
    "role": { "id": "r3", "name": "Người dùng", "description": "Tài khoản người dùng thông thường" },
    "creationAt": "2026-03-04T08:13:00.000Z",
    "updatedAt": "2026-03-04T08:13:00.000Z"
  },
  {
    "username": "hoanganh",
    "password": "123456",
    "email": "anh@gmail.com",
    "fullName": "Hoàng Anh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 2,
    "role": { "id": "r3", "name": "Người dùng", "description": "Tài khoản người dùng thông thường" },
    "creationAt": "2026-03-04T08:14:00.000Z",
    "updatedAt": "2026-03-04T08:14:00.000Z"
  },
  {
    "username": "dangminh",
    "password": "123456",
    "email": "minh@gmail.com",
    "fullName": "Đặng Minh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 9,
    "role": { "id": "r2", "name": "Biên tập viên", "description": "Quản lý nội dung và dữ liệu" },
    "creationAt": "2026-03-04T08:15:00.000Z",
    "updatedAt": "2026-03-04T08:15:00.000Z"
  },
  {
    "username": "phamkhoa",
    "password": "123456",
    "email": "khoa@gmail.com",
    "fullName": "Phạm Quốc Khoa",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 1,
    "role": { "id": "r3", "name": "Người dùng", "description": "Tài khoản người dùng thông thường" },
    "creationAt": "2026-03-04T08:16:00.000Z",
    "updatedAt": "2026-03-04T08:16:00.000Z"
  },
  {
    "username": "truonglinh",
    "password": "123456",
    "email": "linh@gmail.com",
    "fullName": "Trương Linh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": false,
    "loginCount": 0,
    "role": { "id": "r3", "name": "Người dùng", "description": "Tài khoản người dùng thông thường" },
    "creationAt": "2026-03-04T08:17:00.000Z",
    "updatedAt": "2026-03-04T08:17:00.000Z"
  },
  {
    "username": "doquang",
    "password": "123456",
    "email": "quang@gmail.com",
    "fullName": "Đỗ Quang",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 4,
    "role": { "id": "r2", "name": "Biên tập viên", "description": "Quản lý nội dung và dữ liệu" },
    "creationAt": "2026-03-04T08:18:00.000Z",
    "updatedAt": "2026-03-04T08:18:00.000Z"
  },
  {
    "username": "ngocanh",
    "password": "123456",
    "email": "ngocanh@gmail.com",
    "fullName": "Ngọc Anh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 6,
    "role": { "id": "r1", "name": "Quản trị viên", "description": "Toàn quyền quản lý hệ thống" },
    "creationAt": "2026-03-04T08:19:00.000Z",
    "updatedAt": "2026-03-04T08:19:00.000Z"
  }
];

// ==================== ROLES ====================

// GET /roles - Lấy tất cả role
app.get("/roles", (req, res) => {
  res.json(dataRole);
});

// GET /roles/:id - Lấy role theo id
app.get("/roles/:id", (req, res) => {
  const role = dataRole.find((r) => r.id === req.params.id);
  if (!role) return res.status(404).json({ message: "Role không tồn tại" });
  res.json(role);
});

// POST /roles - Tạo mới role
app.post("/roles", (req, res) => {
  const { id, name, description } = req.body;
  if (!id || !name) {
    return res.status(400).json({ message: "id và name là bắt buộc" });
  }
  const existed = dataRole.find((r) => r.id === id);
  if (existed) return res.status(409).json({ message: "Role đã tồn tại" });
  const now = new Date().toISOString();
  const newRole = { id, name, description: description || "", creationAt: now, updatedAt: now };
  dataRole.push(newRole);
  res.status(201).json(newRole);
});

// PUT /roles/:id - Cập nhật role
app.put("/roles/:id", (req, res) => {
  const index = dataRole.findIndex((r) => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Role không tồn tại" });
  const { name, description } = req.body;
  const now = new Date().toISOString();
  dataRole[index] = {
    ...dataRole[index],
    name: name ?? dataRole[index].name,
    description: description ?? dataRole[index].description,
    updatedAt: now,
  };
  res.json(dataRole[index]);
});

// DELETE /roles/:id - Xóa role
app.delete("/roles/:id", (req, res) => {
  const index = dataRole.findIndex((r) => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Role không tồn tại" });
  const deleted = dataRole.splice(index, 1)[0];
  res.json({ message: "Xóa thành công", data: deleted });
});

// GET /roles/:id/users - Lấy tất cả user thuộc role
app.get("/roles/:id/users", (req, res) => {
  const role = dataRole.find((r) => r.id === req.params.id);
  if (!role) return res.status(404).json({ message: "Role không tồn tại" });
  const users = dataUser.filter((u) => u.role.id === req.params.id);
  res.json(users);
});

// ==================== USERS ====================

// GET /users - Lấy tất cả user
app.get("/users", (req, res) => {
  res.json(dataUser);
});

// GET /users/:username - Lấy user theo username
app.get("/users/:username", (req, res) => {
  const user = dataUser.find((u) => u.username === req.params.username);
  if (!user) return res.status(404).json({ message: "User không tồn tại" });
  res.json(user);
});

// POST /users - Tạo mới user
app.post("/users", (req, res) => {
  const { username, password, email, fullName, avatarUrl, status, loginCount, role } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ message: "username, password và email là bắt buộc" });
  }
  const existed = dataUser.find((u) => u.username === username);
  if (existed) return res.status(409).json({ message: "Username đã tồn tại" });
  const now = new Date().toISOString();
  const newUser = {
    username,
    password,
    email,
    fullName: fullName || "",
    avatarUrl: avatarUrl || "",
    status: status !== undefined ? status : true,
    loginCount: loginCount || 0,
    role: role || null,
    creationAt: now,
    updatedAt: now,
  };
  dataUser.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:username - Cập nhật user
app.put("/users/:username", (req, res) => {
  const index = dataUser.findIndex((u) => u.username === req.params.username);
  if (index === -1) return res.status(404).json({ message: "User không tồn tại" });
  const { password, email, fullName, avatarUrl, status, loginCount, role } = req.body;
  const now = new Date().toISOString();
  dataUser[index] = {
    ...dataUser[index],
    password: password ?? dataUser[index].password,
    email: email ?? dataUser[index].email,
    fullName: fullName ?? dataUser[index].fullName,
    avatarUrl: avatarUrl ?? dataUser[index].avatarUrl,
    status: status !== undefined ? status : dataUser[index].status,
    loginCount: loginCount !== undefined ? loginCount : dataUser[index].loginCount,
    role: role ?? dataUser[index].role,
    updatedAt: now,
  };
  res.json(dataUser[index]);
});

// DELETE /users/:username - Xóa user
app.delete("/users/:username", (req, res) => {
  const index = dataUser.findIndex((u) => u.username === req.params.username);
  if (index === -1) return res.status(404).json({ message: "User không tồn tại" });
  const deleted = dataUser.splice(index, 1)[0];
  res.json({ message: "Xóa thành công", data: deleted });
});

// ==================== START SERVER ====================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
