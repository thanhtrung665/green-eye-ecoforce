import Image from 'next/image';
import Link from 'next/link';
import {
  FaRegEnvelope,
  FaSearch,
  FaMicrophone,
  FaRegListAlt,
  FaStar,
  FaHandHoldingHeart,
  FaRegCommentDots,
  FaHome,
  FaRegBell,
  FaPlus,
  FaWallet,
  FaUser,
} from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen pb-24">
      {/* ===== Header ===== */}
      <header className="p-4 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="font-bold text-teal-600 ml-2">GREEN EYE</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/avatar.jpg"
              alt="User Avatar"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="font-bold text-gray-800">HỒ THÀNH TRUNG</p>
              <p className="text-sm text-gray-500">Chào mừng trở lại!</p>
            </div>
          </div>
          <button className="relative text-gray-600">
            <FaRegEnvelope size={24} />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
          </button>
        </div>
      </header>

      {/* ===== Search Bar ===== */}
      <div className="p-4">
        <div className="relative flex items-center bg-white rounded-full shadow-sm p-3">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Khám phá ngay"
            className="w-full bg-transparent outline-none ml-3 text-gray-700"
          />
          <FaMicrophone className="text-gray-500" />
        </div>
      </div>

      {/* ===== Quick Actions ===== */}
      <section className="px-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-gray-800">Trang chủ</h2>
          <a href="#" className="text-sm text-teal-600 font-semibold">
            See All
          </a>
        </div>
        <div className="grid grid-cols-4 gap-4 text-center">
          <Link href="/newfeed">
            <a className="flex flex-col items-center">
              <div className="bg-teal-100 p-4 rounded-xl text-teal-600">
                <FaRegListAlt size={24} />
              </div>
              <span className="text-xs mt-2 font-medium text-gray-700">
                Bảng tin
              </span>
            </a>
          </Link>

          <Link href="/rank">
            <a className="flex flex-col items-center">
              <div className="bg-teal-100 p-4 rounded-xl text-teal-600">
                <FaStar size={24} />
              </div>
              <span className="text-xs mt-2 font-medium text-gray-700">
                Rank
              </span>
            </a>
          </Link>

          <Link href="/donate">
            <a className="flex flex-col items-center">
              <div className="bg-teal-100 p-4 rounded-xl text-teal-600">
                <FaHandHoldingHeart size={24} />
              </div>
              <span className="text-xs mt-2 font-medium text-gray-700">
                Quyên góp
              </span>
            </a>
          </Link>

          <div className="flex flex-col items-center">
            <div className="bg-teal-100 p-4 rounded-xl text-teal-600">
              <FaRegCommentDots size={24} />
            </div>
            <span className="text-xs mt-2 font-medium text-gray-700">
              Nhắn tin
            </span>
          </div>
        </div>
      </section>

      {/* ===== Top Reviews ===== */}
      <section className="mt-6 bg-teal-600 py-4">
        <div className="flex justify-between items-center mb-3 px-4">
          <h2 className="font-bold text-white">
            Top Review nổi bật tại khu vực bạn
          </h2>
          <a href="#" className="text-sm text-white font-semibold">
            See All
          </a>
        </div>
        <div className="flex space-x-4 overflow-x-auto p-4 pt-0 scrollbar-hide">
          <div className="flex-shrink-0 w-40 bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/report_1.jpg"
              alt="Review 1"
              width={160}
              height={100}
              className="object-cover"
            />
            <div className="p-3">
              <p className="font-bold text-sm text-gray-800">Hồ Thành Trung</p>
              <p className="text-xs text-gray-500">Q.2 - TP.HCM</p>
              <span className="text-xs text-red-500">♥ 1k reviews</span>
            </div>
          </div>
          <div className="flex-shrink-0 w-40 bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/report_2.jpg"
              alt="Review 2"
              width={160}
              height={100}
              className="object-cover"
            />
            <div className="p-3">
              <p className="font-bold text-sm text-gray-800">Thái Vân Anh</p>
              <p className="text-xs text-gray-500">Bình Thạnh</p>
              <span className="text-xs text-red-500">♥ 500 reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Map Preview ===== */}
      <section className="mt-4 px-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-gray-800">Bản đồ báo cáo</h2>

          <a href="#" className="text-sm text-teal-600 font-semibold">
            See All
          </a>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="/map_home.png"
            alt="Map Preview"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* ===== Bottom Navigation Bar ===== */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center p-2 text-gray-500">
        <Link href="/home">
          <a className="flex flex-col items-center text-teal-600">
            <FaHome size={24} />
            <span className="text-xs mt-1 font-semibold">Trang chủ</span>
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
        <Link href="/wallet">
          <a className="flex flex-col items-center hover:text-teal-600">
            <FaWallet size={24} />
            <span className="text-xs mt-1">Ví tiền</span>
          </a>
        </Link>
        <a href="#" className="flex flex-col items-center hover:text-teal-600">
          <FaUser size={24} />
          <span className="text-xs mt-1">Profile</span>
        </a>
      </nav>
    </div>
  );
}
