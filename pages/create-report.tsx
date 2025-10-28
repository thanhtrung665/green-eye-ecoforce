import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react'; // Sử dụng State và Ref
import {
  FaArrowLeft,
  FaGlobe,
  FaPlus,
  FaChevronDown,
  FaMapMarkerAlt,
  FaHome,
  FaRegBell,
  FaWallet,
  FaUser,
  FaTag,
  FaSmile,
  FaMusic,
} from 'react-icons/fa';

export default function CreateReportPage() {
  // Các "bộ nhớ" (state) để lưu trữ thông tin
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Trạng thái dropdown mở hay đóng
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null); // <-- THÊM DÒNG NÀY
  const [location, setLocation] = useState(''); // Vị trí người dùng nhập
  const [pollutionLevel, setPollutionLevel] = useState(50); // State để lưu giá trị thanh trượt

  // Tạo một tham chiếu (ref) để "chạm" vào input file bị ẩn
  const fileInputRef = useRef(null);

  // Hàm được gọi khi người dùng chọn một file ảnh
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // THÊM KIỂM TRA Ở ĐÂY
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
  }
};
  };

  // Hàm được gọi khi người dùng nhấn vào khu vực tải ảnh
  const handleImageUploadClick = () => {
    fileInputRef.current.click();
  };

  // Tạo style động cho nền của thanh trượt để có màu
  const sliderBgStyle = {
    background: `linear-gradient(to right, #14b8a6 ${pollutionLevel}%, #e5e7eb ${pollutionLevel}%)`,
  };

  return (
    <div className="bg-white min-h-screen pb-40">
      {' '}
      {/* Tăng padding bottom */}
      {/* ===== Header ===== */}
      <header className="flex justify-between items-center p-4 border-b">
        <Link href="/home">
          <a className="p-2 bg-gray-100 rounded-lg">
            <FaArrowLeft className="text-gray-600" />
          </a>
        </Link>
        <h1 className="font-bold text-lg text-gray-800">Đăng bài</h1>
        <button className="bg-teal-600 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:bg-teal-700">
          Đăng
        </button>
      </header>
      {/* ===== User Info & Dropdown Phân loại ===== */}
      <div className="p-4">
        <div className="flex items-center">
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div className="ml-3">
            <p className="font-bold text-gray-800">Hồ Thành Trung</p>
            <div className="flex items-center space-x-2 mt-1">
              <button className="flex items-center bg-gray-200 px-2 py-1 rounded-md text-xs">
                <FaGlobe size={12} className="mr-1" /> Công khai{' '}
                <FaChevronDown size={12} className="ml-1" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center bg-gray-200 px-2 py-1 rounded-md text-xs"
                >
                  <FaPlus size={12} className="mr-1" /> Phân loại{' '}
                  <FaChevronDown size={12} className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 w-32">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Rác thải
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Khí thải
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Nước thải
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===== Main Content ===== */}
      <div className="px-4 space-y-4">
        <textarea
          placeholder="Bạn báo cáo về vấn đề gì?"
          className="w-full h-20 text-xl outline-none resize-none placeholder-gray-400"
        />

        {/* ----- PHẦN ĐO MỨC ĐỘ BỊ THIẾU ----- */}
        <div className="space-y-3">
          <div className="bg-teal-50 p-3 rounded-lg">
            <label
              htmlFor="pollution-slider"
              className="block text-sm font-bold text-teal-800 mb-2"
            >
              Đo mức độ ô nhiễm
            </label>
            <input
              id="pollution-slider"
              type="range"
              min="0"
              max="100"
              value={pollutionLevel}
              onChange={(e) => setPollutionLevel(e.target.value)}
              style={sliderBgStyle}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-teal-700 mt-1 px-1">
              <span>Thấp</span>
              <span>Trung bình</span>
              <span>Cao</span>
            </div>
          </div>
        </div>
        <p className="text-gray-400">#tags</p>
        {/* ----- KẾT THÚC PHẦN BỔ SUNG ----- */}

        <div className="flex items-center border-t border-b py-3">
          <FaMapMarkerAlt className="text-red-500 mr-3" />
          <input
            type="text"
            placeholder="Thêm vị trí báo cáo..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full outline-none placeholder-gray-400"
          />
        </div>
      </div>
      {/* ===== Image Upload Area ===== */}
      <div className="p-4">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
          accept="image/*"
        />
        {selectedImage ? (
          <div className="relative w-full h-48">
            <Image
              src={selectedImage}
              alt="Preview"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 leading-none"
            >
              &times;
            </button>
          </div>
        ) : (
          <div
            onClick={handleImageUploadClick}
            className="flex flex-col items-center justify-center bg-gray-100 p-10 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 cursor-pointer hover:bg-gray-200"
          >
            <div className="bg-gray-300 p-4 rounded-full">
              <FaPlus size={24} className="text-white" />
            </div>
            <p className="mt-2 font-semibold">Thêm ảnh hoặc video</p>
          </div>
        )}
      </div>
      {/* ===== PHẦN BOTTOM BARS BỊ THIẾU ===== */}
      {/* ===== Action Toolbar ===== */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-b">
        <div className="flex justify-around items-center p-3 text-gray-600">
          <button className="flex items-center font-semibold">
            <FaTag className="text-green-500 mr-2" />
            Gắn thẻ
          </button>
          <button className="flex items-center font-semibold">
            <FaSmile className="text-yellow-500 mr-2" />
            Cảm xúc
          </button>
          <button className="flex items-center font-semibold">
            <FaMusic className="text-purple-500 mr-2" />
            Âm thanh
          </button>
        </div>
      </div>
      {/* ===== Bottom Navigation Bar ===== */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center p-2 text-gray-500">
        <Link href="/home">
          <a className="flex flex-col items-center hover:text-teal-600">
            <FaHome size={24} />
            <span className="text-xs mt-1">Trang chủ</span>
          </a>
        </Link>
        <a href="#" className="flex flex-col items-center hover:text-teal-600">
          <FaRegBell size={24} />
          <span className="text-xs mt-1">Thông báo</span>
        </a>

        <Link href="/create-report">
          <a className="bg-teal-600 text-white p-4 rounded-full -mt-8 border-4 border-white shadow-lg">
            <FaPlus size={24} />
          </a>
        </Link>

        <a href="#" className="flex flex-col items-center hover:text-teal-600">
          <FaWallet size={24} />
          <span className="text-xs mt-1">Ví tiền</span>
        </a>
        <a href="#" className="flex flex-col items-center hover:text-teal-600">
          <FaUser size={24} />
          <span className="text-xs mt-1">Profile</span>
        </a>
      </nav>
      {/* ===== KẾT THÚC PHẦN BỔ SUNG ===== */}
    </div>
  );
}




