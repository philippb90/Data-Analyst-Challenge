import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="mb-6 text-gray-600">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link href="/dashboard" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}