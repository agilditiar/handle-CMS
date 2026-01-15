"use client";
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar from './components/Sidebar'; // Import sidebar yang baru kita buat

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Cek Login Terpusat
  useEffect(() => {
    // Jika di halaman login, tidak perlu cek token
    if (pathname === '/admin/login') {
        setIsAuthorized(true);
        return;
    }

    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
        router.push('/admin/login');
    } else {
        setIsAuthorized(true);
    }
  }, [pathname, router]);

  // Jika sedang memuat (belum dicek auth-nya), tampilkan loading sebentar (opsional)
  if (!isAuthorized) return null; 

  // PENGECUALIAN: Halaman Login Admin JANGAN pakai Sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // TAMPILAN DASHBOARD (Sidebar + Konten Kanan)
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* 1. Sidebar (Fixed kiri) */}
      <Sidebar />

      {/* 2. Konten Utama (Disebelah kanan sidebar) */}
      {/* Kita kasih margin-left (ml-64) supaya tidak tertutup sidebar yang fixed */}
      <main className="flex-1 ml-0 md:ml-0 min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}