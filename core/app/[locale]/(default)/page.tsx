import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { getSessionCustomerAccessToken } from '~/auth';
import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';
import { ProductCardCarousel } from '~/components/product-card-carousel';
import { ProductCardCarouselFragment } from '~/components/product-card-carousel/fragment';
import { Slideshow } from '~/components/slideshow';
import { MainBanner } from '~/components/home/main-banner';
import { ShippingBanner } from '~/components/home/shipping-banner';
import { BrandList } from '~/components/home/brand-list';
import { ChooseTonerDesc } from '~/components/home/choose-toner-desc';
import Script from 'next/script'
import { FaqAccordions } from '~/components/ui/faq-accordions';

const HomePageQuery = graphql(
  `
    query HomePageQuery {
      site {
        newestProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
        featuredProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
        categoryTree{
          entityId
          name
          path
          image {
            url: urlTemplate,
            altText
          }
        }
      }
    }
  `,
  [ProductCardCarouselFragment],
);

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('Home');
  const customerAccessToken = await getSessionCustomerAccessToken();

  const { data } = await client.fetch({
    document: HomePageQuery,
    customerAccessToken,
    fetchOptions: customerAccessToken ? { cache: 'no-store' } : { next: { revalidate } },
  });

  const featuredProducts = removeEdgesAndNodes(data.site.featuredProducts);
  const newestProducts = removeEdgesAndNodes(data.site.newestProducts);
  const categoryTop = data.site.categoryTree;

  return (
    <>
      <div className="flex-1 pb-6 sm:px-10 lg:px-12 2xl:mx-auto 2xl:px-0 2xl:container">
        <MainBanner />
      </div>
      <div className="flex-1 px-6 sm:px-10 lg:px-12 2xl:mx-auto 2xl:px-0 2xl:container">
            <BrandList data={ categoryTop } />
      </div>
      <div className="flex-1 px-6 sm:px-10 lg:px-12 2xl:mx-auto 2xl:px-0 2xl:container">
        <ShippingBanner />
      </div>
      <div className='bg-gray-100 py-10  mt-8 mb-8'>
        <div className="flex-1 px-6  sm:px-10 lg:px-12 2xl:mx-auto 2xl:px-0 2xl:container">
            <div className="yotpo yotpo-reviews-carousel pb-4"  data-background-color="transparent"  data-mode="top_rated"  data-type="both"  data-count="9"  data-show-bottomline="1"  data-autoplay-enabled="1"  data-autoplay-speed="3000"  data-testimonials-page-enabled="1"  data-testimonials-page-text="read all reviews"  data-testimonials-page-link="https://www.tonerbuzz.com/reviews/">&nbsp;</div>  
            <Script src="https://cdn-widgetsrepository.yotpo.com/v1/loader/Sqg72uXTQdwAKmnJav4IyqD2noWPVgE9X2KDwsHi" />
        </div>
      </div>
      <div className="flex-1 px-6  sm:px-10 lg:px-12 2xl:mx-auto 2xl:px-0 2xl:container">
        <ProductCardCarousel
          products={featuredProducts}
          showCart={false}
          showCompare={false}
          title={null}
        />
      </div>
      <div className=' bg-gray-100 mt-8 mb-8 '>
        <div className='flex-1 px-6 sm:px-10 lg:px-12 2xl:mx-auto 2xl:px-0 2xl:container'>
          <ChooseTonerDesc />
        </div>
      </div>
      <div className="flex-1 px-6 sm:px-10 lg:px-12 2xl:mx-auto 2xl:px-0 2xl:container">
        <div className='w-[60%] mx-auto pb-6'>
          <h2 className='font-filson text-center text-[28px] font-semibold mb-8'>Toner FAQ</h2>
        <FaqAccordions accordions = {[
          {
            title: 'What Is Toner In A Printer?',
            content : ' <p>Toner is what a laser printer uses to print text and images. The laser printing process is fascinating, and we’re not just saying that because we\'re printer geeks!</p><img src="https://cdn11.bigcommerce.com/s-dnybxc6/stencil/35ee0690-af3e-013d-ec65-2aa277df2fb9/e/e88e7bd0-cc68-013d-18de-5646eebaee66/img/printer-toner-min.jpg" alt="Printer toner"><p class="img-sub">Designs vary according to the manufacturer, but most toner cartridges look something like this.</p>'
          },
          {
            title : 'What Is Toner Made Of?',
            content : 'Toner is basically plastic dust with some added ingredients to help it adhere to the paper and prevent the toner from clumping.'
          },
          {
            title : 'When Do I Need To Replace My Toner?',
            content : 'You need a replacement toner cartridge when your printouts and text get faint. Your printer will likely issue a “low toner” warning before you run out completely.'
          },
          {
            title : 'Do I Buy Color Cartridges or Just Black?',
            content : 'Open your laser printer so you can see the toner cartridges. If there is only one cartridge in there, you have a monochrome printer. If there are four cartridges you have a color printer. Consequently, you could send a color photo to the printer and see if it prints in color or black-and-white to determine if you have a color or monochrome printer.'
          },
          {
            title : 'What Colors Do Toner Cartridges Come In? ',
            content : 'Color laser printers need four standard color toner cartridges: black (K), cyan (C), yellow (Y), and magenta (M). Monochrome laser printers only use black toner.'
          },
          {
            title : 'Why Is Toner More Expensive Than Ink? ',
            content : 'While ink cartridges are priced lower than toner cartridges, they print far fewer pages.'
          },
          {
            title : 'What Kind of Page Yield Should I Look For?',
            content : '<p>You need to decide how frequently you will be printing and if your printer offers high-yield or extra high-yield toner cartridges. If you print a high volume of pages, invest in a high-yield or extra high-yield toner cartridge. High-yield and extra high-yield cartridges contain more toner, last longer, and deliver more printed pages.</p><p>Check out the following resources for more information:</p>\
                <a href="https://www.tonerbuzz.com/blog/what-is-the-difference-between-standard-and-highyield-toner-cartridges/">What is the Difference between Standard and High-Yield Toner Cartridges?</a><br>\
                <a href="https://www.tonerbuzz.com/blog/printing-costs-how-to-accurately-calculate-your-printing-cost-per-page/">Printing Costs: How To Accurately Calculate Your Printing Cost Per Page</a>'
          },
          {
            title : 'Does Toner Buzz Sell Compatible or Remanufactured Toner? ',
            content : ' <p>No. Toner Buzz only sells toner manufactured by the Original Equipment Manufacturer (OEM). Our 20 years in the toner industry has taught us that OEM toner cartridges deliver superior text and image quality, sharper color, and more pages per cartridge.</p>\
                <p>Check out the following resources for more information:</p>\
                <a href="https://www.tonerbuzz.com/blog/toner-cartridges-genuine-oem-vs-compatible-vs-remanufactured/">Toner Cartridges - OEM vs. Compatible vs. Remanufactured</a>'
          },
          {
            title : 'Should I Buy a Single Cartridge or a Combo Pack? ',
            content : 'In general, combo packs will save you money. Combo packs of two or more toner cartridges are available for both color and monochrome laser printers.'
          }

        ]} 
        type='multiple'  />
        </div>
      </div>
    </>
  );
}

export const runtime = 'edge';
