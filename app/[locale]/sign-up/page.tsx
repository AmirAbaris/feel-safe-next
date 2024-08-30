import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";

export default function Page() {
    const t = useTranslations('signUpPage');
    const email = t('email');

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">{email}</Label>
                <Input className="max-w-sm" id="email" type={email} placeholder={email} />
            </div>
        </div>
    );
}