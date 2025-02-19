import Image from 'next/image';
import banner1 from './main-banner/home-search.png';
import banner2 from './main-banner/top-right.png';
import banner3 from './main-banner/bottom-right.png';
import { QuickSearch } from '../header/quick-search';
import { Link } from '~/components/link';

export const MainBanner = () => {
    return (
        <div className="flex gap-3 pt-4">
            <div className="flex-1 relative">
                <Image
                alt="Printer and toner"
                className=""
                priority
                sizes=""
                height={418}
                src={banner1}
                />
                <div className='absolute bottom-14 right-8 left-8 text-white font-filson text-center'>
                    <h1 className='text-4xl mb-8'>Genuine Printer Toner <strong className='text-[52px] block'>At Amazing Prices</strong></h1>
                    <QuickSearch position='main-banner'/>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-3'>
                <div className='relative'>
                    <Link href='/reduce-printing-costs-up-to-40-with-toner-buzz/'>
                    <Image
                    alt="Printer and toner"
                    className=""
                    priority
                    sizes=""
                    src={banner2}
                    />
                    <div className="absolute top-3 right-8 left-8 text-white font-filson text-center">
                        <span className='block text-[28px]'>Reduce Printing Costs</span><span className="block text-7xl uppercase">up to 40%</span>
                    </div>
                    </Link>
                </div>
                <div className="relative ">
                    <Link href='/reviews/'>
                    <Image
                    alt="Printer and toner"
                    className=""
                    priority
                    sizes=""
                    src={banner3}
                    />
                    <p className='absolute text-3xl text-white text-center top-[12%] left-0 right-0 w-[63%]'>Our customers<br/>Rave About us</p>
                    <p className='absolute text-2xl text-white text-center top-[18%] left-auto right-0 w-[37%]'>Over 11,500</p>
                    </Link>
                </div>
          </div>
        </div>
    )
}