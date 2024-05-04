import json
import uuid
from datetime import datetime
import os
import random
import unidecode

ids =  [
        "d6f4d58e-f7a9-496c-98c4-41b58e04541f",
        "8bb1df38-1810-4933-817e-2f035033bf8a",
        "5d1378c1-4c22-4571-877c-3509715146c6",
        "be771412-c286-497d-9d8a-0414cdd57423",
        "8341cc0c-cb4c-41cf-ae93-c6712af8145a",
        "107699da-e94c-4ad9-a418-d5d26d3e56d0",
        "6758330f-f2ee-47bb-8487-bce6b45bb20a",
        "fe1e2b0a-4c2f-4b15-aa1e-56724b33b38e",
        "078d43cc-5c45-4f9e-baee-677a4349676f",
        "90837230-cd7a-4c7b-8bd5-31994acc1a25",
        "3e7908ea-d41b-4694-bb18-2720049f931a",
        "481f855b-847f-4452-987b-51cbe33dee69",
        "46c85f27-70ea-441a-8345-a2d46df6ce88",
        "ca06933e-5cfc-4ed2-a526-a7cefd60ac14",
        "a8a6de91-f050-4d16-8584-dd277e9cd8f2",
        "1bdf27e3-5093-4908-8d82-25f246350289",
        "0df6b262-bcad-4564-a2e0-829dee5050f1",
        "743c19d1-45bd-46bd-a5bf-68d4d3de4812",
        "9186a501-0ab4-4e3a-94c6-d167af8af32c",
        "9e65668e-3708-4fd5-9f20-115c44dd65c2",
        "50d23b65-c8e3-48b7-ba7b-a2cf8a0cb255",
        "2ec2cf94-63cd-4d9c-9fad-ca8a9e418a8d",
        "dd771cc0-8425-4505-b536-95898128a77a",
        "62f6cbfb-4078-4cbe-a377-28b74766185e",
        "f00fb219-5bfc-46a3-aaf3-02ee015556fb",
        "2a1d9020-2e9b-4889-b7c3-648f6a1ef0c5",
        "f8f55815-c777-4c74-9a04-3ae7b780f947"
    ]

# Danh sách địa chỉ
professions = [
    "Giáo viên tiểu học",
    "Kỹ sư xây dựng",
    "Bác sĩ nha khoa",
    "Quản lý nhân sự",
    "Nhân viên kinh doanh",
    "Chuyên viên marketing",
    "Kế toán trưởng",
    "Chuyên viên tư vấn tài chính",
    "Nhân viên dịch vụ khách hàng",
    "Lập trình viên",
    "Nhân viên quản lý sản xuất",
    "Kỹ thuật viên điện",
    "Nhân viên hành chính",
    "Bác sĩ tim mạch",
    "Chuyên viên tư vấn tuyển dụng",
    "Kỹ sư cơ khí",
    "Nhân viên hỗ trợ kỹ thuật",
    "Nhân viên bảo vệ",
    "Nhân viên hành chính văn phòng",
    "Chuyên viên phát triển doanh nghiệp",
    "Bác sĩ da liễu",
    "Y sĩ phẫu thuật",
    "Chuyên viên tư vấn bảo hiểm"
]
    
birthDays =[
    "1989-05-20T00:00:00Z",
    "1985-10-15T00:00:00Z",
    "1992-02-28T00:00:00Z",
    "1983-07-08T00:00:00Z",
    "1990-12-03T00:00:00Z",
    "1988-03-16T00:00:00Z",
    "1995-09-21T00:00:00Z",
    "1976-11-30T00:00:00Z",
    "1982-08-12T00:00:00Z",
    "1997-04-10T00:00:00Z",
    "1980-06-25T00:00:00Z",
    "1986-09-05T00:00:00Z",
    "1994-03-14T00:00:00Z",
    "1979-08-19T00:00:00Z",
    "1991-12-28T00:00:00Z",
    "1987-07-03T00:00:00Z",
    "1993-01-17T00:00:00Z",
    "1978-04-22T00:00:00Z",
    "1996-11-18T00:00:00Z",
    "1981-09-07T00:00:00Z",
    "1984-02-09T00:00:00Z",
    "1998-08-29T00:00:00Z",
    "1977-06-12T00:00:00Z"
]

# Danh sách chứng chỉ
certificates = [
    'Board Certification in Pediatrics, IELTS 8.5 Australia',
    'TOEIC 850, IELTS 7.5 Canada',
    'IELTS 8.0 New Zealand',
    'TOEFL iBT 115, IELTS 9.0 Australia',
    'IELTS 7.0 UK',
    'TOEIC 900, IELTS 8.0 Canada',
]
# Danh sách giới tính
genders = ['female', 'male']

# Danh sách chứng chỉ
specialist_ids = ['ff01f2da-068e-4357-9eb5-12c4281a77df', '8ca0a91b-ad7e-4331-93ca-7c82cf2f36e6', 'b096d05b-4ef0-41ee-9c07-c5496773fe16', 'b310fa03-5697-419b-8c13-8f9d32a59384', 'fd3ff0c3-212e-4076-8ca5-9a665671131d', '6c8c4087-6bf8-4818-8aea-1e19444a1f5f', 'f647fd6c-c994-4c37-9620-6bfb5d538ab2']
academic_ids = ['480f5c52-abbd-4d28-9c9c-99c41feaafcf', '480f5c52-abbd-4d28-9c9c-99c41feaaf2f', '480f5c52-abbd-4d28-9c9c-99c41feaaf2d', '5e065f83-3dc9-471b-88a7-9e0bc22b2fbc']

data = []
os.chdir('g:/My Projects/BookingCare_luan_van/server/src/untils/py')
f = open('input.json', encoding='utf-8')
original_data = json.load(f,)

for i in range(27):
    # fullName = fullNames[i]
    # profession = professions[i]
    # phone = "0967688" + str(random.randint(100, 999))
    # cccd = "1987763" + str(random.randint(100, 999))
    # birthDay = birthDays[i]
    
    # email = 'user'+ str(i) + '@gmail.com'
    # experience = experiences[i]
    # certificate = certificates[i]
    # gender = random.choice(genders)
    # specialist_id = random.choice(specialist_ids)
    # academic_id = random.choice(academic_ids)
    for item in original_data: 
        data.append({
            "id": str(uuid.uuid4()),
            "date": item['date'],
            "timeCode": item['timeCode'],
            "workingId": ids[i],
            "maxNumber": item['maxNumber'],
            # "phone": phone,
            # "gender": gender,
            # 'createdAt' : datetime.now().isoformat() + "Z",
            # 'updatedAt' : datetime.now().isoformat() + "Z"
            # "email": email,
            # "kinhNghiem": experience,
            # "chungChi": certificate,
            # "gioiTinh": gender,
            # "specialistId": specialist_id,
            # "academic": academic_id
        })

os.chdir('g:/My Projects/BookingCare_luan_van/server/src/untils/py')

with open('staff.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, indent=2, ensure_ascii=False)