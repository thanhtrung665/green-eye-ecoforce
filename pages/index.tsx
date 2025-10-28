// pages/index.js

import Image from 'next/image';
import Link from 'next/link'; // THAY ĐỔI 1: Import component Link đặc biệt

export default function LoginPage() {
  return (
    <main className="flex flex-col h-screen bg-teal-600">
      {/* Phần màu xanh lá ở trên */}
      <div className="flex-grow flex flex-col items-center justify-center px-8 text-white">
        <div className="mb-10">
          <Image
            src="/logo.png"
            alt="Green Eye Logo"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="w-full max-w-sm space-y-4">
          <div className="relative flex items-center border border-white/50 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Email hoặc điện thoại"
              className="w-full bg-transparent outline-none placeholder-white/70"
            />
          </div>
          <div className="relative flex items-center border border-white/50 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-2l1-1 1-1-1.257-1.257A6 6 0 1118 8zm-6-4a4 4 0 100 8 4 4 0 000-8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full bg-transparent outline-none placeholder-white/70"
            />
          </div>
        </div>
      </div>
      {/* Phần màu trắng ở dưới */}
      <div className="bg-white rounded-t-3xl px-8 py-10 flex flex-col items-center">
        <div className="w-full max-w-sm">
          <a
            href="#"
            className="block text-sm text-gray-500 hover:underline text-center mb-4"
          >
            Quên mật khẩu?
          </a>

          {/* THAY ĐỔI 2: Bọc nút Đăng nhập trong thẻ Link và chỉ đến "/home" */}
          <Link href="/home">
            <button className="w-full bg-teal-700 text-white font-bold py-3 rounded-full hover:bg-teal-800 transition-colors">
              Đăng nhập
            </button>
          </Link>

          <p className="my-6 text-gray-400 text-center">hoặc</p>
          <button className="w-full bg-gray-200 text-gray-600 font-bold py-3 rounded-full hover:bg-gray-300 transition-colors">
            Tạo một tài khoản
          </button>
        </div>
      </div>
    </main>
  );
}
