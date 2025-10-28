import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-gray-600">
      <button onClick={router.back}>back</button>
      <div className="mt-4">Account</div>
    </div>
  );
};

export default HomePage;
