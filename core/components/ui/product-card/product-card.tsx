import { ReactNode } from 'react';

import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { cn } from '~/lib/utils';

import { Compare } from './compare';

interface Image {
  altText: string;
  src: string;
}

type Price =
  | string
  | {
      type: 'sale';
      currentValue: string;
      previousValue: string;
    }
  | {
      type: 'range';
      minValue: string;
      maxValue: string;
    };

type CustomFields = Array<{
      entityId: number | null;
      name: string | null;
      value: string | null;
  }> | null;

interface Product {
  id: string;
  name: string;
  href: string;
  image?: Image;
  price?: Price;
  subtitle?: string;
  badge?: string;
}

interface Props extends Product {
  addToCart?: ReactNode;
  className?: string;
  imagePriority?: boolean;
  imageSize?: 'square' | 'tall' | 'wide';
  showCompare?: boolean;
  customFields?: CustomFields;
}

const ProductCard = ({
  addToCart,
  className,
  image,
  imagePriority = false,
  imageSize,
  href,
  price,
  id,
  showCompare = true,
  subtitle,
  name,
  customFields,
  ...props
}: Props) => (
  <div className={cn('group relative flex flex-col overflow-visible border p-3 text-center', className)} {...props}>
    <div className="relative flex justify-center pb-3">
      <div
        className={cn('relative flex-auto', {
          'aspect-square': imageSize === 'square',
          'aspect-[4/5]': imageSize === 'tall',
          'aspect-[7/5]': imageSize === 'wide',
        })}
      >
        {image ? (
          <Image
            alt={image.altText}
            className="object-contain"
            fill
            priority={imagePriority}
            sizes="(max-width: 768px) 50vw, (max-width: 1536px) 25vw, 500px"
            src={image.src}
          />
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}
      </div>
    </div>
    <div className={cn('flex flex-1 flex-col gap-1', Boolean(addToCart) && 'justify-start')}>
      {/* {subtitle ? <p className="text-base text-gray-500">{subtitle}</p> : null} */}
      <h3 className="font-filson text-xl text-primary font-bold lg:text-xl">
        <Link
          className="focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-primary/20 focus-visible:ring-0"
          href={href}
        >
          <span aria-hidden="true" className="absolute inset-0 bottom-20" />
          {name}
        </Link>
      </h3>
      <div className="flex flex-wrap items-center justify-center text-center pt-1 font-semibold text-xl">
        {Boolean(price) &&
          (typeof price === 'object' ? (
            <p className="w-auto shrink-0 font-semibold">
              {price.type === 'range' && (
                <span>
                  {price.minValue} - {price.maxValue}
                </span>
              )}

              {price.type === 'sale' && (
                <>
                  <span className="line-through text-gray-300">{price.previousValue}</span>
                  <span className='text-green-400'>{price.currentValue}</span>
                </>
              )}
            </p>
          ) : (
            <span className='text-green-400'>{price}</span>
          ))}

        {showCompare && <Compare id={id} image={image} name={name} />}
        { Boolean(customFields) && customFields?.length !== undefined   && customFields.map((customField) => (
            customField.name == 'Page Yield' &&
              (<div key={customField.entityId}>
                <h3 className="font-semibold">{customField.name}</h3>
                <p>{customField.value}</p>
              </div>)
            ))}
      </div>
    </div>
    {addToCart}
  </div>
);

ProductCard.displayName = 'ProductCard';

export { ProductCard, type Price };
