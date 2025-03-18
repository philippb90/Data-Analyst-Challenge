import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to dashboard on client-side
    router.replace('/dashboard');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">BOB Gateway Analytics</h1>
        <p className="mb-4">Redirecting to dashboard...</p>
        <div className="w-16 h-1 mx-auto bg-blue-600 animate-pulse"></div>
      </div>
    </div>
  );
}