import json
import uuid
from datetime import datetime
import os
import random

names = [
    'Trần Thị Thanh Huyền',
    'Lê Văn Quốc Bảo',
    'Nguyễn Thị Hà My',
    'Phạm Đức Minh',
    'Võ Thị Thanh Trúc',
    'Huỳnh Công Danh',
    'Phan Thị Ngọc Linh',
    'Trương Hoàng Phúc',
    'Đặng Minh Quân',
    'Lý Hoàng Ân'
]

# Danh sách địa chỉ
addresses = ['123 Nguyễn Văn Cừ, Quận 1, TP. Hồ Chí Minh', 
             '45 Lê Duẩn, Quận Hai Bà Trưng, Hà Nội', 
             '789 Trần Hưng Đạo, Quận 5, TP. Hồ Chí Minh',
             '21 Nguyễn Trãi, Quận Thanh Xuân, Hà Nội', '56 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
             '112 Lê Văn Lương, Quận 7, TP. Hồ Chí Minh', '67 Trần Phú, Quận Hải Châu, Đà Nẵng', 
             '34 Nguyễn Văn Linh, Quận Hải Châu, Đà Nẵng', '89 Lê Lợi, Quận Ngô Quyền, Hải Phòng',
             '145 Điện Biên Phủ, Quận Bình Thạnh, TP. Hồ Chí Minh']

# Danh sách kinh nghiệm
experiences = ['5 năm kinh nghiệm làm bác sĩ nhi khoa', '3 năm kinh nghiệm làm điều dưỡng', 'Mới tốt nghiệp ngành y tế công cộng', '8 năm kinh nghiệm làm bác sĩ phẫu thuật', '2 năm kinh nghiệm làm nhân viên y tế', '6 năm kinh nghiệm làm bác sĩ gia đình', '4 năm kinh nghiệm làm dược sĩ', 'Mới tốt nghiệp cao đẳng điều dưỡng', '10 năm kinh nghiệm làm bác sĩ răng hàm mặt', '3 năm kinh nghiệm làm kỹ thuật viên xét nghiệm']

# Danh sách chứng chỉ
certificates = ['Board Certification in Internal Medicine, IELTS 9.0 Australia', 'TOEIC 950, IELTS 8.0 Australia', 'IELTS 7.5 Canada', 'TOEFL iBT 110, IELTS 8.5 Australia', 'IELTS 7.0 New Zealand', 'TOEIC 900, IELTS 8.0 UK', 'IELTS 8.5 Canada', 'TOEFL iBT 105, IELTS 7.5 UK', 'TOEIC 950, IELTS 9.0 Australia', 'IELTS 8.0 New Zealand']

# Danh sách giới tính
genders = ['female', 'male']

def convert_to_new_obj(obj_with_index):
    index, obj = obj_with_index
    id = str(uuid.uuid4())
    fullName = obj['ten']
    email = obj['email']
    password = "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a"
    phone = "0967688" +str(random.randint(100, 999))
    gender = obj['gioiTinh']
    address = obj['diaChi']
    # experience =  obj['kinhNghiem']
    # certificate = obj['chungChi']
    # roleId = "fad3735b-c6b6-4e52-8e35-d965291eba93"
    # academicDegreeId = obj['academic']
    # specialistId = obj['specialistId']
    createdAt = datetime.now().isoformat() + "Z"
    updatedAt = createdAt

    return {
        "id": id,
        "fullName": fullName,
        "email": email,
        "password": password,
        "phone": phone,
        "address": address,
        "gender": gender,
        # "experience": experience,
        # "certificate": certificate,
        # "roleId": roleId,
        # "academicDegreeId": academicDegreeId,
        # "specialistId": specialistId,
        "createdAt": createdAt,
        "updatedAt": updatedAt
    }

# Đọc dữ liệu từ file JSON
print(os.getcwd())
os.chdir('g:/My Projects/BookingCare_luan_van/server/src/untils/py')
f = open('staff.json', encoding='utf-8')
original_data = json.load(f,)

new_data = list(map(convert_to_new_obj, enumerate(original_data)))


with open('output.json', 'w', encoding='utf-8') as file:
    json.dump(new_data, file, indent=2, ensure_ascii=False)