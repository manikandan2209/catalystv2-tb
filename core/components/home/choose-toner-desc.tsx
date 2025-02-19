import Image from 'next/image';
import { Link } from '~/components/link';
import { imageManagerImageUrl } from '~/lib/store-assets';

export const ChooseTonerDesc = () => {
    return (
        <>
        <div className="flex py-8">
            <div className="w-[33.33%]  bg-[#478FCD]">
                <div className="flex h-full justify-center items-center text-center text-white flex-col">
                    <Image
                        alt="How to Choose Toner for Your Printer"
                        className=""
                        priority
                        sizes=""
                        width={150}
                        height={150}
                        src={'/images/how-to-choose-toner-for-your-printer.png'}
                        />
                    <h2 className='font-filson text-[42px] font-semibold'>How to Choose Toner for Your Printer</h2>
                </div>
            </div>
            <div className="flex-1 p-10 bg-white">
                    <div className="pb-5">
                        <span className="bg-[#4baf4d] text-white w-6 h-6 text-sm font-semibold leading-6 inline-block align-middle text-center rounded-full mr-1">1</span>
                        <h3 className='text-primary inline text-xl font-bold align-middle'>Check your printer (and toner) brand</h3>
                        <div className="pt-3 text-[#3f3f3f]">
                            <p>This will be written on the front of your printer in big letters and numbers. For example: <a className='underline' href="https://www.tonerbuzz.com/brother-mfc-8500/">Brother MFC 8500</a> or <a className='underline' href="https://www.tonerbuzz.com/laserjet-2300d-toner/">HP LaserJet 2300d</a>. For more information on printer models and types, explore our <a className='underline' href="https://www.tonerbuzz.com/blog/the-toner-buzz-guide-to-printer-brands-and-models/">Toner Buzz Guide to Printer Brands and Models</a>.</p>
                        </div>
                    </div>
                    <div className="pb-5">
                        <span className="bg-[#4baf4d] text-white w-6 h-6 text-sm font-semibold leading-6 inline-block align-middle text-center rounded-full mr-1">2</span>
                        <h3 className='text-primary inline text-xl font-bold align-middle'>Check your printer type</h3>
                        <div className="pt-3 text-[#3f3f3f]">
                            <p>Do you own a <a className='underline' href="https://www.tonerbuzz.com/blog/inkjet-vs-laser">laser printer or an inkjet?</a> Laser printers need toner cartridges, while inkjet printers use ink cartridges. </p>
                        </div>
                    </div>
                    <div className="pb-5">
                        <span className="bg-[#4baf4d] text-white w-6 h-6 text-sm font-semibold leading-6 inline-block align-middle text-center rounded-full mr-1">3</span>
                        <h3 className='text-primary inline text-xl font-bold align-middle'>Find the right toner model for your printer</h3>
                        <div className="pt-3 text-[#3f3f3f]">
                            <p>To find the right toner for your printer simply enter your printer brand and model number in the search box above!</p>
                            <p>Toner Buzz custom search engine makes finding the right printer cartridge simple. Type your printer model, brand, or series into the finder window and a list of compatible toner cartridges will be displayed.</p>
                        </div>
                    </div>
                    <div className="pb-5">
                        <span className="bg-[#4baf4d] text-white w-6 h-6 text-sm font-semibold leading-6 inline-block align-middle text-center rounded-full mr-1">4</span>
                        <h3 className='text-primary inline text-xl font-bold align-middle'>Consider high-yield for additional value</h3>
                        <div className="pt-3 text-[#3f3f3f]">
                            <p>Ink and toner cartridges usually come in <a className='underline' href="https://www.tonerbuzz.com/blog/what-is-the-difference-between-standard-and-highyield-toner-cartridges/">standard and high-yield</a> varieties. High-yield costs a bit more but prints more pages and lowers your overall <a className='underline' href="https://www.tonerbuzz.com/blog/printing-costs-how-to-accurately-calculate-your-printing-cost-per-page/">cost per page</a>.</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className="flex pb-8 gap-8">
            <div className="width-[50%] flex-1">
                <div className="bg-[#fff] h-full pt-[20px] px-[30px] pb-[30px]">
                    <h2 className="text-primary font-semibold font-filson text-2xl uppercase inline-block mb-4 relative before:content-[''] before:bg-primary before:block before:h-[3px] before:w-full before:-top-5 before:absolute">Why Buy Toner From Toner Buzz?</h2>
                    <div className="text-[#3f3f3f]">
                        <p className='mb-3'>Toner Buzz only sells genuine, OEM toner at shockingly low prices. That means you’re getting the best product for your printer at the most competitive prices. Plus, Toner Buzz offers FREE SHIPPING! You pay $0!</p>
                        <p>
                            Whether you’re looking for an OEM ink or toner, Toner Buzz makes the buying process simple. We have genuine supplies for all major laser and inkjet printer manufacturers. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="width-[50%] flex-1">
                <div className="moneyBack bg-[#fff] h-full pt-[20px] px-[30px] pb-[30px]">
                    <h2 className="text-primary font-semibold font-filson text-2xl uppercase inline-block mb-4 relative before:content-[''] before:bg-primary before:block before:h-[3px] before:w-full before:-top-5 before:absolute">Money-Back Guarantee!</h2>
                    <div className="text-[#3f3f3f]">
                        <p>
                            Toner Buzz wants you to be happy with your toner cartridge or any other item you purchase from us. That’s why we offer a money-back guarantee. (The warranty is limited on ink cartridges since they have a shorter shelf life.) Toner and laser printers are our bread and butter, and your printer is our best friend!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}