"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Specialists",
      [
        {
          id: "ff01f2da-068e-4357-9eb5-12c4281a77df",
          name: "Sản Phụ khoa",
          descriptionDisease:
            "Rối loạn kinh nguyệt, chậm kinh, đau bụng kinh   \nTắc hai vòi trứng, Đa nang buồng trứng, Chụp vòi trứng,       \nKhám hiếm muộn, vô sinh   \nKhám Phụ Khoa   \nKhám thai sản   \nKhám tiền hôn nhân, Tiền sinh   \nKiểm tra phụ khoa   \nLoạn dưỡng vú   \nRong kinh kéo dài   \nSiêu âm thai định kỳ   \nThai lưu\nU xơ tử cung, Viêm lộ tuyến",
          descriptionDoctor:
            "Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Sản phụ khoa tại Hà Nội\nCác chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn tại Hà Nội như: Bệnh viện Phụ sản Trung ương, Bệnh viện Phụ sản Hà Nội, Khoa Sản - Bệnh viện Bạch Mai.",
          createdAt: "2023-11-10T13:42:13.688Z",
          updatedAt: "2023-11-10T13:42:13.688Z",
        },
        {
          id: "8ca0a91b-ad7e-4331-93ca-7c82cf2f36e6",
          name: "Cột sống",
          descriptionDisease:
            "Đau cột sống, đau thắt lưng\nChấn thương cột sống\nCột sống bị đau, sưng, cong, vẹo\nĐau mỏi cổ vai gáy, bả vai\nĐau tê mông xuống chân\nPhồng đĩa đệm\nTê bì tay chân\nThóa hóa đốt sống\nThoái hóa L4, L5\nThoát vị đĩa đệm\nVôi hóa cột sống\nXẹp cột sống",
          descriptionDoctor:
            "Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Thần kinh - Cột sống - Xương khớp tại Hà Nội\nCác giáo sư, tiến sĩ, bác sĩ là giảng viên Đại học Y khoa Hà Nội, Học viện Quân Y.\nCác bác sĩ đã, đang công tác tại chuyên Khoa Thần Kinh, Cột sống, Xương Khớp - Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh Viện Trung ương Quân đội 108, Bệnh viện 103...\nĐược nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...",
          createdAt: "2023-11-10T13:41:51.869Z",
          updatedAt: "2023-11-10T13:41:51.869Z",
        },
        {
          id: "b096d05b-4ef0-41ee-9c07-c5496773fe16",
          name: "Tai Mũi Họng",
          descriptionDisease:
            "Ù tai, đau tai, chảy máu tai\nThủng màng nhĩ, điếc đột ngột\nViêm tai giữa\nAmidan, V.A\nViêm xoang\nNghẹt mũi\nHay bị chảy máu cam\nĐau cổ họng, khó nuốt\nHo kéo dài\nNgủ ngáy",
          descriptionDoctor:
            "Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Tai Mũi Họng tại Hà Nội\nCác giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội\nCác bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh Viện Tai Mũi Họng Trung ương, Bệnh viện Quân Y 108...\nĐược nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ cao cấp,...",
          createdAt: "2023-11-10T13:41:25.606Z",
          updatedAt: "2023-11-10T13:41:25.606Z",
        },
        {
          id: "b310fa03-5697-419b-8c13-8f9d32a59384",
          name: "Tim mạch",
          descriptionDisease:
            "Khó thở, Đau ngực, đau tim\nTăng huyết áp, hạ huyết áp\nRối loạn mỡ máu, cao huyết áp, chóng mặt\nBệnh van tim (Hẹp hở van tim), Hẹp động mạch chủ\nCảm giác hồi hộp, tim đập nhanh   \nTim bẩm sinh, có tiền sử bệnh tim to, tiền sử tai biến   \nĐã đặt stent tim, nong động mạch vành\nGiãn tĩnh mạch chân   ",
          descriptionDoctor:
            "Các chuyên gia được đào tạo bài bản về chuyên ngành Tim mạch tại các trường đại học trong nước và quốc tế.\nCác giáo sư, phó giáo sư nghiên cứu và giảng dạy tại Đại học Y Hà Nội\nCác bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Viện Tim Mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh Viện E, Bệnh Viện Tim Hà Nội\nLà thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Tim Mạch Việt Nam\nĐạt danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...",
          createdAt: "2023-11-10T13:41:05.812Z",
          updatedAt: "2023-11-10T13:41:05.812Z",
        },
        {
          id: "fd3ff0c3-212e-4076-8ca5-9a665671131d",
          name: "Tiêu hoá",
          descriptionDisease:
            "Ăn uống kém, không ngon\nRối loạn tiêu hóa, táo bón, trĩ\nNhiễm vi khuẩn HP (Helicobacter pylori)\nNội soi dạ dày, đại tràng, tiêu hóa\nBuồn nôn, chướng bụng, đầy bụng ợ chua, đầy hơi\nCo thắt thực quản, Hội chứng ruột kích thích\nĐau bụng, dạ dày, đại tràng, thượng vị\nViêm đại tràng, dạ dày, tá tràng\nUng thư dạ dày, U nang tuyến tụy\nBệnh lý về gan, mật",
          descriptionDoctor:
            "Ăn uống kém, không ngon\nRối loạn tiêu hóa, táo bón, trĩ\nNhiễm vi khuẩn HP (Helicobacter pylori)\nNội soi dạ dày, đại tràng, tiêu hóa\nBuồn nôn, chướng bụng, đầy bụng ợ chua, đầy hơi\nCo thắt thực quản, Hội chứng ruột kích thích\nĐau bụng, dạ dày, đại tràng, thượng vị\nViêm đại tràng, dạ dày, tá tràng\nUng thư dạ dày, U nang tuyến tụy\nBệnh lý về gan, mật",
          createdAt: "2023-11-10T13:40:37.717Z",
          updatedAt: "2023-11-10T13:40:37.717Z",
        },
        {
          id: "6c8c4087-6bf8-4818-8aea-1e19444a1f5f",
          name: "Thần kinh",
          descriptionDisease:
            "Bại Não   \nĐau đầu, chóng mặt, buồn nôn   \nBệnh Pakison, bệnh tiền đình   \nBị co cơ, căng dây thần kinh       \nĐộng kinh, có những cơn vãng ý thức   \nBị tê bì nửa mặt, chèn dây thần kinh\nBồn chồn, lo lắng, hồi hộp, chân tay run   \nCó dấu hiệu tăng động    \nCo rút cổ, đau đầu với mặt, chân tay, vã mồ hôi   \nChấn thương đầu, dây thần kinh",
          descriptionDoctor:
            "Các giáo sư, bác sĩ uy tín đầu ngành chuyên khoa Thần kinh đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh viện 108, Bệnh viện Đại học Y Hà Nội, Bệnh viện 103.\nLà thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hội Thần kinh Việt Nam, Hội Phẫu thuật Thần kinh...\nĐược nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp.",
          createdAt: "2023-11-10T13:40:10.103Z",
          updatedAt: "2023-11-10T13:40:10.103Z",
        },
        {
          id: "f647fd6c-c994-4c37-9620-6bfb5d538ab2",
          name: "Cơ Xương Khớp",
          descriptionDisease:
            "Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:\nCác chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm\nCác giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội\nCác bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.\nLà thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...",
          descriptionDoctor:
            "Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân, Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai, Loãng xương, đau nhức xương, Viêm xương, gai xương, Viêm cơ, Teo cơ, chứng đau mỏi cơ, Yếu cơ, Loạn dưỡng cơ, Các chấn thương về cơ, xương, khớp",
          createdAt: "2023-11-10T13:39:19.966Z",
          updatedAt: "2023-11-10T13:39:19.966Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
