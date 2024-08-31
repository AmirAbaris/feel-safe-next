import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

// Accept the locale as a prop from the layout or page
export default function Navbar({ locale }: { locale: string }) {
    const t = useTranslations('navbar');

    return (
        <nav className="py-4 px-8 flex justify-between items-center">
            {/* "Feel Safe" Text */}
            <Link href={`/${locale}/`} className="text-xl font-bold">
                {t('feelSafe')}
            </Link>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
                <ModeToggle /> {/* "Dark Mode" Toggle Button */}

                <Button variant="ghost">
                    {t('login')} {/* "Login" Button */}
                </Button>
                <Button asChild>
                    {/* Use the locale prop to construct the href */}
                    <Link href={`/${locale}/sign-up`}>
                        {t('signUp')} {/* "Sign Up" Button */}
                    </Link>
                </Button>
            </div>
        </nav>
    );
}