'use client';

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { SortDirection } from './types';

interface SortColumnProps {
  field: string;
}

export function SortColumn({ field }: SortColumnProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const fields = searchParams.getAll('field');
  const orders = searchParams.getAll('sort');

  const fieldIndex = fields.findIndex((itemField) => itemField === field);

  const createQueryString = (sort: SortDirection) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', searchParams.get('page') || '0');
    params.set('size', searchParams.get('size') || '5');

    field && params.set('field', field);
    sort && params.set('sort', sort);

    return params.toString();
  };

  return (
    <>
      {orders[fieldIndex] !== 'desc' ? (
        <Link
          href={pathname + '?' + createQueryString('desc')}
          prefetch={false}
        >
          <ArrowUpIcon className="table-header-sort" />
        </Link>
      ) : (
        <div className="table-header-sort"></div>
      )}

      {orders[fieldIndex] !== 'asc' ? (
        <Link href={pathname + '?' + createQueryString('asc')} prefetch={false}>
          <ArrowDownIcon className="table-header-sort" />
        </Link>
      ) : (
        <div className="table-header-sort"></div>
      )}
    </>
  );
}
