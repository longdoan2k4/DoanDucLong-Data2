# DoanDucLong-Data2

Đoàn Đức Long - 2280601744
22DTHC6

## REST API - Users & Roles

Server: `http://localhost:3000`

### Roles

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | /roles | Lấy tất cả role |
| GET | /roles/:id | Lấy role theo id |
| POST | /roles | Tạo mới role |
| PUT | /roles/:id | Cập nhật role |
| DELETE | /roles/:id | Xóa role |
| GET | /roles/:id/users | Lấy tất cả user trong role |

### Users

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | /users | Lấy tất cả user |
| GET | /users/:username | Lấy user theo username |
| POST | /users | Tạo mới user |
| PUT | /users/:username | Cập nhật user |
| DELETE | /users/:username | Xóa user |
