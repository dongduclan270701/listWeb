import React, { useEffect } from 'react';
import 'assets/List_Website/KLD2112/scss/blog_detail.scss'
const Index = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".animate-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };

    }, []);
    return (
        <div className='blog-detail-kld2112'>
            <div className="section-1-kld2112">
                <div
                    style={{
                        display: 'block',
                        content: "",
                        left: 0,
                        top: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)),url(https://res.cloudinary.com/dolydpat4/image/upload/v1734809442/element-bg2-1_exrewp.webp) center no-repeat',
                        '-webkit-background-size': 'cover',
                        'background-size': 'cover',
                        position: 'fixed',
                        zIndex: '-1',
                        pointerEvents: 'none',
                    }}
                ></div>
                <div className="testimonials-section">
                    <div className="title animate-section">Xu hướng sang trọng 17 / 12 / 2024</div>
                </div>
            </div>
            <div className="section-2-kld2112">
                <div className='share-link animate-section'>Share</div>
                <div className='share-link-btn animate-section'><i className="fa-brands fa-facebook-f"></i></div>
                <div className='share-link-btn animate-section'><i className="fa-brands fa-linkedin-in"></i></div>
                <div className='share-link-btn animate-section'><i className="fa fa-share"></i></div>
                <div className='share-link-btn animate-section'><i className="fa-brands fa-facebook-messenger" /></div>

            </div>
            <hr />
            <div className="section-3-kld2112">
                <p>Tháng 12 này, thị trường bất động sản hạng sang của Manhattan không hề bình thường. Các hợp đồng cho các bất động sản trị giá hơn 4 triệu đô la đã tăng vọt 57% so với cùng kỳ năm trước từ ngày 1 đến ngày 15 tháng 12, vì người mua vẫn tự tin và có động lực. Người bán cũng đang hành động theo chiến lược, với danh sách mới tăng 30% so với cùng kỳ năm trước, nhằm mục đích nắm bắt nhu cầu và đi trước mùa xuân cạnh tranh. Với lượng hàng tồn kho âm, giá cả vẫn ổn định, tạo cơ hội cho cả người mua và người bán.</p>
                <p>Chào mừng bạn đến với ấn bản The Pulse này, nguồn đáng tin cậy giúp bạn biến dữ liệu thị trường thành thông tin chi tiết hữu ích để đưa ra quyết định bất động sản thông minh.</p>
                <p>Tuần này, chúng ta sẽ đi sâu vào động lực thị trường định hình cơ hội cho cả người bán và người mua, từ các xu hướng chính của khu phố đến các giao dịch quan trọng nhất trong tuần. Với phương pháp tiếp cận dựa trên dữ liệu và chuyên môn chiến lược của mình, tôi sẽ hướng dẫn bạn cách điều hướng các điều kiện độc đáo này một cách tự tin và thành công. Hãy bắt đầu nào.</p>
                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734975569/346CEDB8-A5CD-4929-BADB-F44FFDE915EB_1_201_a_vgjhjx.jpg" alt="" />
                <div className='title'>Những điểm chính</div>
                <ul>
                    <li>Hợp đồng tăng đột biến: 32 hợp đồng đã được ký vào tuần trước, giảm nhẹ 6% so với tuần trước nhưng tăng đáng kể 57% từ ngày 1 đến 15 tháng 12 năm ngoái.</li>
                    <li>Xu hướng niêm yết: Các danh sách niêm yết trên thị trường đã giảm 41% vào tuần trước. Tuy nhiên, trong hai tuần qua, các danh sách mới đã tăng 30% so với cùng kỳ năm trước vì người bán muốn tận dụng hoạt động mua mạnh mẽ và đi trước thị trường mùa xuân bận rộn hơn.</li>
                    <li>Tác động tiêu cực ròng đến hàng tồn kho: Mặc dù số lượng nhà mới niêm yết tăng, hàng tồn kho vẫn âm ròng, đảm bảo không gây áp lực giảm giá.</li>
                    <li>Phân chia khu vực lân cận:
                        <ul>
                            <li>Khu vực trung tâm dẫn đầu với 41% thị phần, tiếp tục thống trị với tư cách là điểm đến hàng đầu cho người mua bất động sản xa xỉ.</li>
                            <li>Khu Upper East Side chiếm 31% khi sự phục hưng của khu vực này tiếp tục phát triển, được thúc đẩy bởi doanh số bán các dự án phát triển mới và các giao dịch chung cư và hợp tác xã chất lượng cao.</li>
                        </ul>
                    </li>
                    <li>Chỉ số thị trường vẫn vững mạnh:
                        <ul>
                            <li>Nhịp đập thị trường: 2,4, tăng 0,6 điểm trong tháng này và tăng 3,5 điểm so với cùng kỳ năm trước.</li>
                            <li>Chỉ số khí hậu: 0,96, tăng 5,5% trong tháng này và tăng 108,7% so với cùng kỳ năm trước.</li>
                        </ul>
                    </li>
                    <li>Khối lượng bán hàng: Tổng khối lượng bán hàng - 270.348.000 đô la - giảm 15% so với tuần trước, phản ánh sự lắng dịu theo mùa trong các giao dịch bằng đô la.</li>
                    <li>Hợp đồng giảm giá: 10 hợp đồng được ký kết với mức giảm giá, với mức giảm giá trung bình chỉ 6%.</li>
                    <li>Phân tích thị trường: Căn hộ chung cư chiếm 75% thị phần, trong khi các dự án mới và hợp đồng trên 10 triệu đô la chiếm 13% tổng số giao dịch.</li>
                </ul>
                <div className='title'>Thông tin thị trường vĩ mô</div>
                <p>Một số yếu tố kinh tế đang tạo ra cơ hội trên thị trường xa xỉ:</p>
                <ul>
                    <li>Tiền thưởng Phố Wall: Dự kiến ​​tăng 35%, mức tăng đầu tiên kể từ năm 2021, bơm thanh khoản vào phân khúc trên 10 triệu đô la.</li>
                    <li>Fed cắt giảm lãi suất: Dự kiến ​​sẽ cắt giảm 25 điểm cơ bản trong tuần này, mặc dù dự kiến ​​sẽ có ít đợt cắt giảm hơn vào năm 2024. Lãi suất thế chấp có khả năng ổn định. Vui lòng xem hộp lãi suất thế chấp lịch sử bên dưới - mức trung bình lịch sử gần giống với mức trung bình hiện tại của chúng tôi.</li>
                    <li>Sức mạnh của thị trường chứng khoán: Sự tăng trưởng của thị trường trong năm nay đã củng cố tính thanh khoản và niềm tin, đặc biệt là đối với những người mua giàu có ở thị trường có giá trị trên 4 triệu đô la và trên 10 triệu đô la.</li>
                </ul>
                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734975570/8780E92E-685A-48D8-B4F3-F79F1C6611DE_1_201_a_rqbmsd.jpg" alt="" />
                <div className='title'>Từ Dữ liệu đến Giao dịch: Thông tin thị trường & Chiến thuật khả thi</div>
                <div className="sub-title">Dành cho người bán</div>
                <p>Đôi khi cần một cách tiếp cận mới để đạt được kết quả. Gần đây tôi đã làm việc với một người bán có bất động sản đã được rao bán trong nhiều tháng với hai nhà môi giới khác. Bằng cách đổi thương hiệu và định vị lại danh sách, tạo ra một kế hoạch tiếp thị riêng và triển khai tiếp cận có mục tiêu, tôi đã khơi dậy lại sự quan tâm. Các cuộc đàm phán chiến lược đã đảm bảo một lời đề nghị hoàn toàn bằng tiền mặt chỉ thiếu 25.000 đô la so với giá chào bán—bằng chứng cho thấy chiến lược đúng đắn sẽ thay đổi mọi thứ.</p>
                <p>Nếu bất động sản của bạn chưa được hưởng lợi từ đà tăng trưởng hiện nay, thì bây giờ là lúc để đánh giá lại:</p>
                <ul>
                    <li>Giá cả: Bất động sản của bạn có giá cạnh tranh để thu hút người mua không?</li>
                    <li>Trình bày: Các tính năng có giá trị nhất của nó có được làm nổi bật không?</li>
                    <li>Tiếp thị: Câu chuyện về bất động sản của bạn có tiếp cận được đúng đối tượng không?</li>
                </ul>
                <p>Nếu bạn gặp khó khăn, hãy kết nối để chẩn đoán các vấn đề của tài sản của bạn và xây dựng chiến lược thành công. Yêu cầu báo cáo tùy chỉnh hoặc lên lịch tư vấn</p>
                <div className="sub-title">Dành cho người mua</div>
                <p>Với danh sách mới tăng 30% theo năm, người mua có nhiều cơ hội hơn để khám phá các giao dịch có giá trị. Mua sắm chiến lược là chìa khóa:</p>
                <ul>
                    <li>Viên ngọc ẩn: Chi phí cải tạo đã giảm xuống, với mức phí bảo hiểm hiện ở mức 15%, giảm so với mức cao 30% của năm 2021–2022.</li>
                    <li>Giá trị vượt thời gian: Hãy cân nhắc các bất động sản trước chiến tranh hoặc các căn hộ chung cư cũ có chất lượng xây dựng thường có giá trị tốt hơn so với các dự án mới đắt tiền hơn.</li>
                    <li>Mua sắm thông minh: Tập trung vào các bất động sản được niêm yết trên 100 ngày hoặc mới giảm giá, nơi người bán có động lực đàm phán.</li>
                </ul>
                <p>Với sự hướng dẫn đúng đắn, việc điều hướng thị trường ngày nay sẽ không còn khó khăn nữa. Hãy kết nối để tìm bất động sản hoàn hảo cho bạn. Lên lịch tư vấn ngay hôm nay.</p>
                <div className='title'>Phần kết luận</div>
                <p>Thị trường xa xỉ của Manhattan đang phát triển mạnh mẽ khi năm sắp kết thúc. Đối với người bán, việc tận dụng nhu cầu của người mua bằng góc nhìn mới có thể biến danh sách nhà trì trệ thành câu chuyện thành công. Đối với người mua, việc điều hướng cẩn thận hàng tồn kho đảm bảo bạn sẽ khám phá ra những cơ hội đặc biệt.</p>
                <p>Pulse là hướng dẫn giúp bạn biến dữ liệu thành thông tin chi tiết có thể thực hiện được để đưa ra quyết định bất động sản thông minh.</p>
            </div>

        </div >
    );
}

export default Index;
