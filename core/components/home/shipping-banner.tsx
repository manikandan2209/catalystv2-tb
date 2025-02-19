import Image from 'next/image';
import { Link } from '~/components/link';
import { imageManagerImageUrl } from '~/lib/store-assets';

export const ShippingBanner = () => {
    return (
        <div className="middleSec">
        <Link href="/shipping-returns/">
        <div className="banner-wrap flex">
            <div className="one-fourth pr-4 relative">
                <Image
                    alt="Printer and toner"
                    className=""
                    priority
                    sizes=""
                    width={357}
                    height={297}
                    src={imageManagerImageUrl('orangeblock.png','357w')}
                    />
                 <span className="absolute mx-auto my-0 top-[40%] bottom-auto w-auto h-auto right-0 left-0"><span className="text-[23px] max-w-[270px] mx-auto my-0 text-white font-bold px-[10px] py-0 leading-[normal] block text-center font-sans">One day shipping to most Northeastern States</span></span></div>
            <div className="one-third relative">
                <Image
                    alt="Printer and toner"
                    className=""
                    priority
                    width={841}
                    height={297}
                    src={imageManagerImageUrl('fedexupdated3.jpg','841w')}
                    /> 
                    <span className="banner-content absolute max-w-[300px] top-[50%] left-[2%] -translate-y-1/2 text-white text-4xl font-sans font-semibold text-center leading-[48px]"><span>Order before<br />5 PM EST, ships the <span className="text-[#fb991e]">same day!</span></span></span></div>
        </div>
    </Link>
    </div>
    )
}