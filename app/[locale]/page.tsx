import HeroSection from '@/components/HeroSection';
import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <div className='flex h-screen items-center justify-center'>
            <HeroSection />
        </div>
    );
}