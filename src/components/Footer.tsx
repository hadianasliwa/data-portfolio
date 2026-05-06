import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-zinc-100 dark:border-slate-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-slate-600 block mb-2">
              © {new Date().getFullYear()} HADIANA SLIWA / DESIGNED FOR IMPACT
            </span>
            <div className="flex gap-4 text-[9px] font-bold uppercase tracking-widest text-zinc-300 dark:text-slate-800">
               <span>V1.0.4</span>
               <span>|</span>
               <span>London, UK</span>
            </div>
          </div>
          
          <div className="flex space-x-8">
            {[
              { icon: Github, href: "https://github.com/hadianasliwa" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/hadiana-sliwa/" },
              { icon: Mail, href: "mailto:hadiana.eng@gmail.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-300 dark:text-slate-800 hover:text-indigo-600 dark:hover:text-slate-500 transition-colors"
                id={`footer-social-${i}`}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
