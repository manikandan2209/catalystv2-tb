import { FragmentOf, graphql } from '~/client/graphql';
import { Link } from '~/components/link';
import { Image } from '~/components/image';
import { UrlObject } from 'url';

interface Props {
  data: Array<{
    entityId: number;
    name: string;
    path: string;
    image:{
        altText:string;
        url:string;
    } | null
  }>;
}
  
export const BrandList = ({ data }: Props) => {
  if (!data.length) {
    return null;
  }
  // console.log(data);
  return (
    <ul className="flex flex-wrap gap-6 mb-5">
        {data.map((item) => (
          <li key={item.path} className='bg-gray-100 basis-1/6 grow  flex items-center justify-center h-[100px] '>
            <Link href={item.path}  className="flex w-full h-full items-center justify-center p-2">
                { item.image && ( <Image
                alt={item.image.altText}
                className="max-h-full object-contain object-center"
                width={125}
                height={80}
                src={item.image.url}
            /> )}
            </Link>
          </li>
        ))}
      </ul>
  )
};
