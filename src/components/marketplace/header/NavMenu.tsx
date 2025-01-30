import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguageStore } from '@/store/languageStore';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface NavMenuProps {
  className?: string;
}

const NavMenu = ({ className }: NavMenuProps) => {
  const pathname = usePathname();
  const { language } = useLanguageStore();
  const t = useTranslations('Marketplace.navigation');

  const navItems = [
    { label: t('home'), href: `/${language}` },
    { label: t('products'), href: `/${language}/products` },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={cn('hidden md:flex items-center space-x-8', className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'relative py-2 text-sm transition-colors hover:text-gray-900 group',
            isActive(item.href) ? 'text-gray-900' : 'text-gray-600'
          )}
        >
          {item.label}
          {/* Línea verde que aparece en hover y cuando está activo */}
          <span
            className={cn(
              'absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-200',
              'group-hover:scale-x-100 bg-filter_active',
              isActive(item.href) && 'scale-x-100'
            )}
          />
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;