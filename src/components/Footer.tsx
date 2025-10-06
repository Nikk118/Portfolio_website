import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-slate-300">
          Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Nikhil Yagik
        </p>
        <p className="text-slate-400 text-sm mt-2">
          {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
