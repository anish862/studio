'use client';

import {Button} from '@/components/ui/button';
import {SunIcon, MoonIcon} from 'lucide-react';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {Switch} from "@/components/ui/switch";

export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex justify-end p-4">
                <Switch
                    size="sm"
                    disabled
                />
            </div>
        )
    }

    return (
        <div className="flex justify-end p-4">
            <Switch
                size="sm"
                onChecked={resolvedTheme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
        </div>
    );
};


