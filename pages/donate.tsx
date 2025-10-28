import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaChartLine,
  FaChevronDown,
  FaHome,
  FaRegBell,
  FaPlus,
  FaWallet,
  FaUser,
} from 'react-icons/fa';

// ----- DỮ LIỆU ĐÃ ĐƯỢC CẬP NHẬT -----
const campaigns = [
  {
    name: 'Saigon Xanh',
    totalDonated: '500.000 xu',
    yourContribution: '500 Xu',
    logo: '/saigon_xanh.jpg',
  },
  {
    name: 'HaNoi Xanh',
    totalDonated: '650.000 Xu',
    yourContribution: '600 Xu',
    logo: '/hanoi_xanh.jpg',
  },
  {
    name: 'Hội môi trường',
    totalDonated: '300.000 Xu',
    yourContribution: '300 Xu',
    logo: '/moi_truong.jpg',
  },
];
// ----- KẾT THÚC CẬP NHẬT -----

export default function DonatePage() {
  return (
    <div className="bg-gray-100 min-h-screen pb-24">
      {/* ===== Header ===== */}
      <header className="flex items-center p-4 space-x-4 bg-white shadow-sm">
        <Link href="/home">
          <a className="p-2 bg-gray-100 rounded-lg">
            <FaArrowLeft className="text-gray-600" />
          </a>
        </Link>
        <div className="bg-teal-600 text-white font-bold px-6 py-2 rounded-lg shadow-md text-lg">
          Quyên góp
        </div>
      </header>

      {/* ===== User Balance Card ===== */}
      <section className="p-4">
        <div className="bg-teal-600 text-white p-4 rounded-xl shadow-lg flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold">300.0 Xu</p>
            <p className="font-semibold mt-1">Ho Thanh Trung</p>
            <p className="text-sm opacity-80">0768 546 32</p>
          </div>
          <FaChartLine size={48} className="opacity-50" />
        </div>
      </section>

      {/* ===== Sort Filter ===== */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        <p className="font-bold text-gray-700">Sắp xếp</p>
        <button className="flex items-center text-gray-500">
          24h Trước <FaChevronDown className="ml-1" size={12} />
        </button>
      </div>

      {/* ===== Campaigns List ===== */}
      <section className="px-4 space-y-3">
        {campaigns.map((campaign, index) => (
          // ----- PHẦN NÀY ĐÃ ĐƯỢC CẬP NHẬT -----
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center">
              {/* Thay thế icon bằng Image */}
              <Image
                src={campaign.logo}
                alt={campaign.name}
                width={42}
                height={42}
                className="rounded-full object-cover mr-3"
              />
              <div>
                <p className="font-bold text-gray-600">{campaign.name}</p>
                {/* Hiển thị số tiền lớn ở đây */}
                <p className="font-bold text-teal-500 text-sm">
                  {campaign.totalDonated}
                </p>
                <a href="#" className="text-xs text-blue-500 underline">
                  Thông tin chiến dịch
                </a>
              </div>
            </div>
            <div className="text-right">
              {/* Hiển thị số tiền nhỏ ở đây */}
              <p className="text-sm text-gray-600">
                {campaign.yourContribution}
              </p>
              <button className="mt-1 bg-teal-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                Quyên góp
              </button>
            </div>
          </div>
          // ----- KẾT THÚC CẬP NHẬT -----
        ))}
      </section>

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
