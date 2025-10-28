import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  FaArrowLeft,
  FaRegEnvelope,
  FaSearch,
  FaMicrophone,
  FaHome,
  FaVideo,
  FaUsers,
  FaRegImage,
  FaMapMarkerAlt,
  FaHeart,
  FaCommentDots,
  FaPhoneAlt,
  FaShare,
  FaRegBell,
  FaPlus,
  FaWallet,
  FaUser,
} from 'react-icons/fa';

export default function NewsfeedPage() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(20);
  const [showCommentBox, setShowCommentBox] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-24">
      {/* ===== Header ===== */}
      <header className="flex justify-between items-center p-4 bg-white shadow-sm sticky top-0 z-10">
        <Link href="/home">
          <a className="p-2 bg-gray-100 rounded-full">
            <FaArrowLeft className="text-gray-600" />
          </a>
        </Link>
        <div className="relative flex-grow mx-4">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Khám phá ngay"
            className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-10 outline-none text-sm"
          />
          <FaMicrophone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
        <button className="relative text-gray-600">
          <FaRegEnvelope size={24} />
          <span className="absolute -top-1 -right-1 block h-2.5 w-2.5 rounded-full bg-red-500 border border-white"></span>
        </button>
      </header>

      {/* ===== Tab Navigation ===== */}
      <nav className="flex justify-around bg-white border-b">
        <a
          href="#"
          className="flex-1 py-3 flex justify-center border-b-2 border-teal-600 text-teal-600"
        >
          <FaHome size={24} />
        </a>
        <a href="#" className="flex-1 py-3 flex justify-center text-gray-500">
          <FaVideo size={24} />
        </a>
        <a href="#" className="flex-1 py-3 flex justify-center text-gray-500">
          <FaUsers size={24} />
        </a>
      </nav>

      {/* ===== Create Post Section ===== */}
      <section className="bg-white p-4">
        <div className="flex items-center space-x-3">
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="Bạn đang nghĩ gì?"
            className="flex-grow bg-gray-100 rounded-full py-2 px-4 outline-none text-sm"
          />
          <FaRegImage size={24} className="text-green-500" />
        </div>
      </section>

      {/* ===== Post Card ===== */}
      <article className="bg-white mt-3">
        {/* Post Header */}
        <div className="flex items-start p-4">
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="ml-3 flex-grow">
            <p className="font-bold text-sm">Hồ Thành Trung</p>
            <div className="flex items-center text-xs text-gray-500">
              <span>08/06/2025</span>
              <span className="mx-1">·</span>
              <FaMapMarkerAlt className="text-red-500 mr-1" />
              <span>Quận Bình Thạnh, TP.HCM</span>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="px-4 pb-2">
          <div className="mb-2">
            <span className="bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
              Rác thải
            </span>
          </div>
          <p className="text-sm">
            Tình trạng rác thải bốc mùi hôi thối diễn ra lâu ngày nhưng chưa
            được xử lý!! Không khí khó chịu vô cùng :((
          </p>
          <div className="my-2">
            <div className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-md inline-flex items-center">
              Mức độ ô nhiễm không khí
              <span className="ml-2 bg-white text-teal-600 px-1 rounded">
                CAO
              </span>
            </div>
          </div>
          <div className="text-sm text-blue-600">
            <p>#racthai</p>
            <p>#onhiemkhongkhi</p>
          </div>
        </div>

        {/* Post Image */}
        <Image
          src="/report_3.jpg"
          alt="Post image"
          width={750}
          height={500}
          className="w-full object-cover"
        />

        {/* Post Stats */}
        <div className="flex justify-between items-center text-xs text-gray-500 px-4 py-2 border-b">
          <div>♥ {likeCount}</div>
          <div className="flex space-x-4">
            <span>10 bình luận</span>
            <span>5 lượt chia sẻ</span>
          </div>
        </div>

        {/* Post Actions */}
        <div className="flex justify-around py-1 text-sm font-semibold">
          <button
            onClick={handleLikeClick}
            className={`flex-1 flex justify-center items-center py-2 hover:bg-gray-100 rounded-md ${
              isLiked ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            <FaHeart className="mr-2" /> Thích
          </button>
          <button
            onClick={() => setShowCommentBox(!showCommentBox)}
            className="flex-1 flex justify-center items-center py-2 hover:bg-gray-100 rounded-md text-gray-600"
          >
            <FaCommentDots className="mr-2" /> Bình luận
          </button>
          <button className="flex-1 flex justify-center items-center py-2 hover:bg-gray-100 rounded-md text-gray-600">
            <FaPhoneAlt className="text-blue-500 mr-2" /> Liên hệ
          </button>
          <button className="flex-1 flex justify-center items-center py-2 hover:bg-gray-100 rounded-md text-gray-600">
            <FaShare className="mr-2" /> Chia sẻ
          </button>
        </div>

        {/* Ô bình luận */}
        {showCommentBox && (
          <div className="p-4 border-t">
            <div className="flex items-start space-x-3">
              <Image
                src="/avatar.png"
                alt="My Avatar"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <div className="flex-grow bg-gray-100 rounded-full flex items-center px-3">
                <input
                  type="text"
                  placeholder="Viết bình luận..."
                  className="w-full bg-transparent outline-none text-sm py-2"
                />
                <button className="text-sm font-semibold text-teal-600">
                  Gửi
                </button>
              </div>
            </div>
          </div>
        )}
      </article>

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
    </div>
  );
}
