import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaStar,
  FaHome,
  FaRegBell,
  FaPlus,
  FaWallet,
  FaUser,
} from 'react-icons/fa';

// Dữ liệu mẫu cho bảng xếp hạng
const users = [
  {
    name: 'Dani Martinez',
    location: 'Q.Bình Chánh-TP.HCM',
    rank: 4,
    avatar: '/person3.jpg',
  },
  {
    name: 'Trần Thị Minh',
    location: 'Q.Bình Chánh-TP.HCM',
    rank: 5,
    avatar: '/person_4.jpg',
  },
  {
    name: 'Thái Hoàng Minh',
    location: 'Q.Bình Chánh-TP.HCM',
    rank: 6,
    avatar: '/person_6.jpg',
  },
  {
    name: 'Đinh Minh Mẫn',
    location: 'Q.Bình Chánh-TP.HCM',
    rank: 7,
    avatar: '/person_7.png',
  },
];

export default function RankPage() {
  return (
    <div className="bg-gray-100 min-h-screen pb-24">
      {/* ===== Header ===== */}
      <header className="bg-white p-4 shadow-sm">
        <div className="flex items-center space-x-4">
          <Link href="/home">
            <button className="p-2 bg-gray-100 rounded-lg">
              <FaArrowLeft className="text-gray-600" />
            </button>
          </Link>
          <div className="bg-teal-600 text-white font-bold px-4 py-2 rounded-lg shadow-md">
            BẢNG XẾP HẠNG
          </div>
        </div>
      </header>

      {/* ===== Title ===== */}
      <div className="flex items-center p-4 space-x-3">
        <FaStar className="text-teal-600" size={24} />
        <h1 className="bg-teal-700 text-white font-bold px-6 py-2 rounded-lg text-lg">
          TOP 100 XẾP HẠNG NHÀ BÁO CÁO
        </h1>
      </div>

      {/* ===== Podium (Top 3) ===== */}
      <section className="px-4 pt-8 pb-4">
        <div className="flex justify-center items-end space-x-2">
          {/* Hạng 2 */}
          <div className="flex flex-col items-center">
            <Image
              src={'/peraon_1.jpg'}
              alt="Leon Vu"
              width={80}
              height={80}
              className="rounded-full border-4 border-gray-300 object-cover"
            />
            <p className="font-bold mt-2">Leon Vu</p>
            <p className="text-xs text-gray-500">Q.1-TP.HCM</p>
            <div className="mt-1 px-3 py-1 bg-gray-300 text-white font-bold rounded-full text-sm">
              2
            </div>
          </div>

          {/* Hạng 1 */}
          <div className="flex flex-col items-center mx-2">
            <div className="relative">
              <Image
                src={'/avatar.png'}
                alt="Thành Trung"
                width={100}
                height={100}
                className="rounded-full border-4 border-yellow-400 object-cover"
              />
              <span className="absolute -top-3 -right-3 text-3xl">⭐</span>
            </div>
            <p className="font-bold mt-2">Thành Trung</p>
            <p className="text-xs text-gray-500">Bình Thạnh-TP.HCM</p>
            <div className="mt-1 px-3 py-1 bg-yellow-400 text-white font-bold rounded-full text-sm">
              1
            </div>
          </div>

          {/* Hạng 3 */}
          <div className="flex flex-col items-center">
            <Image
              src={'/person_5.jpg'}
              alt="Cát Tường"
              width={80}
              height={80}
              className="rounded-full border-4 border-orange-400 object-cover"
            />
            <p className="font-bold mt-2">Cát Tường</p>
            <p className="text-xs text-gray-500">Q.2-TP.HCM</p>
            <div className="mt-1 px-3 py-1 bg-orange-400 text-white font-bold rounded-full text-sm">
              3
            </div>
          </div>
        </div>
      </section>

      {/* ===== Ranking List (Top 4 onwards) ===== */}
      <section className="px-4 py-4 bg-white">
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.rank} className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="font-bold text-gray-600 mr-4">TOP {user.rank}</p>
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-bold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.location}</p>
                </div>
              </div>
              <button className="text-gray-400">•••</button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Bottom Navigation Bar ===== */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center p-2 text-gray-500">
        
        {/* ----- ĐÂY LÀ PHẦN ĐÃ SỬA LỖI ----- */}
        <Link href="/home">
          <a className="flex flex-col items-center text-teal-600">
            <FaHome size={24} />
            <span className="text-xs mt-1 font-semibold">Trang chủ</span>
          </a>
        </Link>
        {/* ----- KẾT THÚC PHẦN SỬA LỖI ----- */}

        <a href="#" className="flex flex-col items-center hover:text-teal-600">
          <FaRegBell size={24} />
          <span className="text-xs mt-1">Thông báo</span>
        </a>
        <button className="bg-teal-600 text-white p-4 rounded-full -mt-8 border-4 border-white shadow-lg">
          <FaPlus size={24} />
        </button>
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