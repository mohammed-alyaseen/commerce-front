import Link from 'next/link';

import GitHubIcon from 'components/icons/github';
import LogoIcon from 'components/icons/logo';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';

const { SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <footer className="border-t border-gray-700 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 border-b border-gray-700 py-12 transition-colors duration-150 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-3">
            <Link className="flex flex-initial items-center font-bold md:mr-24" href="/">
              <span className="mr-2">
                <LogoIcon className="h-8" />
              </span>
              <span>{SITE_NAME}</span>
            </Link>
          </div>
          {menu.length ? (
            <nav className="col-span-1 lg:col-span-7">
              <ul className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-4">
                {menu.map((item: Menu) => (
                  <li key={item.title} className="py-3 md:py-0 md:pb-4">
                    <Link
                      href={item.path}
                      className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
          <div className="col-span-1 text-black lg:col-span-2 dark:text-white">
            <a
              aria-label="Github Repository"
              href="http://github.com/mohammed-alyaseen/commerce-front"
            >
              <GitHubIcon className="h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 pb-10 pt-6 text-sm md:flex-row">
          <p>
            &copy; {copyrightDate} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-white dark:text-black">
            <span className="text-black dark:text-white">Reproduce by </span>
            <a
              rel="noopener noreferrer"
              href="https://mohammed-alyaseen.github.io/portfolio/"
              aria-label="Vercel.com Link"
              target="_blank"
              className="text-black dark:text-white"
            >
              &nbsp; Mohammed Al-yaseen
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
