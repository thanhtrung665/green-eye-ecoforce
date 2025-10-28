import Image from 'next/image';
import Link from 'next/link';
import { 
  FaArrowLeft, FaWallet as FaWalletIcon, FaShoppingBag, FaChartArea, FaHistory, FaEllipsisH,
  FaHome, FaRegBell, FaPlus, FaUser
} from 'react-icons/fa';

// Dữ liệu mẫu cho lịch sử giao dịch
const transactions = [
  { type: 'Cộng', amount: 5, reason: 'từ bài viết phán ánh tại Phường 25', time: '13 giờ trước', iconColor: 'text-green-500' },
  { type: 'Trừ', amount: 5, reason: 'từ giao dịch quy đổi', time: '15 giờ trước', iconColor: 'text-orange-500' },
];

export default function WalletPage() {
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
          Ví của bạn
        </div>
      </header>

      {/* ===== User Balance Card ===== */}
      <section className="p-4">
        <div className="bg-teal-600 text-white p-5 rounded-xl shadow-lg">
          <div className="flex justify-between items-start">
            <p className="text-4xl font-bold">300.0 Xu</p>
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                $
            </div>
          </div>
          <div className="flex justify-between items-end mt-4">
            <div>
                <p className="font-semibold">Ho Thanh Trung</p>
                <p className="text-sm opacity-80">0768 546 32</p>
            </div>
            <Image src="/logo.png" alt="Green Eye Logo" width={40} height={40} />
          </div>
        </div>
      </section>

      {/* ===== Action Toolbar ===== */}
      <section className="px-4 flex justify-around items-center bg-white p-3 rounded-lg mx-4 shadow-sm">
        <button className="flex flex-col items-center text-gray-600"><div className="p-2 bg-gray-100 rounded-full"><FaWalletIcon /></div><span className="text-xs mt-1">Nạp ví</span></button>
        <button className="flex flex-col items-center text-gray-600"><div className="p-2 bg-gray-100 rounded-full"><FaShoppingBag /></div><span className="text-xs mt-1">Quy đổi</span></button>
        <button className="flex flex-col items-center text-gray-600"><div className="p-2 bg-gray-100 rounded-full"><FaChartArea /></div><span className="text-xs mt-1">Quyên góp</span></button>
        <button className="flex flex-col items-center text-gray-600"><div className="p-2 bg-gray-100 rounded-full"><FaHistory /></div><span className="text-xs mt-1">Lịch sử</span></button>
        <button className="flex flex-col items-center text-gray-600"><div className="p-2 bg-gray-100 rounded-full"><FaEllipsisH /></div><span className="text-xs mt-1">Khác</span></button>
      </section>

      {/* ===== Transaction History ===== */}
      <section className="p-4 mt-2">
        <h2 className="font-bold text-gray-800 mb-3 border-b pb-2">Lịch sử biến động</h2>
        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-8 h-8 ${tx.iconColor.replace('text-', 'bg-').replace('-500', '-100')} rounded-full flex items-center justify-center mr-3`}>
                    <span className={`font-bold ${tx.iconColor}`}>$</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{tx.type === 'Cộng' ? '+' : '-'} {tx.amount} Xu {tx.reason}</p>
                  <p className="text-xs text-gray-500">{tx.time}</p>
                </div>
              </div>
              <button className="text-gray-400"><FaEllipsisH /></button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Bottom Navigation Bar ===== */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center p-2 text-gray-500">
        <Link href="/home"><a className="flex flex-col items-center hover:text-teal-600"><FaHome size={24} /><span className="text-xs mt-1">Trang chủ</span></a></Link>
        <a href="#" className="flex flex-col items-center hover:text-teal-600"><FaRegBell size={24} /><span className="text-xs mt-1">Thông báo</span></a>
        <Link href="/create-report"><a className="bg-teal-600 text-white p-4 rounded-full -mt-8 border-4 border-white shadow-lg"><FaPlus size={24} /></a></Link>
        <Link href="/wallet"><a className="flex flex-col items-center text-teal-600"><FaWalletIcon size={24} /><span className="text-xs mt-1 font-semibold">Ví tiền</span></a></Link>
        <a href="#" className="flex flex-col items-center hover:text-teal-600"><FaUser size={24} /><span className="text-xs mt-1">Profile</span></a>
      </nav>
    </div>
  );
}