import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { Link as CustomLink } from '~/components/link';
import { Button } from '~/components/ui/button';
import { User } from 'lucide-react';
import { logout } from '~/components/header/_actions/logout';
import { ReactNode } from 'react';
interface Props {
    isCustomer ?: Boolean;
    cart ?: ReactNode;
}
const TopMenu = ( {isCustomer, cart} :Props ) => (
    <NavigationMenuPrimitive.List className="flex h-full gap-0 lg:gap-0 font-filson text-sm">
        <NavigationMenuPrimitive.Item className={`hidden xl:flex ${isCustomer ? 'self-stretch' : ''}`}>
            {isCustomer ? (
                <div className="group/account flex cursor-pointer items-center">
                    <CustomLink
                        aria-label="Account"
                        className="p-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                        href="/account"
                    >
                        <User aria-hidden="true" />
                    </CustomLink>

                    <ul className="absolute -right-12 top-full z-10 hidden cursor-default bg-white p-6 pb-8 shadow-md group-hover/account:block [&>li]:mb-2">
                        <li>
                            <CustomLink
                                className="whitespace-nowrap font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                                href="/account"
                            >
                                My account
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink
                                className="whitespace-nowrap focus-visible:outline-none focus-visible:ring-4"
                                href="/account/orders"
                            >
                                Orders
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink
                                className="whitespace-nowrap focus-visible:outline-none focus-visible:ring-4"
                                href="/account/messages"
                            >
                                Messages
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink
                                className="whitespace-nowrap focus-visible:outline-none focus-visible:ring-4"
                                href="/account/addresses"
                            >
                                Addresses
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink
                                className="whitespace-nowrap focus-visible:outline-none focus-visible:ring-4"
                                href="/account/wishlists"
                            >
                                Wish lists
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink
                                className="whitespace-nowrap focus-visible:outline-none focus-visible:ring-4"
                                href="/account/recently-viewed"
                            >
                                Recently viewed
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink
                                className="whitespace-nowrap focus-visible:outline-none focus-visible:ring-4"
                                href="/account/settings"
                            >
                                Account Settings
                            </CustomLink>
                        </li>
                        <li>
                            <form action={logout}>
                                <Button
                                    className="justify-start p-0 font-normal text-black hover:bg-transparent hover:text-black"
                                    type="submit"
                                    variant="subtle"
                                >
                                    Log out
                                </Button>
                            </form>
                        </li>
                    </ul>
                </div>
            ) : (
                <NavigationMenuPrimitive.Link asChild className='flex justify-between p-2 hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20'>
                    <CustomLink aria-label="Login" href="/login">
                        My Account
                    </CustomLink>
                </NavigationMenuPrimitive.Link>
            )}
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
            <NavigationMenuPrimitive.Link asChild className='flex justify-between p-2 hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20'>
                <CustomLink aria-label="Login" href="/account.php?action=order_status">
                    Order Status
                </CustomLink>
            </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
            <NavigationMenuPrimitive.Link asChild className='flex justify-between p-2 hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20'>
                <CustomLink aria-label="Login" href="/contact-us/">
                    Contact Us
                </CustomLink>
            </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
            <NavigationMenuPrimitive.Link asChild className='flex justify-between p-2 hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20'>
                <CustomLink aria-label="Login" href="/blog/">
                    Blog
                </CustomLink>
            </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
            <NavigationMenuPrimitive.Link asChild className='border-green-500 border text-green-500 hover:text-green-500 font-filson px-4 py-2'>
                {cart}
            </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
    </NavigationMenuPrimitive.List>
)

TopMenu.displayName = 'TopMenu';
export default TopMenu;