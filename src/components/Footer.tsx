import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-white/10 text-zinc-400">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500">© Ogwu Ojochegbe</p>
          <div className="flex gap-8">
            <a 
              href="https://behance.net/ojochegbe" 
              className="text-zinc-400 no-underline transition-colors duration-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </a>
            <a 
              href="mailto:ojochegbeng@gmail.com" 
              className="text-zinc-400 no-underline transition-colors duration-300 hover:text-white"
            >
              Email
            </a>
            <a 
              href="https://wa.me/2348053680526" 
              className="text-zinc-400 no-underline transition-colors duration-300 hover:text-white flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
         
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
