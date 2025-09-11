import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300">© Ogwu Ojochegbe</p>
          <div className="flex gap-8">
            <a 
              href="https://behance.net/ojochegbe" 
              className="text-gray-300 no-underline transition-colors duration-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </a>
            <a 
              href="mailto:ojochegbeng@gmail.com" 
              className="text-gray-300 no-underline transition-colors duration-300 hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
