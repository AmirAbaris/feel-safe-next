import { useTranslations } from 'next-intl';
import { Button } from './ui/button';

export default function HeroSection() {
    const t = useTranslations('homePage.heroSection');

    return (
        <div className='flex flex-col items-center gap-y-8'>
            <h1 className='text-[62px] font-bold text-center'>{t('safeHeaven')}</h1>
            <Button>{t('connectEmotions')}</Button>
        </div>
    );
}