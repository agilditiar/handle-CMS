"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Login Sederhana (Username: admin, Pass: admin123)
    if (username === 'admin@desa.id' && password === 'admin123') {
       localStorage.setItem('isAdmin', 'true'); // Simpan sesi
       router.push('/admin/dashboard'); // Redirect ke dashboard
    } else {
       setError('Username atau Password salah!');
    }
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center overflow-hidden">
       
       {/* 1. BACKGROUND IMAGE FULL SCREEN */}
       <div className="absolute inset-0 z-0">
           {/* Gambar Background */}
           <div className="w-full h-full bg-[url('/images/desa-adat-osing-kemiren.png')] bg-cover bg-center"></div>
           {/* Overlay Gelap + Blur agar tulisan jelas */}
           <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
       </div>

       {/* 2. KARTU LOGIN */}
       <div className="relative z-10 w-full max-w-md px-6">
           <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20 animate-fade-in-up">

               {/* Logo & Judul */}
               <div className="text-center mb-8">
                   <div className="w-20 h-24 mx-auto mb-4 bg-white p-2 rounded-xl shadow-md border border-slate-100 flex items-center justify-center">
                       {/* Pastikan file logo.jpg ada di public/images */}
                       <img src="/images/logo.jpg" alt="Logo Desa" className="w-full h-full object-contain" />
                   </div>
                   <h1 className="text-2xl font-bold text-slate-800 font-serif tracking-tight">Login Administrator</h1>
                   <p className="text-slate-500 text-xs uppercase tracking-widest mt-1 font-bold">
                       Sistem Informasi Desa Harmoni
                   </p>
               </div>

               {/* Form Input */}
               <form onSubmit={handleLogin} className="space-y-5">
                   
                   {/* Pesan Error */}
                   {error && (
                       <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg border border-red-100 text-center font-bold flex items-center justify-center gap-2 animate-pulse">
                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                           {error}
                       </div>
                   )}

                   <div>
                       <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Username</label>
                       <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                           </div>
                           <input
                             type="text" required
                             className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 transition font-bold text-slate-700 placeholder:font-normal"
                             placeholder="Masukkan username"
                             value={username}
                             onChange={(e) => setUsername(e.target.value)}
                           />
                       </div>
                   </div>

                   <div>
                       <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Password</label>
                       <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                           </div>
                           <input
                             type="password" required
                             className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 transition font-bold text-slate-700 placeholder:font-normal"
                             placeholder="Masukkan password"
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                           />
                       </div>
                   </div>

                   <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-500/30 transition transform hover:-translate-y-1 mt-4">
                       🔐 Masuk Dashboard
                   </button>
               </form>

               {/* Footer Kecil */}
               <div className="text-center mt-8 pt-6 border-t border-slate-100">
                   <p className="text-xs text-slate-400">
                       &copy; 2026 Pemerintah Desa Harmoni<br/>Kabupaten Banyuwangi
                   </p>
               </div>

           </div>
       </div>

    </main>
  );
}