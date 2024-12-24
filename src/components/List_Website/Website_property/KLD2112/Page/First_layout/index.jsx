import React, { useEffect, useState } from 'react';
import 'assets/List_Website/KLD2112/scss/first_layout.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactSlider from 'react-slider'
import { NavLink } from 'react-router-dom';
const Index = () => {
    const formatter = new Intl.NumberFormat('en-US')
    const [search, setSearch] = useState({
        address: '',
        type: 'Chọn loại tài sản',
        bath: 'Phòng tắm',
        bed: 'Phòng ngủ',
        price: [0, 100000000],
        feet: [0, 100000],
    })
    const [isType, setIsType] = useState(false)
    const [isBath, setIsBath] = useState(false)
    const [isBed, setIsBed] = useState(false)
    const handleChange = (name, value) => {
        setSearch(search => ({ ...search, [name]: value }));
    };
    // const objects = [
    //     { name: "abcd", price: 200, category: "electronics", age: 25 },
    //     { name: "abc", price: 150, category: "fashion", age: 28 },
    //     { name: "mnop", price: 300, category: "electronics", age: 22 },
    //     { name: "xyz", price: 250, category: "fashion", age: 30 },
    //     { name: "abcxyz", price: 100, category: "electronics", age: 35 }
    //   ];

    //   const searchString = "abc";
    //   const priceMin = 100;
    //   const priceMax = 250;
    //   const category = "electronics";

    //   // Lọc các object thỏa mãn tất cả điều kiện
    //   const results = objects.filter(obj => 
    //     obj.name.includes(searchString) && // name chứa searchString
    //     obj.price > priceMin && obj.price < priceMax && // price trong khoảng
    //     obj.category === category // category khớp
    //   );
    const handleBlur = (dropdown) => {
        if (dropdown === 'type') setIsType(false);
        if (dropdown === 'bath') setIsBath(false);
        if (dropdown === 'bed') setIsBed(false);
    };
    const NextArrow = ({ onClick }) => {
        return (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    right: "-75px",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                    cursor: "pointer",
                    fontSize: "24px",
                    color: "black",
                    padding: '10px 20px',
                    borderRadius: '50%',
                    border: '1px solid #af8647'
                }}
                className='btn-prev-next'
                onClick={onClick}
            >
                <i className='fa fa-chevron-right' style={{ color: '#af8647' }}></i>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "-75px",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                    cursor: "pointer",
                    fontSize: "24px",
                    color: "black",
                    padding: '10px 20px',
                    borderRadius: '50%',
                    border: '1px solid #af8647'

                }}
                onClick={onClick}
                className='btn-prev-next'
            >
                <i className='fa fa-chevron-left' style={{ color: '#af8647' }}></i>
            </div>
        );
    };
    const settings2 = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 500,
        cssEase: "ease-in-out",
        infinite: true,
        lazyLoad: "ondemand",
        adaptiveHeight: true,
        pauseOnHover: false,
        dots: false,
        nextArrow: <NextArrow />, // Truyền mũi tên tới
        prevArrow: <PrevArrow />
    };
    const settings3 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 500,
        cssEase: "ease-in-out",
        infinite: true,
        lazyLoad: "ondemand",
        adaptiveHeight: true,
        pauseOnHover: false,
        dots: false,
        arrows: false,
    };
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
        <div className='first-layout-kld2112'>

            <div className="section-1-kld2112">
                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735032131/portfolio-1_zg3vgz.webp"></img>
                <div className='introduce'>
                    <div className='title animate-section'>Bất động sản & nhà sang trọng để bán tại Upper East Side, NYC</div>
                    <div className="sub-title animate-section">Tìm kiếm nhà để bán ở Upper East Side, NYC, nổi tiếng với các lựa chọn nhà ở sang trọng, lối sống xa hoa và là nơi vui chơi của giới thượng lưu New York.</div>
                </div>
            </div>

            <div className="section-2-kld2112">
                <div className="title animate-section">Danh sách bất động sản Upper East Side, NYC</div>
                <input type="text" className='input-search animate-section' onChange={(e) => setSearch(search => ({ ...search, address: e.target.value }))} placeholder='Tìm kiếm theo địa chỉ, thành phố hoặc khu phố' />
                <div className="form-group">
                    <div className='col-md-4 select-div' onBlur={() => handleBlur('type')}>
                        <select className="custom-select animate-section" value={search.type} onClick={() => setIsType(!isType)}>
                            <option value="">Chọn loại tài sản</option>
                            <option value="Khu Dân Cư">Khu Dân Cư</option>
                            <option value="Nhà Phố">Nhà Phố</option>
                            <option value="Căn Hộ">Căn Hộ</option>
                            <option value="Thuộc Về Thương Mại">Thuộc Về Thương Mại</option>
                            <option value="Gia Đình Nhiều Thế Hệ">Gia Đình Nhiều Thế Hệ</option>
                            <option value="Đất">Đất</option>
                            <option value="Hợp Tác Xã">Hợp Tác Xã</option>
                            <option value="Sản Xuất">Sản Xuất</option>
                            <option value="Khác">Khác</option>
                        </select>
                        <div className={isType ? "dropdown-select open-select" : "dropdown-select"}>
                            <div className='option-select' onClick={() => handleChange('type', '')}>Chọn loại tài sản</div>
                            <div className='option-select' onClick={() => handleChange('type', 'Khu Dân Cư')}>Khu Dân Cư</div>
                            <div className='option-select' onClick={() => handleChange('type', 'Nhà Phố')}>Nhà Phố</div>
                            <div className='option-select' onClick={() => handleChange('type', 'Căn Hộ')}>Căn Hộ</div>
                            <div className='option-select' onClick={() => handleChange('type', 'Thuộc Về Thương Mại')}>Thuộc Về Thương Mại</div>
                            <div className='option-select' onClick={() => handleChange('type', 'Gia Đình Nhiều Thế Hệ')}>Gia Đình Nhiều Thế Hệ</div>
                            <div className='option-select' onClick={() => handleChange('type', 'Đất')}>Đất</div>
                            <div className='option-select' onClick={() => handleChange('type', 'Hợp Tác Xã')}>Hợp Tác Xã</div>
                            <div className='option-select' onClick={() => handleChange('type', 'Sản Xuất')}>Sản Xuất</div>
                            <div className='option-select' onClick={() => handleChange('type', 'Khác')}>Khác</div>
                        </div>
                    </div>
                    <div className='col-md-3 select-div' onBlur={() => handleBlur('bath')}>
                        <select className="custom-select animate-section" value={search.bath} onClick={() => setIsBath(!isBath)}>
                            <option value="">Phòng tắm</option>
                            <option value="1+ Phòng tắm">1+ Phòng tắm</option>
                            <option value="2+ Phòng tắm">2+ Phòng tắm</option>
                            <option value="3+ Phòng tắm">3+ Phòng tắm</option>
                            <option value="4+ Phòng tắm">4+ Phòng tắm</option>
                            <option value="5+ Phòng tắm">5+ Phòng tắm</option>
                        </select>
                        <div className={isBath ? "dropdown-select open-select" : "dropdown-select"}>
                            <div className='option-select' onClick={() => handleChange('bath', '')}>Chọn phòng tắm</div>
                            <div className='option-select' onClick={() => handleChange('bath', '1+ Phòng tắm')}>1+ Phòng tắm</div>
                            <div className='option-select' onClick={() => handleChange('bath', '2+ Phòng tắm')}>2+ Phòng tắm</div>
                            <div className='option-select' onClick={() => handleChange('bath', '3+ Phòng tắm')}>3+ Phòng tắm</div>
                            <div className='option-select' onClick={() => handleChange('bath', '4+ Phòng tắm')}>4+ Phòng tắm</div>
                            <div className='option-select' onClick={() => handleChange('bath', '5+ Phòng tắm')}>5+ Phòng tắm</div>
                        </div>
                    </div>
                    <div className='col-md-3 select-div' onBlur={() => handleBlur('bed')}>
                        <select className="custom-select animate-section" name='bed' value={search.bed} onClick={() => setIsBed(!isBed)}>
                            <option value="">Phòng ngủ</option>
                            <option value="1+ Phòng ngủ">1+ Phòng ngủ</option>
                            <option value="2+ Phòng ngủ">2+ Phòng ngủ</option>
                            <option value="3+ Phòng ngủ">3+ Phòng ngủ</option>
                            <option value="4+ Phòng ngủ">4+ Phòng ngủ</option>
                            <option value="5+ Phòng ngủ">5+ Phòng ngủ</option>
                        </select>
                        <div className={isBed ? "dropdown-select open-select" : "dropdown-select"}>
                            <div className='option-select' onClick={() => handleChange('bed', '')}>Chọn phòng ngủ</div>
                            <div className='option-select' onClick={() => handleChange('bed', '1+ Phòng ngủ')}>1+ Phòng ngủ</div>
                            <div className='option-select' onClick={() => handleChange('bed', '2+ Phòng ngủ')}>2+ Phòng ngủ</div>
                            <div className='option-select' onClick={() => handleChange('bed', '3+ Phòng ngủ')}>3+ Phòng ngủ</div>
                            <div className='option-select' onClick={() => handleChange('bed', '4+ Phòng ngủ')}>4+ Phòng ngủ</div>
                            <div className='option-select' onClick={() => handleChange('bed', '5+ Phòng ngủ')}>5+ Phòng ngủ</div>
                        </div>
                    </div>
                </div>

                <div className='section-2-1'>
                    <div className="col-md-5 range">
                        <div className='range-price'>
                            <div className='title-range animate-section'>Giá</div>
                            <ReactSlider
                                className="slider animate-section"
                                value={search.price}
                                onChange={(e) => setSearch(search => ({ ...search, price: e }))}
                                min={0}
                                max={100000000}
                            />
                            <div className='text-range animate-section'>
                                <div className="text">$ {formatter.format(search.price[0])}</div>
                                <div className="text">$ {formatter.format(search.price[1])}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 range">
                        <div className='range-price'>
                            <div className='title-range animate-section'>Khu vực sinh hoạt</div>
                            <ReactSlider
                                className="slider animate-section"
                                value={search.feet}
                                onChange={(e) => setSearch(search => ({ ...search, feet: e }))}
                                min={0}
                                max={100000}
                            />
                            <div className='text-range animate-section'>
                                <div className="text">{formatter.format(search.feet[0])} feet</div>
                                <div className="text">{formatter.format(search.feet[1])} feet</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-9-kld2112">
                <div className="report">
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863566/nmalps2msk2i5ilmh4ac_affh8u.avif" alt="" /></div>
                        <div className="title-report animate-section">$14.950.000</div>
                        <div className="sub-report animate-section">1049 Fifth Avenue Penthouse 3, Upper East Side, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/vr9sbmapipri97yv3oee_xhunds.jpg" alt="" /></div>
                        <div className="title-report animate-section">$5.950.000</div>
                        <div className="sub-report animate-section">985 Park Avenue Garden Triplex, Phía Đông Thượng, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/s3tvw5sy0vlqgkw56gnt_vkkzcv.jpg" alt="" /></div>
                        <div className="title-report animate-section">$7.950.000</div>
                        <div className="sub-report animate-section">30 East 85th Street Unit 20A, New York, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/tyyk7dvtd4xz9n46ilpg_zdt8mp.avif" alt="" /></div>
                        <div className="title-report animate-section">$9.950.000</div>
                        <div className="sub-report animate-section">1049 Fifth Avenue Unit 14A, Upper East Side, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/bvftischsehrbwqacxli_uibdmf.avif" alt="" /></div>
                        <div className="title-report animate-section">$11.950.000</div>
                        <div className="sub-report animate-section">12 WARREN ST, PH</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/ojofh6t6wet5nyuznfdg_tnrioh.jpg" alt="" /></div>
                        <div className="title-report animate-section">$13.950.000</div>
                        <div className="sub-report animate-section">641 Đại lộ số 5, Đơn vị 32D, New York, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863566/nmalps2msk2i5ilmh4ac_affh8u.avif" alt="" /></div>
                        <div className="title-report animate-section">$14.950.000</div>
                        <div className="sub-report animate-section">1049 Fifth Avenue Penthouse 3, Upper East Side, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/vr9sbmapipri97yv3oee_xhunds.jpg" alt="" /></div>
                        <div className="title-report animate-section">$5.950.000</div>
                        <div className="sub-report animate-section">985 Park Avenue Garden Triplex, Phía Đông Thượng, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/s3tvw5sy0vlqgkw56gnt_vkkzcv.jpg" alt="" /></div>
                        <div className="title-report animate-section">$7.950.000</div>
                        <div className="sub-report animate-section">30 East 85th Street Unit 20A, New York, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/tyyk7dvtd4xz9n46ilpg_zdt8mp.avif" alt="" /></div>
                        <div className="title-report animate-section">$9.950.000</div>
                        <div className="sub-report animate-section">1049 Fifth Avenue Unit 14A, Upper East Side, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/bvftischsehrbwqacxli_uibdmf.avif" alt="" /></div>
                        <div className="title-report animate-section">$11.950.000</div>
                        <div className="sub-report animate-section">12 WARREN ST, PH</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/ojofh6t6wet5nyuznfdg_tnrioh.jpg" alt="" /></div>
                        <div className="title-report animate-section">$13.950.000</div>
                        <div className="sub-report animate-section">641 Đại lộ số 5, Đơn vị 32D, New York, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                </div>
                <div className='pagination-report animate-section'>
                    <div><i className='fa fa-chevron-left'></i></div>
                    <div className='active'>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div><i className='fa fa-chevron-right'></i></div>
                </div>
            </div>
            <div className="section-7-kld2112">
                <div className="title animate-section">Thị trường nhà ở tại Upper East Side, NYC</div>
                <div className="sub-title animate-section">Vào tháng 8 năm 2024, giá nhà ở Upper East Side đã giảm nhẹ, giảm 2,7% so với năm trước, với giá bán trung bình là 1,3 triệu đô la. Trung bình, những ngôi nhà trong khu vực này đã có 68 ngày trên thị trường, cải thiện không đáng kể so với 71 ngày của năm ngoái. Tổng cộng có 566 ngôi nhà được bán vào tháng 8, gần như không đổi so với 567 ngôi nhà được bán trong cùng kỳ năm ngoái. Giá trung bình cho mỗi foot vuông cũng giảm 6,5%, ổn định ở mức 1.200 đô la. (Dữ liệu mới nhất từ ​​Redfin)</div>
                <div className='section-7-1'>
                    <div className="col-md-3 section-7-1-1">
                        <div className='title-section-7-1-1 animate-section'>$1.250.000</div>
                        <div className="text-section-7-1-1 animate-section">Giá bán trung bình</div>
                    </div>
                    <div className="col-md-3 section-7-1-1">
                        <div className='title-section-7-1-1 animate-section'>$1,2000</div>
                        <div className="text-section-7-1-1 animate-section">Giá bán trung bình theo feet vuông</div>
                    </div>
                    <div className="col-md-3 section-7-1-1">
                        <div className='title-section-7-1-1 animate-section'>566</div>
                        <div className="text-section-7-1-1 animate-section">Tổng số nhà đã bán</div>
                    </div>
                    <div className="col-md-3 section-7-1-1">
                        <div className='title-section-7-1-1 animate-section'>68</div>
                        <div className="text-section-7-1-1 animate-section">Số ngày trung bình trên thị trường</div>
                    </div>
                </div>
            </div>
            <div className='section-8-kld2112'>
                <div className="title animate-section">Câu hỏi thường gặp về bất động sản Upper East Side, NYC</div>
                <div className="sub-title animate-section">Để biết thông tin chi tiết, mới nhất về việc bán nhà ở Upper East Side, bao gồm các cân nhắc về mặt pháp lý và xu hướng thị trường, bạn có thể trao đổi với chúng tôi.</div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header animate-section">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Giá bán trung bình ở Upper East Side đã thay đổi như thế nào gần đây?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Vào tháng 8 năm 2024, giá bán trung bình của những ngôi nhà ở Upper East Side đã giảm nhẹ 2,7% so với năm trước, đưa giá trung bình xuống còn 1,3 triệu đô la. Bất chấp sự sụt giảm này, thị trường đã cho thấy những dấu hiệu ổn định, với những ngôi nhà trung bình ở trên thị trường trong 68 ngày—giảm nhẹ so với 71 ngày của năm ngoái, cho thấy rằng những ngôi nhà đang bán nhanh hơn một chút. Tổng số nhà được bán vào tháng 8 năm 2024 vẫn gần như giữ nguyên, với 566 ngôi nhà được bán trong năm nay so với 567 ngôi nhà của năm trước. Sự nhất quán về khối lượng bán này cho thấy rằng sự quan tâm của người mua đối với Upper East Side vẫn ổn định, ngay cả khi giá cả có những biến động nhỏ.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header animate-section">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Giá hiện tại cho mỗi feet vuông bất động sản ở Upper East Side là bao nhiêu?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Giá trung bình hiện tại cho mỗi foot vuông đối với bất động sản ở Upper East Side là 1.200 đô la, giảm 6,5% so với năm ngoái. Sự sụt giảm giá mỗi foot vuông này có thể cho thấy thị trường đang dịu lại về mặt áp lực định giá, điều này có thể mang lại nhiều giá trị hơn cho những người mua tiềm năng. Tuy nhiên, Upper East Side vẫn tiếp tục là một trong những khu phố danh giá và đáng mơ ước nhất của Manhattan, duy trì mức giá cao hơn so với nhiều khu vực khác của thành phố. Người mua có thể tìm thấy cơ hội đầu tư vì giá mỗi foot vuông đã giảm trong khi nhu cầu chung vẫn ổn định.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header animate-section">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Thị trường Upper East Side so với các khu vực lân cận như thế nào?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">So với các khu vực lân cận , Upper East Side đã cho thấy khả năng phục hồi vừa phải trên thị trường địa phương. Trong khi giá nhà ở Upper East Side giảm 2,7%, khu vực này vẫn hoạt động tương đối tốt so với các khu vực khác. Ví dụ, Lenox Hill chứng kiến ​​mức tăng giá đáng kể là 10,5%, cho thấy mức tăng trưởng mạnh hơn, trong khi Central Park giảm nhẹ 3,3%. Các khu vực lân cận khác như Yorkville và Carnegie Hill chứng kiến ​​mức giảm đáng kể hơn, với mức giảm giá lần lượt là 10,0% và 12,6%. Dữ liệu này cho thấy Upper East Side vẫn là một lựa chọn ổn định và hấp dẫn, đặc biệt đối với những người mua đang tìm kiếm sự nhất quán trong hiệu suất thị trường so với các khu vực đang giảm mạnh hơn.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header animate-section">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Có bất kỳ cân nhắc cụ thể nào về mặt lịch sử hoặc kiến ​​trúc khi bán bất động sản ở Upper East Side không?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Việc bán một bất động sản ở Upper East Side có thể đi kèm với những cân nhắc độc đáo, đặc biệt là nếu ngôi nhà nằm trong một trong nhiều khu lịch sử của khu vực. Các bất động sản ở những khu vực này thường phải tuân theo các hướng dẫn bảo tồn nghiêm ngặt chi phối bất kỳ việc cải tạo hoặc thay đổi nào đối với bên ngoài. Người bán nên biết về những hạn chế này và hiểu cách chúng có thể ảnh hưởng đến khả năng sửa đổi ngôi nhà của người mua tiềm năng. Ngoài ra, việc làm nổi bật các chi tiết kiến ​​trúc và ý nghĩa lịch sử của một bất động sản có thể là một điểm bán hàng hấp dẫn, đặc biệt là đối với những người mua đang tìm kiếm nét quyến rũ cổ điển của New York.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header animate-section">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                Sự chấp thuận của hội đồng hợp tác xã đóng vai trò gì trong việc bán một đơn vị hợp tác xã ở Upper East Side?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Các căn hộ hợp tác thống trị phần lớn khu Upper East Side và việc bán một căn hộ thường đòi hỏi phải thực hiện quy trình phê duyệt hội đồng quản trị hợp tác của tòa nhà. Người bán cần thông báo cho người mua tiềm năng về quy trình kiểm tra tài chính và cá nhân có liên quan, có thể bao gồm tiết lộ tài chính, phỏng vấn và phê duyệt của hội đồng quản trị về việc bán hàng. Việc chuẩn bị trước cho người mua về quy trình thường xuyên nghiêm ngặt này có thể giúp hợp lý hóa việc bán hàng và tránh sự chậm trễ. Người bán cũng có thể muốn nêu bật bất kỳ lợi thế độc đáo nào của hợp tác xã của họ, chẳng hạn như chính sách cho thuê lại nhẹ nhàng hoặc tình hình tài chính xây dựng mạnh mẽ, để làm cho căn hộ trở nên hấp dẫn hơn.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header animate-section">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                Người bán ở Upper East Side có thể làm gì để tăng sức hấp dẫn của bất động sản của mình đối với người mua quốc tế?
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Upper East Side là khu dân cư được công nhận trên toàn cầu, thu hút người mua quốc tế, những người thường bị thu hút bởi uy tín, sự sang trọng và vị trí gần các tổ chức văn hóa. Người bán có thể nâng cao sức hấp dẫn của bất động sản bằng cách trang trí ngôi nhà với nội thất hiện đại, cao cấp làm nổi bật các tính năng sang trọng và đảm bảo rằng khán giả quốc tế có thể tiếp cận tài liệu tiếp thị, bao gồm ảnh chất lượng cao, chuyến tham quan ảo và danh sách đa ngôn ngữ. Hiểu được nhu cầu của người mua quốc tế, chẳng hạn như vị trí gần các trường quốc tế hoặc lãnh sự quán, cũng có thể khiến bất động sản trở nên hấp dẫn hơn đối với phân khúc thị trường này.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-3-kld2112">
                <div className='section-3-1-image-kld2112'>
                    <div className='section-3-1-color-kld2112'></div>
                    <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/sob0azpfldnruwxjqfbm/upper-east-side"></img>
                </div>
                <div className='introduce'>
                    <div className='introduce-1'>
                        <div className="sub-title animate-section">Hướng dẫn khu phố</div>
                        <div className="title animate-section">Khám phá Upper East Side, NYC</div>
                        <div className="text animate-section">Khám phá sự thanh lịch và quyến rũ của một trong những khu phố mang tính biểu tượng nhất của Manhattan với Cẩm nang khu phố Upper East Side của chúng tôi.</div>
                        <div className="text animate-section">Từ những ngôi nhà đá sa thạch cổ điển đến những tòa nhà cao tầng sang trọng, hướng dẫn này sẽ cung cấp cho bạn cái nhìn sâu sắc về những nơi tốt nhất để sống, mua sắm, ăn uống và thư giãn. Khám phá mọi thứ mà Upper East Side cung cấp và tìm địa điểm hoàn hảo của bạn trong thành phố. Bắt đầu khám phá ngay!</div>
                        <div className='form-submit animate-section'>
                            <button className='btn-link animate-section'>Hướng dẫn Upper East Side</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-6-kld2112">
                <div className="title animate-section">Bạn đã sẵn sàng mua hoặc bán ở Upper East Side chưa?</div>
                <div className="sub-title animate-section">Cho dù bạn đang muốn mua hay bán một bất động sản ở Upper East Side danh giá, Carol Staab luôn ở đây để hướng dẫn bạn từng bước trên chặng đường này. Với chuyên môn sâu rộng của mình tại khu phố mang tính biểu tượng của thành phố New York này, cô ấy có thể cung cấp lời khuyên được cá nhân hóa, trả lời mọi câu hỏi bạn có và giúp bạn điều hướng quá trình này một cách suôn sẻ. Hãy liên hệ ngay hôm nay để bắt đầu hành trình bất động sản của bạn với một chuyên gia đáng tin cậy của Upper East Side!</div>
                <div className='form-submit animate-section'>
                    <button className='btn-link animate-section'>Lên lịch xem nhà</button>
                    <button className='btn-link animate-section'>về tôi</button>
                </div>
            </div>
            <div className="section-5-kld2112">
                <div className="testimonials-section">
                    <div className="col-md-3 animate-section"><svg width="221" height="221" viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="110" cy="110" r="110" fill="white" fillOpacity="1"></circle>
                        <path d="M93.0909 108.726C87.4545 108.726 83.697 112.274 82.0061 115.822C82.0061 106.485 86.8909 96.029 100.982 89.8672L100.418 88C86.8909 93.4149 79 104.058 79 117.129C79 127.772 85.9515 133 93.0909 133C99.8545 133 105.303 127.398 105.303 120.863C105.303 114.141 99.8545 108.726 93.0909 108.726ZM128.788 108.726C123.152 108.726 119.394 112.274 117.703 115.822C117.703 106.485 122.588 96.029 136.679 89.8672L136.115 88C122.588 93.4149 114.697 104.058 114.697 117.129C114.697 127.772 121.648 133 128.788 133C135.552 133 141 127.398 141 120.863C141 114.141 135.552 108.726 128.788 108.726Z" fill="#af8647" fillOpacity="1"></path>
                    </svg></div>

                    <div className="col-md-9 animate-section">
                        <Slider {...settings3}>
                            <div style={{ transition: 'all 0.5s' }}>
                                <div className="title">KHÁCH HÀNG CỦA TÔI NÓI GÌ</div>
                                <div className="text">''Kinh nghiệm, kỹ năng đàm phán và tính cách tuyệt vời của bạn đã giúp chúng tôi đạt được mức giá bán cao hơn mong đợi của chúng tôi trong vòng chưa đầy 60 ngày.</div>
                                <div className="text">Chúng tôi rất ấn tượng khi bạn có thể đạt được mức giá bán hoàn toàn bằng tiền mặt là 1,05 mm, đây là mức giá kỷ lục trên foot vuông cho tòa nhà và cao hơn 100.000 USD so với cùng một kiểu căn hộ, nhưng ở tầng cao hơn, được bán với giá chỉ một vài tuần trước đó. Vâng...''</div>
                                <div className="sub-title">— Michael P - CFO of Ariel Re</div>
                            </div>
                            <div>
                                <div className="title">KHÁCH HÀNG CỦA TÔI NÓI GÌ</div>
                                <div className="text">''Nhà môi giới bất động sản chuyên nghiệp bậc nhất. Khả năng phát triển thông điệp phù hợp, tài sản thế chấp và sự hiện diện xã hội để bán tài sản của chủ sở hữu ở NYC là tốt nhất.</div>
                                <div className="text">Chúng tôi đã bán thành công một bất động sản với sự giúp đỡ của Carol và sự siêng năng cũng như dịch vụ của cô ấy trong toàn bộ quá trình là hạng nhất. Một khách hàng hài lòng rất vui khi đưa ra khuyến nghị 5 sao mạnh mẽ!''</div>
                                <div className="sub-title">— Ed Kopko - Seller of 418 50th Street Penthouse A - author - Project Bold Life</div>
                            </div>
                            <div>
                                <div className="title">KHÁCH HÀNG CỦA TÔI NÓI GÌ</div>
                                <div className="text">''Đang tìm kiếm một nhà môi giới bất động sản hạng sang ở Manhattan cho cả mua và bán? Tôi là chuyên gia hàng đầu của bạn với kiến ​​thức tuyệt vời về thị trường NYC.</div>
                                <div className="text">Tận dụng mạng lưới rộng lớn gồm các chuyên gia hàng đầu của Carol cho các vấn đề bất động sản phức tạp như quyền sử dụng không khí và tư vấn pháp lý, đồng thời tận hưởng chi phí phụ trợ vừa phải. Chuyên về đàm phán chiến lược, Tôi thành thạo bảo vệ và bán các...''</div>
                                <div className="sub-title">— Michael Watson - chairman of Canopius & Laurie Banez- Head of Casualty at Canopius</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="section-4-kld2112" style={{ color: 'white' }}>
                <div className="title-section animate-section">Bài viết nổi bật</div>
                <div className="sub-title-section animate-section">Tìm hiểu thêm về những điều làm cho Upper East Side trở nên đặc biệt với những thông tin cập nhật mới nhất của chúng tôi về khu vực này.</div>
                <Slider {...settings2} className='slider-section-4 animate-section'>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863565/kjfvo2tkapgiaqwehdyx_wtl8jo.avif" alt="" />
                        </div>
                        <div className="title">Xu hướng - Chợ hàng xa xỉ 23/12/24</div>
                        <div className="sub-title">Nhà môi giới | Ngày 23 tháng 12 năm 2024</div>
                    </div>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863565/nzgbbaan2pawainqa8kd_pdwsjc.avif" alt="" />
                        </div>
                        <div className="title">Xu hướng - Chợ hàng xa xỉ 23/12/24</div>
                        <div className="sub-title">Nhà môi giới | Ngày 23 tháng 12 năm 2024</div>
                    </div>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863565/ojofh6t6wet5nyuznfdg_cgdcpy.avif" alt="" />
                        </div>
                        <div className="title">Xu hướng - Chợ hàng xa xỉ 23/12/24</div>
                        <div className="sub-title">Nhà môi giới | Ngày 23 tháng 12 năm 2024</div>
                    </div>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863565/qe3widmmhvcevnud2y6q_gk4xew.avif" alt="" />
                        </div>
                        <div className="title">Xu hướng - Chợ hàng xa xỉ 23/12/24</div>
                        <div className="sub-title">Nhà môi giới | Ngày 23 tháng 12 năm 2024</div>
                    </div>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863566/zqzndgfy2bs1iz2skhge_o5wysh.avif" alt="" />
                        </div>
                        <div className="title">Xu hướng - Chợ hàng xa xỉ 23/12/24</div>
                        <div className="sub-title">Nhà môi giới | Ngày 23 tháng 12 năm 2024</div>
                    </div>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863566/nmalps2msk2i5ilmh4ac_affh8u.avif" alt="" />
                        </div>
                        <div className="title">Xu hướng - Chợ hàng xa xỉ 23/12/24</div>
                        <div className="sub-title">Nhà môi giới | Ngày 23 tháng 12 năm 2024</div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Index;
