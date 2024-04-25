import React from 'react';

interface FooterLinkProps {
  url: string;
  label: string;
}

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterLink = ({ url, label }: FooterLinkProps) => (
  <li className='text-base font-medium text-mblack'>
    <a href={url}>{label}</a>
  </li>
);

const FooterSection = ({ title, children }: FooterSectionProps) => (
  <div>
    <h4 className='mb-10 text-base font-medium text-mspan'>{title}</h4>
    {children}
  </div>
);

const getCurrentYear = () => {
  return new Date().getFullYear();
};

function Footer() {
  const links = [
    { url: '/', label: 'Home' },
    { url: '/', label: 'Shop' },
    { url: '/', label: 'About' },
    { url: '/', label: 'Contact' },
  ];

  const helps = [
    { url: '/', label: 'Payment Options' },
    { url: '/', label: 'Return' },
    { url: '/', label: 'Privacy Policies' },
  ];

  return (
    <footer className='bg-white text-gray-800 mx-auto max-w-7xl px-3 py-10 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <div>
          <h4 className='mb-10 text-2xl font-bold text-mblack'>Funiro.</h4>
          <address className='text-no text-sm text-mspan'>
            400 University Drive Suite 200 Coral
            <br />
            Gables,
            <br />
            FL 33134 USA
          </address>
        </div>
        <FooterSection title='Links'>
          <ul className='space-y-10'>
            {links.map(link => (
              <FooterLink key={link.label} url={link.url} label={link.label} />
            ))}
          </ul>
        </FooterSection>
        <FooterSection title='Help'>
          <ul className='space-y-10'>
            {helps.map(help => (
              <FooterLink key={help.label} url={help.url} label={help.label} />
            ))}
          </ul>
        </FooterSection>
        <FooterSection title='Newsletter'>
          <form className='flex'>
            <input
              type='email'
              placeholder='Enter your email address'
              className='border-gray-300 focus:border-gray-300 border-0 border-b-2 focus:border-0 focus:border-b-2 focus:outline-none focus:ring-0'
            />
            <button
              type='submit'
              className='ml-4 border-0 border-b-2 border-solid border-mblack text-sm font-medium text-mblack'
            >
              SUBSCRIBE
            </button>
          </form>
        </FooterSection>
      </div>
      <div className='my-10 border-t border-mline' />
      <p className='text-left text-base text-mblack'>
        © {getCurrentYear()} Funiro. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
