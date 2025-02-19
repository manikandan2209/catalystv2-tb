'use client';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';
import debounce from 'lodash.debounce';
import { Search as SearchIcon, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Image } from '~/components/image';
import { Link as CustomLink } from '~/components/link';
import { cn } from '~/lib/utils';

import { Button } from '../button';
import { Price } from '../product-card';

import { Input } from './input';

interface Image {
  src: string;
  altText: string;
}

interface Product {
  href: string;
  name: string;
  price?: Price;
  image?: Image;
}

interface Category {
  href: string;
  label: string;
}

interface Brand {
  href: string;
  label: string;
}

interface SearchResults {
  products: Product[];
  categories: Category[];
  brands: Brand[];
}

interface Props {
  initialTerm?: string;
  logo: string | Image;
  position?: string;
  onSearch: (term: string) => Promise<SearchResults | null>;
}

const Search = ({ initialTerm = '', logo, position, onSearch }: Props) => {
  const [term, setTerm] = useState(initialTerm);
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = useTranslations('Components.Header.Search');

  const debouncedOnSearch = useMemo(
    () =>
      debounce(async (query: string) => {
        const results = await onSearch(query);

        setSearchResults(results);
      }, 1000),
    [onSearch],
  );

  const fetchSearchResults = useCallback(
    async (query: string) => {
      await debouncedOnSearch(query);
    },
    [debouncedOnSearch],
  );

  useEffect(() => {
    if (term.length < 3) {
      setSearchResults(null);
    } else {
      setPending(true);

      void fetchSearchResults(term);
    }
  }, [term, fetchSearchResults]);

  useEffect(() => {
    setPending(false);
  }, [searchResults]);

  const handleTermChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };
  const handleTermClear = () => {
    setTerm('');
    inputRef.current?.focus();
  };

  return (
    <>
             <div className='flex col-span-5 items-center'>
            { position != 'main-banner' && <div className='text-white text-xl font-semibold pr-4'>Search for Toner & Ink</div> }
            <div className='relative grow'>
              <Form.Root
                action="/search"
                className="col-span-4 flex lg:col-span-3"
                method="get"
                role="search"
              >
                <Form.Field className="w-full" name="term">
                  <Form.Control asChild required>
                    <Input
                      aria-controls="categories products brands"
                      aria-expanded={!!searchResults}
                      onChange={handleTermChange}
                      onClickClear={handleTermClear}
                      pending={pending}
                      placeholder={t('searchPlaceholder')}
                      ref={inputRef}
                      role="combobox"
                      showClear={term.length > 0}
                      value={term}
                    />
                  </Form.Control>
                </Form.Field>
              </Form.Root>
            </div>
            {searchResults && searchResults.products.length > 0 && (
              <div className="absolute mt-8 grid overflow-auto px-1 lg:grid-cols-3 lg:gap-6">
                <section aria-label={t('categories')}>
                  <h3 className="mb-6 border-b border-gray-200 pb-3 text-xl font-bold lg:text-2xl">
                    {t('categories')}
                  </h3>
                  <ul id="categories" role="listbox">
                    {searchResults.categories.map(({ label, href }) => {
                      return (
                        <li className="mb-3 last:mb-6" key={label}>
                          <a
                            className="align-items mb-6 flex gap-x-6 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                            href={href}
                          >
                            {label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </section>
                <section aria-label={t('products')}>
                  <h3 className="mb-6 border-b border-gray-200 pb-3 text-xl font-bold lg:text-2xl">
                    {t('products')}
                  </h3>
                  <ul id="products" role="listbox">
                    {searchResults.products.map(({ name, href, price, image }) => {
                      return (
                        <li key={href}>
                          <a
                            className="align-items mb-6 flex gap-x-6 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                            href={href}
                          >
                            {image ? (
                              <Image
                                alt={image.altText}
                                className="self-start object-contain"
                                height={80}
                                src={image.src}
                                width={80}
                              />
                            ) : (
                              <span className="flex h-20 w-20 flex-shrink-0 items-center justify-center bg-gray-200 text-lg font-bold text-gray-500">
                                {t('photo')}
                              </span>
                            )}

                            <span className="flex flex-col">
                              <p className="text-lg font-bold lg:text-2xl">{name}</p>
                              {Boolean(price) &&
                                (typeof price === 'object' ? (
                                  <p className="flex flex-col gap-1">
                                    {price.type === 'range' && (
                                      <span>
                                        {price.minValue} - {price.maxValue}
                                      </span>
                                    )}

                                    {price.type === 'sale' && (
                                      <>
                                        <span>
                                          Was:{' '}
                                          <span className="line-through">
                                            {price.previousValue}
                                          </span>
                                        </span>
                                        <span>Now: {price.currentValue}</span>
                                      </>
                                    )}
                                  </p>
                                ) : (
                                  <span>{price}</span>
                                ))}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </section>
                <section aria-label={t('brands')}>
                  <h3 className="mb-6 border-b border-gray-200 pb-3 text-xl font-bold lg:text-2xl">
                    {t('brands')}
                  </h3>
                  <ul id="brands" role="listbox">
                    {searchResults.brands.map(({ label, href }) => {
                      return (
                        <li className="mb-3 last:mb-6" key={label}>
                          <a
                            className="align-items mb-6 flex gap-x-6 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                            href={href}
                          >
                            {label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              </div>
            )}
            {searchResults && searchResults.products.length === 0 && (
              <p className="p-6">{t('noSearchResults', { term })}</p>
            )}
        </div>  
    </>
  );
};

export { Search, type SearchResults };
