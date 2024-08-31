'use client';

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";

export default function SignUpForm() {
    const t = useTranslations('signUpPage');
    const email = t('email');
    const password = t('password');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const emailInput = form.email.value;
        const passwordInput = form.password.value;

        // Clear previous errors
        setErrors({});

        // Basic validation
        let hasErrors = false;
        if (!emailInput) {
            setErrors(prev => ({ ...prev, email: t('emailRequired') }));
            hasErrors = true;
        }
        if (!passwordInput) {
            setErrors(prev => ({ ...prev, password: t('passwordRequired') }));
            hasErrors = true;
        }

        if (!hasErrors) {
            // Handle form submission
            console.log('Form submitted');
        }
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <form className="grid w-full max-w-sm items-center gap-y-4">
                <div>
                    <Label htmlFor="email">{email}</Label>
                    <Input
                        className="max-w-sm"
                        id="email"
                        type="email"
                        placeholder={email}
                        aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                    <Label htmlFor="password">{password}</Label>
                    <Input
                        className="max-w-sm"
                        id="password"
                        type="password"
                        placeholder={password}
                        aria-invalid={!!errors.password}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                <Button className="w-full" type="submit">{t('signUp')}</Button>
            </form>
        </div>
    );
}