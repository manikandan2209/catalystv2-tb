import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ChevronDown } from 'lucide-react';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Image } from '~/components/image';
import { Link as CustomLink } from '~/components/link';
import { cn } from '~/lib/utils';

import { type Locale, LocaleSwitcher } from './locale-switcher';
import { MobileNav } from './mobile-nav';
import TopMenu from './top-menu';

interface Link {
  label: string;
  href: string;
}

interface Group {
  label: string;
  href: string;
  links?: Link[];
}

interface Image {
  src: string;
  altText: string;
}

interface Links {
  label: string;
  href: string;
  groups?: Group[];
}

interface Props extends ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {
  account?: ReactNode;
  activeLocale?: string;
  locales: Locale[];
  cart?: ReactNode;
  links: Links[];
  locale?: ReactNode;
  logo?: string | Image;
  contact?: ReactNode;
  isCustomer?: Boolean;
  search?: ReactNode;
}

const Header = ({
  account,
  activeLocale,
  cart,
  className,
  links,
  locales,
  logo,
  contact,
  isCustomer,
  search,
}: Props) => (
  <div className={cn('relative', className)}>
     <header className='font-normal'>
     <NavigationMenuPrimitive.Root>
      <div className='w-full'>
        <div className='class="group flex items-center justify-between gap-6  2xl:container  lg:gap-8 2xl:mx-auto 2xl:px-0"'>
          
     <NavigationMenuPrimitive.Link asChild className="shrink-0 px-0">
      <CustomLink className="overflow-hidden text-ellipsis py-3" href="/">
        {typeof logo === 'object' ? (
          <Image
            alt={logo.altText}
            className="max-h-16 object-contain"
            height={32}
            priority
            src={logo.src}
            width={155}
          />
        ) : (
          <span className="truncate text-2xl font-black">{logo}</span>
        )}
      </CustomLink>
      </NavigationMenuPrimitive.Link>
      <div className="flex grow">
          <NavigationMenuPrimitive.Link asChild className="shrink-0 px-5 text-2xl font-semibold text-primary hover:text-linkhover">
            {contact}
          </NavigationMenuPrimitive.Link>
          <div className="flex items-center">
                <div className="px-3">
                  <p className='text-primary font-semibold text-sm mb-0'>5 Star Rating</p>
                    <Image
                      alt="5 out of 5 stars rating"
                      className="w-full object-contain"
                      height={19}
                      src='https://cdn11.bigcommerce.com/s-zdnxndpmtf/stencil/bbcb4e80-af3c-013d-39e6-2e2401c5fc0d/e/b78a9440-87e5-013d-6dab-1afa30bfa8aa/img/stars.png'
                      width={84}
                    />
                </div>
                <Image
                  alt="Google Reviews logo"
                  className="object-contain"
                  height={44}
                  src='https://cdn11.bigcommerce.com/s-zdnxndpmtf/stencil/bbcb4e80-af3c-013d-39e6-2e2401c5fc0d/e/b78a9440-87e5-013d-6dab-1afa30bfa8aa/img/google-reviews.png'
                  width={114}
                />
            </div>
      </div>
      <div className='flex'>
        <TopMenu isCustomer={isCustomer} cart={cart} />
      </div>

      </div>
      </div>
      <div className="bg-primary">
        <div className="group grid  flex items-center justify-between gap-6 px-6 py-2 2xl:container sm:px-10 lg:gap-8 lg:px-12 2xl:mx-auto 2xl:px-0">
          {search}
        </div>
      </div>
      <div className='bg-gray-100 border-b w-full relativr'> 
        <div className='group items-center justify-between gap-6 px-6 2xl:container sm:px-10 lg:gap-8 lg:px-12 2xl:mx-auto 2xl:px-0 border-b-gray-300 block'>
          
      
      <NavigationMenuPrimitive.Root className="hidden xl:flex justify-between py-2 font-filson font-semibold text-[#3f3f41]">
        <NavigationMenuPrimitive.List className="flex items-center gap-2 lg:gap-4">
          {links.map((link) =>
            link.groups && link.groups.length > 0 && 0 ? (
              <NavigationMenuPrimitive.Item key={link.href}>
                <NavigationMenuPrimitive.Trigger className="group/button flex items-center font-semibold hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20">
                  <CustomLink className="p-3 font-semibold" href={link.href}>
                    {link.label}
                  </CustomLink>
                  <ChevronDown
                    aria-hidden="true"
                    className="cursor-pointer transition duration-200 group-data-[state=open]/button:-rotate-180"
                  />
                </NavigationMenuPrimitive.Trigger>
                <NavigationMenuPrimitive.Content className="flex gap-20 2xl:container data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 sm:px-10 lg:px-12 2xl:mx-auto 2xl:px-0">
                  {link.groups.map((group) => (
                    <ul className="flex flex-col" key={group.href}>
                      <li>
                        <NavigationMenuPrimitive.Link asChild>
                          <CustomLink className="block p-3 font-semibold" href={group.href}>
                            {group.label}
                          </CustomLink>
                        </NavigationMenuPrimitive.Link>
                      </li>
                    </ul>
                  ))}
                </NavigationMenuPrimitive.Content>
              </NavigationMenuPrimitive.Item>
            ) : (
          (!['Kyocera','Oki','Panasonic','Sharp','Copystar'].includes(link.label)) ?
          ( <NavigationMenuPrimitive.Item key={link.href}>
                <NavigationMenuPrimitive.Link asChild>
                  <CustomLink className="p-3 font-semibold" href={link.href}>
                    {link.label}
                  </CustomLink>
                </NavigationMenuPrimitive.Link>
              </NavigationMenuPrimitive.Item> ) :''
          ))}
          
              <NavigationMenuPrimitive.Item className='relative' key={'#more-brands'}>
              <NavigationMenuPrimitive.Trigger className="group/button flex items-center font-semibold hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20">
                <CustomLink className="p-3 font-semibold" href='#'>
                  More Brands
                </CustomLink>
                <ChevronDown
                  aria-hidden="true"
                  className="cursor-pointer transition duration-200 group-data-[state=open]/button:-rotate-180"
                />
              </NavigationMenuPrimitive.Trigger>
              <NavigationMenuPrimitive.Content className="flex gap-20 2xl:container data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 sm:px-10 lg:px-12 2xl:mx-auto 2xl:px-0">
                <ul className="flex flex-col">
                {links.map((link) => (['Kyocera','Oki','Panasonic','Sharp','Copystar'].includes(link.label)) ? (
                    <li  key={link.href}>
                      <NavigationMenuPrimitive.Link asChild>
                        <CustomLink className="block p-3 font-semibold" href={link.href}>
                          {link.label}
                        </CustomLink>
                      </NavigationMenuPrimitive.Link>
                    </li>
                ) : '')}
                </ul>
                </NavigationMenuPrimitive.Content>
                <NavigationMenuPrimitive.Viewport className="absolute  z-50 bg-white p-5 w-48 start-0 top-full z-50  bg-white shadow-xl duration-200 animate-in slide-in-from-top-5" />
              </NavigationMenuPrimitive.Item>
        </NavigationMenuPrimitive.List>
        
      </NavigationMenuPrimitive.Root>
      </div>
      </div>
      {/* <div className="flex items-center gap-2 lg:gap-4">
       
        <nav className="flex gap-2 lg:gap-4">
          {account}
          {cart}
        </nav>

        {activeLocale && locales.length > 0 ? (
          <LocaleSwitcher activeLocale={activeLocale} locales={locales} />
        ) : null}

        <MobileNav links={links} logo={logo} />
      </div> */}
      </NavigationMenuPrimitive.Root>
    </header>
  </div>
);

Header.displayName = 'Header';

export { Header, type Links };
