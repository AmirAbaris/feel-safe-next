import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
    const t = useTranslations('navbar'); // Using 'navbar' namespace for translations

    return (
        <nav className="py-4 px-8 flex justify-between items-center">
            {/* "Feel Safe" Text */}
            <div className="text-xl font-bold">
                {t('feelSafe')}
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
                <ModeToggle /> {/* "Dark Mode" Toggle Button */}

                <Button variant="ghost">
                    {t('login')} {/* "Login" Button */}
                </Button>
                <Button>
                    {t('signUp')} {/* "Sign Up" Button */}
                </Button>
            </div>
        </nav>
    );
}