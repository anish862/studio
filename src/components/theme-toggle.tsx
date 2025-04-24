'use client';

import {Button} from "@/components/ui/button";
import {SunIcon, MoonIcon} from "lucide-react";
import {useEffect, useState} from "react";
import {ThemeProvider} from 'next-themes';

export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex justify-end p-4">
                <Button
                    size="sm"
                    variant="ghost"
                    disabled
                >
                    <SunIcon className="mr-2 h-4 w-4"/>
                    Light
                </Button>
                <Button
                    size="sm"
                    variant="ghost"
                    disabled
                >
                    <MoonIcon className="mr-2 h-4 w-4"/>
                    Dark
                </Button>
            </div>
        )
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex justify-end p-4">
                <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => document.documentElement.setAttribute('data-theme', 'light')}
                >
                    <SunIcon className="mr-2 h-4 w-4"/>
                    Light
                </Button>
                <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => document.documentElement.setAttribute('data-theme', 'dark')}
                >
                    <MoonIcon className="mr-2 h-4 w-4"/>
                    Dark
                </Button>
            </div>
        </ThemeProvider>
    );
};
